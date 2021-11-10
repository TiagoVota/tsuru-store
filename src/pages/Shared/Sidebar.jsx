import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import treatError from '../../services/service.error';
import { getCategories } from '../../services/service.products';

const Sidebar = () => {
  const [listCategories, setListCategories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getCategories()
      .then((res) => handleSuccess(res))
      .catch(() => treatError(history));
  }, []);

  const handleSuccess = (res) => {
    setListCategories(res.data);
  };

  return (
    <Container>
      {
        listCategories.map((category, key) => {
          return (
            <p key={key} onClick={() => history.push(`/categories/${category.id}`)}>{category.type}</p>
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
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
