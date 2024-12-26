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
import axios from "axios";

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
  const [fetching, setFetching] = useState(1);
  useEffect(() => {
    axios
      .get("http://localhost:5000/foods")
      .then((res) => setFoods(res.data))
      .catch((error) => console.log("Error while fetching data: ", error));
  }, [fetching]);
  const authInfo = {
    user,
    setUser,
    createUser,
    logOut,
    logIn,
    logInGoogle,
    loading,
    setLoading,
    resetPassword,
    foods,
    setFetching,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
