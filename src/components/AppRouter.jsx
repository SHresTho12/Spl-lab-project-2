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
import Quizzes from '../pages/Quiz/QuizPage'
import numberQuiz from '../pages/Quiz/NumberQuiz'

export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/memoryGameMixOrMatch' component={MixOrMatch}/>
          <Route exact path='/games' component={GamePage} />
          <Route exact path='/quizzes' component={Quizzes} />
          <Route exact path='/tutorials' component={TutorialsPage} />
          <ProtectedRoute exact path='/login' component={Loginpage} />
          <ProtectedRoute exact path='/register' component={Registerpage} />
          <ProtectedRoute exact path='/profile' component={Profilepage} />
          <ProtectedRoute exact path='/protected-page' component={ProtectedPage} />
          <ProtectedRoute exact path='/forgot-password' component={ForgotPasswordPage} />
          <ProtectedRoute exact path='/reset-password' component={ResetPasswordPage} />
          <Route exact path='*' component={NotfoundPage} />


          <Route exact path='/numberQuiz' component={numberQuiz} />
          
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