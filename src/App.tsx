import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { Routes, Router, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route
            path='/signin'
            element={<SignIn />}
          />
        <Route
            path='/signup'
            element={<SignUp />}
            />
      </Routes>
    </>
  )
}

export default App
