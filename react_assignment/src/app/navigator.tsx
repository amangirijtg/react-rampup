import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Search from "./components/search";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import UserDetails from "./components/userDetails";
import UserNotPresent from "./components/userNotPresent";
import { ROUTE_PATHS } from "./constants/constants";

function Navigator()  {
    return (
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path={ROUTE_PATHS.home} element={<Home />} ></Route>
            <Route path={ROUTE_PATHS.about} element={<About />} ></Route>
            <Route path={ROUTE_PATHS.search} element={<Search />} ></Route>
            <Route path={ROUTE_PATHS.notFound} element={<UserNotPresent />} ></Route>
            <Route path={ROUTE_PATHS.username} element={<UserDetails />} ></Route>
            {/* <Route path='/' element={<UserDetails data={userData} />} ></Route> */}
        </Routes>
        </BrowserRouter>
    )
}
export default Navigator
