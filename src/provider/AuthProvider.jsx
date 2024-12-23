import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);

  const createUser = async (email, password, name = null, photoURL = null) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userDetails = userCred.user;

      await updateProfile(userDetails, {
        displayName: name,
        photoURL: photoURL,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateProfileInfo = (name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    console.log("logout called");
    return signOut(auth);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const logInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // fetching foods
  // useEffect(() => {
  //   fetch("https://movie-mania-server-drab.vercel.app/foods")
  //     .then((res) => res.json())
  //     .then((data) => setFoods(data))
  //     .catch((error) => console.log(error));
  // }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    logOut,
    logIn,
    logInGoogle,
    updateProfileInfo,
    loading,
    resetPassword,
    foods,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
