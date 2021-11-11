import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import treatError from '../../services/service.error';
import { getCategories } from '../../services/service.products';

import Arrow from '../../assets/Arrow.svg';

const Sidebar = () => {
  const [listCategories, setListCategories] = useState([]);
  const [flipped, setFlipped] = useState(false);
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
    <Container isFlipped={flipped}>
      <CategoriesList>
        {
          listCategories.map((category, key) => {
            return (
              <p key={key} onClick={(e) => {
                history.push(`/categories/${category.id}`);
                e.preventDefault();
              }}>{category.type}</p>
            );
          })
        }
      </CategoriesList>
      <DownArrow src={Arrow} isFlipped={flipped} onClick={(e) => {
        setFlipped(!flipped);
        e.preventDefault();
      }} />
    </Container >
  );
};

const Container = styled.div`
  padding: 3vh 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  transition: width 0.5s linear;
  width: 5vw;
  height: 100%;
  background-color: white;
  border: 1px solid purple;
  border-radius: 0 30px 0 0;
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

  @media (max-width: 600px) {
    height: ${(props) => props.isFlipped ? 'calc(100vh - 70px)' : '10vh'};
    overflow: ${(props) => props.isFlipped ? 'scroll' : 'hidden'};
    width: 100vw;
    border-radius: 0;
    border-top: none;
  }
`;

const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const DownArrow = styled.img`
  display: none;

  @media (max-width: 600px){
    rotate: ${(props) => props.isFlipped ? '180deg' : '0deg'};
    display: flex;
    height: 5vh;
    width: 10vw;
  }
`;

export default Sidebar;
