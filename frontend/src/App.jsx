import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Secret from "./pages/Secret"

const App = () => {
  return (    
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="secret" element={<Secret/>}/>
    </Routes>
  )
}

export default App