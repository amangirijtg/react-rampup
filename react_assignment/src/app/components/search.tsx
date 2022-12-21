import { useState, BaseSyntheticEvent } from "react"
import getUserDetails from "../services/getUserDetails"
import { useNavigate } from "react-router-dom"
import { UserType } from "../interfaces/userInterface"
import { ROUTE_PATHS } from "../constants/constants"

const Search = () => {
    const demoUserData: UserType = {
        avatar_url: "https://avatars.githubusercontent.com/u/97114554?v=4",
        login: "",
        username: "",
        location: "",
        followers: 0,
        following: 0,
        bio: "",
        html_url: "",
        email: ""
    }
    const [userInfo, setUserInfo] = useState(demoUserData)
    const [username, setUsername] = useState('')
    const navigate = useNavigate();
    const [previewUserDetails, setpreviewUserDetails] = useState(false)
    const handleEvent = (event: BaseSyntheticEvent) => {
        setUsername(event.target.value)
    };
    const getDetails = () => {
        if(username === '') {
            alert("Enter User Name");
        }
        getUserDetails(username).then(
            function(data) {
                setUserInfo(data.data)
                setpreviewUserDetails(true);
            }, function() {
                navigate(ROUTE_PATHS.notFound, {state: {user: username}})
            });
    }
    const showUserDetails = () => {
        navigate(`/${userInfo.login}`, {state:{user_data: userInfo}})
    }
    return (
        <> 
            <div className="d-flex inputBox" >
                <input type="search" onChange={handleEvent} placeholder="Enter a username" className="form-control me-2" aria-label="Search" />
                <button className="btn btn-outline-primary" onClick={getDetails}>Search</button>
            </div>
            {previewUserDetails? <div>
                <div className="mx-auto mt-3" style={{width: "300px"}}>
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={userInfo.avatar_url} alt="User Profile Pic" />
                    <div className="card-body">
                        <h5 className="card-title">{userInfo.login}</h5>
                    </div>
                    <button className="card-body btn btn-outline-primary" onClick={showUserDetails}>
                        View more details
                    </button>
                </div>
                </div>
            </div>: ''}
        </>
    )
}
export default Search
