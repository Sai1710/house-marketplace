import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";
import { useLocation, useNavigate } from "react-router";

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);
      const user = res.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.id), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with google");
    }
  };
  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "Up" : "In"} with </p>
      <button className="socialIconDiv" onClick={onGoogleClick}>
        <img className="socialIconImg" src={googleIcon} alt="Google" />
      </button>
    </div>
  );
}

export default OAuth;
