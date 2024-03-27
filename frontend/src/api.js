export const getBackendAPI = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://is21-2024-backend.onrender.com';
};
