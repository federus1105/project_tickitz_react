import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { login } from '../slice/authSlice';

export const loginUser = ({ email, password },) => async (dispatch) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_BE_HOST}/auth/login`, {
      email,
      password,
    });
    const token = res.data.token;
    localStorage.setItem('token', token);

    const decoded = jwtDecode(token);

    const userRes = await axios.get(`${import.meta.env.VITE_BE_HOST}/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
   const user = { 
      ...userRes.data, // Data dari endpoint /profile
      role: decoded.role || userRes.data.role // Prioritaskan role dari token
    };
    dispatch(login({ user, token }));

    localStorage.setItem('currentUser', JSON.stringify(user));

    return user;
  } catch (error) {
     console.error("Login gagal:", error);
    throw error;
  }
};
