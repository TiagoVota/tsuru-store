const getToken = () => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
};

export { getToken };