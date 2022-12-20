import { useState, BaseSyntheticEvent, useEffect } from "react"
import getUserDetails from "../services/getUserDetails"
import { useLocation, useNavigate, Link } from "react-router-dom"

const Search = () => {
    const demoUserInfo = {
        username: '',
        avatar_url: '',
    };
    const [userInfo, setUserInfo] = useState(demoUserInfo)
    const [username, setUsername] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const [previewUserDetails, setpreviewUserDetails] = useState(false)
    const handleEvent = (event: BaseSyntheticEvent) => {
        setUsername(event.target.value)
    };
    const getDetails = async () => {

        if(username === '') {
            alert("Enter User Name");
        }
        await getUserDetails(`/${username}`).then(
            function(data) {
                setpreviewUserDetails(true);
                location.state = {user_data: data.data}
                let userData= {
                    username: location.state.user_data.login, 
                    avatar_url: location.state.user_data.avatar_url
                }
                setUserInfo(userData)
                // navigate(`/${username}`, {state: {user_data: data.data}});
            }, function() {
                navigate('/not-found', {state: {user: username}})
            });
    }
    const showUserDetails = () => {
        navigate(`/${location.state.user_data.login}`, {state:{user_data: location.state.user_data}})
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
                        <h5 className="card-title">{userInfo.username}</h5>
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
