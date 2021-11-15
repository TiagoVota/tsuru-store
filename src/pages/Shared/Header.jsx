import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import shoppingCart from '../../assets/shoppingCart.svg';

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <h1 onClick={() => history.push('/products')}>TSURU-STORE</h1>
      <div>
        <img onClick={() => history.push('/cart')} src={shoppingCart} />
        <p onClick={() => history.push('/history')}>Histórico</p>
      </div>
    </Container>
  );
};

const Container = styled.header`
  width: 100vw;
  height: 70px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1{
    cursor: pointer;
    font-family: 'Merienda', cursive;
    font-weight: 700;
    font-size: 32px;
    background: -webkit-linear-gradient(black, purple);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  img{
    cursor: pointer;
    height: 50px;
  }

  p{
    cursor: pointer;
    padding: 5px;
    font-family: 'Merienda', cursive;
    font-size: 20px;
  }
`;

export default Header;