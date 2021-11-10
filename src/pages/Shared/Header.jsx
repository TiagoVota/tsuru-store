import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import shoppingCart from '../../assets/shoppingCart.svg';

const Header = () => {
  const history = useHistory();

  return (
    <Container>
      <p onClick={() => history.push('/products')}>TSURU-STORE</p>
      <img onClick={() => history.push('/cart')} src={shoppingCart} />
    </Container>
  );
};

const Container = styled.header`
  width: 100vw;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.6);
  position: fixed;
  top: 0%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  P{
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
`;

export default Header;