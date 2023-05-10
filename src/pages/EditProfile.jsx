import React, { useContext, useState, useEffect } from "react";
import "../styles/editprofile.css";
import { Form, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { updateProfile } from "firebase/auth";
import {
  doc, setDoc, getDoc, Timestamp,
} from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../Auth";
import { db, storage } from "../firebase";

function EditProfile() {
  const currentUser = useContext(AuthContext);
  const [formData, setFormData] = useState({});
  const [userData, setUserData] = useState({});
  const [file, setFile] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const { uid } = currentUser;
  const navigate = useNavigate();
  const {
    tweeter, aboutMe, displayName,
  } = userData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // action gathers data from form and sends it to db
  async function action() {
    if (file) {
      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(imageRef);
      await setFormData({ ...formData, photoURL: url });
    }
    await updateProfile(currentUser, formData);
    await setDoc(doc(db, `users/${uid}`), formData, { merge: true });
    navigate("/myprofile");
  }

  async function loadUserData() {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    // if user doesnt have own db document he gets default user name and avatar
    if (docSnap.exists()) {
      setUserData(docSnap.data());
    } else {
      const defaultUserRef = await getDoc(doc(db, "users", "defaultUser"));
      const defaultUserInfo = {
        displayName: `user${uuidv4().slice(0, 8)}`,
        photoURL: defaultUserRef.data().photoURL,
        joinedAt: Timestamp.fromDate(new Date()),
      };
      await setDoc(doc(db, `users/${uid}`), defaultUserInfo, { merge: "true" });
      await updateProfile(currentUser, defaultUserInfo);
      loadUserData();
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);
  useEffect(() => {
    if (file) {
      setImageRef(ref(storage, `avatars/${file.name}`));
    }
  }, [file]);

  return (
    <div className="my-profile-page">

      <Form method="post" id="edit-profile-form">
        <label htmlFor="displayName">
          Display name:
          <input type="text" name="displayName" id="displayName" defaultValue={displayName} onChange={handleInputChange} />
        </label>
        <label htmlFor="avatarImage">
          Avatar:
          <input type="file" name="avatarImage" id="avatarImage" accept="image/*" onChange={(event) => { setFile(event.target.files[0]); }} />
        </label>
        <label htmlFor="tweeter">
          Tweeter:
          <input type="text" name="tweeter" id="tweeter" defaultValue={tweeter || "@example"} onChange={handleInputChange} />
        </label>
        <label htmlFor="aboutMe">
          About me:
          <input type="text" name="aboutMe" id="aboutMe" defaultValue={aboutMe || ""} onChange={handleInputChange} />
        </label>
        <div>
          <Button variant="contained" type="button" onClick={(event) => action(event)}>Save</Button>
          <Button type="button" onClick={() => { navigate(-1); }}>Cancel</Button>
        </div>

      </Form>
    </div>
  );
}

export default EditProfile;
