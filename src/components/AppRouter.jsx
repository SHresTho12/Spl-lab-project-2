import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { useAuth } from '../Contexts/AuthContexts'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import Homepage from '../pages/Homepage'
import Loginpage from '../pages/Loginpage'
import NotfoundPage from '../pages/NotfoundPage'
import Profilepage from '../pages/Profilepage'
import ProtectedPage from '../pages/ProtectedPage'
import Registerpage from '../pages/Registerpage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import GamePage from '../pages/GamePage'
import TutorialsPage from '../pages/TutorialPage/Tutorial'
import MixOrMatch from '../pages/Games/MemoryGame/MixOrMatch'
import DrawingApp from '../pages/Games/DrawingApp/DrawingApp'
import Quizzes from '../pages/Quiz/QuizPage'

import ChildInfo from '../pages/ChildrenInformation'


import VoiceCard from '../pages/VoiceCard'

import DxBall from './DXBallGame/Board'




import Play from './NumberQuiz';
import QuizSummary from './QuizSummary';
import NumberTutorialPage from '../pages/TutorialPage/NumberTutorialPage'
import ColorsTutorials from '../pages/TutorialPage/ColorsTutorials'
import AlphabetsTutorials from '../pages/TutorialPage/AlphabetsTutorials'
import ShapesTutorial from '../pages/TutorialPage/ShapesTutorial'
import AnimalTutorials from '../pages/TutorialPage/AnimalTutorials'
import PatternsTutorials from '../pages/TutorialPage/PatternsTutorials'
import Todo from '../pages/ToDo'
export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
        
        
          <Route path="/play/NumberQuiz" exact component={Play} />
          <Route path="/play/quizSummary" exact component={QuizSummary} />

          <Route exact path='/drawing'  component={DrawingApp}/>

          <Route exact path='/DxBall' component={DxBall}/>

          <Route exact path='/memoryGameMixOrMatch' component={MixOrMatch}/>
          <ProtectedRoute exact path='/games' component={GamePage} />
          <ProtectedRoute exact path='/quizzes' component={Quizzes} />


          <Route exact path='/com' component={VoiceCard}/>
          <Route exact path='/NumberTutorial' component={NumberTutorialPage}/>
          <Route exact path='/ColorsTutorials' component={ColorsTutorials}/>
          <Route exact path='/AlphabetsTutorials' component={AlphabetsTutorials}/>
          <Route exact path='/ShapesTutorials' component={ShapesTutorial}/>
          <Route exact path='/AnimalsTutorials' component={AnimalTutorials}/>
          <Route exact path='/PatternsTutorials' component={PatternsTutorials}/>
          <Route exact path='/tutorials' component={TutorialsPage} />

          <ProtectedRoute exact path='/login' component={Loginpage} />
          <ProtectedRoute exact path='/register' component={Registerpage} />
          <ProtectedRoute exact path='/profile' component={Profilepage} />
          <ProtectedRoute exact path='/toDo' component={Todo} />
          <ProtectedRoute exact path='/protected-page' component={ProtectedPage} />
          <ProtectedRoute exact path='/forgot-password' component={ForgotPasswordPage} />
          <ProtectedRoute exact path='/reset-password' component={ResetPasswordPage} />
          <ProtectedRoute exact path='/info' component={ChildInfo} />
          <Route exact path='*' component={NotfoundPage} />


          
          
        </Switch>
      </Router>
    </>
  )
}


function ProtectedRoute(props) {
  const { currentUSer } = useAuth()
  const { path } = props
  console.log('path', path)
  const location = useLocation()
  console.log('location state', location.state)

  if (
    path === '/login' ||
    path === '/register' ||
    path === '/forgot-password' ||
    path === '/reset-password'
  ) {
    return currentUSer ? (
      <Redirect to={location.state?.from ?? '/profile'} />
    ) : (
      <Route {...props} />
    )
  }
  return currentUSer ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: path },
      }}
    />
  )
    }