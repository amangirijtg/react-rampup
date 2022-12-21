import axios from 'axios'
import { GITHUB_URL } from '../constants/constants';

const getUserDetails = (username: string) => {
    const res = axios.get(`${GITHUB_URL}${username}`);
    return res;
}
export default getUserDetails
