import { useEffect, useState } from "react";
import "./App.css";
import { GoogleAuthProvider, auth, signInWithPopup } from "./firebase.js";
import axios from "axios";

function App() {
  const [at, setat] = useState(null);
  //   useEffect(() => {
  //       axios.
  //   })
  const signIn = async () => {
    // const auth = getAuth();
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider).then((result) => {
      setat(GoogleAuthProvider.credentialFromResult(result).accessToken);
      console.log(result);
    });
  };

  console.log(at);
  const test = async () => {
    await axios
      .post(
        "http://twiki.csc.depauw.edu:5000/auth",
        {},
        {
          headers: {
            Authorization: at,
          },
        }
      )
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="App">
      <button onClick={signIn}>Google</button>
      <button onClick={test}>Tes</button>
    </div>
  );
}

export default App;
