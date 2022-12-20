import axios from 'axios'

const getUserDetails = async (username: string) => {
    const res = await axios.get(`https://api.github.com/users${username}`);
    return res;
}
export default getUserDetails
