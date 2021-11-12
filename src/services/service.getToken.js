const getToken = () => {
  const token = localStorage.token;

  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
};

export { getToken };