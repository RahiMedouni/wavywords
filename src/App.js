import "./App.css";
import Navbar from "./Components/Navigation";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Store from "./Pages/Store";
import StoreAdmin from "./Pages/StoreAdmin";
import ProfileAuthor from "./Pages/ProfileAuthor";
import Contactus from "./Pages/Contactus";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SignupAuthor from "./Pages/SignupAuthor";
import LandingPage from "./Pages/LandingPage";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/store/*' element={<Store />} />
        <Route path='/storeadmin/*' element={<StoreAdmin />} />
        <Route path='/profile/*' element={<ProfileAuthor />} />
        <Route path='/contactus/' element={<Contactus />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signupauthor' element={<SignupAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
