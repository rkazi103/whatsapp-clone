import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../services/firebase";
import Login from "./login";
import Loading from "../components/Loading";
import { useEffect } from "react";
import firbease from "firebase";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firbease.firestore.FieldValue.serverTimestamp(),
          photoUrl: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading)
    return (
      <>
        <GlobalStyles />
        <Loading />
      </>
    );

  if (!user)
    return (
      <>
        <GlobalStyles />
        <Login />
      </>
    );

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
