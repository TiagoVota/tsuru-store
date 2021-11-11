const getToken = () => {
  const token = localStorage.token;

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export { getToken };