import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { Routes, Router, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route
            path='/auth'
            element={<SignIn />}
          />
        <Route
            path='/registrar'
            element={<SignUp />}
            />
      </Routes>
    </>
  )
}

export default App
