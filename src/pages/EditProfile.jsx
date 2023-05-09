import React, { useContext, useState, useEffect } from "react";
import "../styles/editprofile.css";
import { Form, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { updateProfile } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { AuthContext } from "../Auth";
import { db } from "../firebase";

function EditProfile() {
  const currentUser = useContext(AuthContext);

  const { displayName, photoURL } = useContext(AuthContext);
  const { uid } = currentUser;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [userData, setUserData] = useState({});

  const { tweeter, aboutMe } = userData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  async function action() {
    await updateProfile(currentUser, formData);
    await setDoc(doc(db, "users", uid), formData, { merge: "true" });
    navigate("/myprofile");
  }

  async function loadUserData() {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await setUserData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }
  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <div className="my-profile-page">

      <Form method="post" id="edit-profile-form">
        <label htmlFor="displayName">
          Display name:
          <input type="text" name="displayName" id="displayName" defaultValue={displayName} onChange={handleInputChange} />
        </label>
        <label htmlFor="photoURL">
          Avatar URL:
          <input type="text" name="photoURL" id="photoURL" defaultValue={photoURL || "www.example.com/avatar.jpg"} onChange={handleInputChange} />
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