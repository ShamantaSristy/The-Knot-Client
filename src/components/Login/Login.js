import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import firebaseConfig from "./firebase.config";
// import { UserContext } from "../Home/Home";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import './Login';
import { Button, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const setUserToken = () =>{
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('token',idToken)
      }).catch(function(error) {
        // Handle error
      });
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {...loggedInUser ,name: displayName, email: email} 
            setLoggedInUser(signedInUser);
            setUserToken();
            history.replace(from);
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

 


    return (
        <div>
             <Container style={{marginTop:'30vh'}}>
             <Button onClick={handleGoogleSignIn} variant="secondary" size="lg" block>
               Continue with Google
             </Button>
             </Container>
        </div>
    );
};

export default Login;