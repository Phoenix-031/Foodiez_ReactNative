import axios from 'axios';

const baseUrl = 'https://foodiex-backend.onrender.com';

export const UserLogin = async(user) => {
    try {
        
        const response = await axios.post(`${baseUrl}/users/login`, user);
        return response.data;
        
    } catch (err) {
        return {
            error:true,
            message:err.message
        }
    }
}