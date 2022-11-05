import axios from 'axios';

const getMessages = async (token) => axios.get('http://localhost:5000/messages', {
  headers: {
    Authorization: `JWT ${token}`,
  },
});

export default getMessages;
