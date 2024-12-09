import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Rails APIのURLに変更
});

export const getJobs = async () => {
  const response = await api.get('/jobs');
  return response.data;
};