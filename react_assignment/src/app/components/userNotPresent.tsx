import { Link, useLocation } from "react-router-dom"

const UserNotPresent = () => {
    const location = useLocation()
    return (
        <div className="col px-md-5">
            <div className="p-3 border bg-light mt-4">Username: {location.state.user} does not exist</div>
            <Link to='/search' className="p-3 border bg-light mt-4">Search a new user</Link>
        </div>
    )
}
export default UserNotPresent
