import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import { login, logout } from './actions/authActions';
import { fetchFavoriteQuestions } from "./actions/questionActions";
import { Footer } from "./components/Footer";
import { PrivateNavbar, PublicNavbar } from './components/Navbar';
import AnswerFormPage from './pages/AnswerFormPage';
import FavoriteQuestionsPage from './pages/FavoriteQuestionsPage';
import HomePage from './pages/HomePage';
import OwnerQuestionsPage from './pages/OwnerQuestionsPage';
import QuestionFormPage from './pages/QuestionFormPage';
import QuestionsPage from './pages/QuestionsPage';
import SingleQuestionPage from './pages/SingleQuestionPage';

firebase.initializeApp({
  apiKey: "AIzaSyAjvZt_q5ARLKk-1g6ooYQyeJz5hX2wGaM",
  authDomain: "question-and-answer-147ef.firebaseapp.com",
  projectId: "question-and-answer-147ef",
  storageBucket: "question-and-answer-147ef.appspot.com",
  messagingSenderId: "435005601089",
  appId: "1:435005601089:web:56e0c0737a840c38cdddc0",
  measurementId: "G-E6F4G3XY31"
});

const auth = firebase.auth();

const App = ({ dispatch }) => {
  const [user] = useAuthState(auth);
  if(user){
    dispatch(fetchFavoriteQuestions(user.uid));
    dispatch(login(user.email, user.uid));
  }
  return (
    <Router>
    
      {user ?
        <>
          <PrivateNavbar />
          <Switch>
            <Route exact path="/" component={() => {
              return <HomePage><SignOut dispatch={dispatch} /></HomePage>
            }} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/list" component={OwnerQuestionsPage} />
            <Route exact path="/listFavoritesQuestion" component={FavoriteQuestionsPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Route exact path="/new" component={QuestionFormPage} />
            <Redirect to="/" />
          </Switch>
        </> :
        <>
          <PublicNavbar />
          <Switch>
            <Route exact path="/" component={() => {
              return <HomePage><SignIn dispatch={dispatch} /></HomePage>
            }} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Redirect to="/" />
          </Switch>
        </>
      }
      <Footer/>
    </Router>
  )
}


function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button className="button right" onClick={signInWithGoogle}>Sign in with google</button>;
}

function SignOut({ dispatch }) {
  return (
    auth.currentUser && (
      <button
        className="button right"
        onClick={() => {
          dispatch(logout())
          auth.signOut();
        }}
      >
        Sign out
      </button>
    )
  );
}


export default App
