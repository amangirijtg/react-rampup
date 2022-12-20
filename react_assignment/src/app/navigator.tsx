import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Search from "./components/search";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import UserDetails from "./components/userDetails";
import UserNotPresent from "./components/userNotPresent";

function Navigator()  {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/about' element={<About />} ></Route>
            <Route path='/search' element={<Search />} ></Route>
            <Route path='/not-found' element={<UserNotPresent />} ></Route>
            <Route path='/:username' element={<UserDetails />} ></Route>
            {/* <Route path='/' element={<UserDetails data={userData} />} ></Route> */}
        </Routes>
        </BrowserRouter>
    )
}
export default Navigator
