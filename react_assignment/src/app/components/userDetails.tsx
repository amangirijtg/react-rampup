import getUserDetails from "../services/getUserDetails"
import { UserType } from "../interfaces/interface" 
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const UserDetails = () => {
    const demoUserData: UserType = {
        avatar_url: "https://avatars.githubusercontent.com/u/97114554?v=4",
        username: "",
        location: "",
        followers: 0,
        following: 0,
        bio: "",
        html_url: "",
        email: ""
    }
    const [response, setResponse] = useState(demoUserData);
    async function fetchUser(username: string) {
        await getUserDetails(username).then(data => setResponse(data.data))
    }
    
    const location = useLocation()
    useEffect( () => {
        if(location.state != null) {
            setResponse(location.state.user_data)
        } else {
            fetchUser(location.pathname)
        }
    }, [location]);
    if(response.username === "") {
        return (
            <div className="col px-md-5">
                <div className="p-3 border bg-light mt-4">Username: {location.pathname} does not exist</div>
            </div>
        )
    }
    return (
        <div className="mx-auto mt-3" style={{width: "300px"}}>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={response.avatar_url} alt="User Profile Pic" />
            <div className="card-body">
                <h5 className="card-title">{response.username}</h5>
                {response.bio?<p className="card-text">{response.bio}</p>:''}
            </div>
            <ul className="list-group list-group-flush">
                {response.email?<li className="list-group-item">Email: {response.email}</li>:''}
                <li className="list-group-item">Following: {response.following}</li>
                <li className="list-group-item">Followers: {response.followers}</li>
                {response.location?<li className="list-group-item">Location: {response.location}</li>:''}
            </ul>
            <div className="card-body">
                <a href={response.html_url} className="card-link"> Github Profile</a>
            </div>
        </div>
        </div>
    )
}
export default UserDetails
