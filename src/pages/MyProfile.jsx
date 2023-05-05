import React, { useContext } from "react";
import "../styles/myprofile.css";
import { Form, redirect } from "react-router-dom";
import { Button } from "@mui/material";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Auth";

export async function action({ request }) {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);
  await updateProfile(currentUser, updates);
  return redirect("/myprofile");
}

function MyProfile() {
  const {
    displayName, photoURL, tweeter, aboutMe,
  } = useContext(AuthContext);

  // updateProfile(currentUser, {
  //   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg",
  // }).then(() => {
  //   console.log("updated");
  // }).catch((error) => {
  //   console.log(error);
  // });

  return (
    <div className="my-profile-page">

      <Form method="post" id="edit-profile-form">
        <label htmlFor="displayName">
          Display name:
          <input type="text" name="displayName" id="displayName" defaultValue={displayName} />
        </label>
        <label htmlFor="photoURL">
          Avatar URL:
          <input type="text" name="photoURL" id="photoURL" defaultValue={photoURL || "www.example.com/avatar.jpg"} />
        </label>
        <label htmlFor="tweeter">
          Tweeter:
          <input type="text" name="tweeter" id="tweeter" defaultValue={tweeter || "@example"} />
        </label>
        <label htmlFor="aboutMe">
          About me:
          <input type="text" name="aboutMe" id="aboutMe" defaultValue={aboutMe || "@example"} />
        </label>
        <div>
          <Button variant="contained" type="submit">Save</Button>
          <Button type="button">Cancel</Button>
        </div>

      </Form>
    </div>
  );
}

export default MyProfile;
