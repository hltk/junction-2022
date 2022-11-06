import axios from 'axios';

const getUserinfo = async (token, username) => axios.get(`http://localhost:5000/user_info/${username}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default getUserinfo;
