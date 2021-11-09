import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [listCategories, setListCategories] = useState([]);

  useEffect(() => {
    const promisse = axios.get('http://localhost:4000/categories');
    promisse.then((res) => handleSucces(res));
  }, []);

  const handleSucces = (res) => {
    setListCategories(res.data);
  };

  return (
    <Container>
      {
        listCategories.map((category, key) => {
          return (
            <p key={key}>{category.type}</p>
          );
        })
      }
    </Container>
  );
};

const Container = styled.div`
  transition: width 0.5s linear;
  width: 5vw;
  height: 100%;
  background-color: white;
  border: 1px solid purple;
  border-radius: 0 30px 0 0;
  padding: 30px 10px;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 70;
  &:hover,
  &:focus {
    width: 15vw;
    word-wrap: break-word;
    white-space: normal;
  }

  p{
    margin-bottom: 30px;
    cursor: pointer;
  }
`;

export default Sidebar;