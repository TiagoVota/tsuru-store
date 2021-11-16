import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Shared/Header';
import CartItem from './CartItem';
import TotalSession from './TotalSession';
import FinalizeCartSession from './FinalizeCartSession';

import { getToken } from '../../services/service.getToken';
import treatError from '../../services/service.error';
import { getCartList } from '../../services/service.cart';


const Cart = () => {
  const config = getToken();
  const history = useHistory();
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    getCartList(config)
      .then(({ data }) => setCartList(data))
      .catch((error) => console.log({error}));
    // .catch(treatError(history));
  }, []);

  useEffect(() => {
    const newTotal = cartList.reduce((acc, { price, quantity }) => {
      return acc + Number(price) * Number(quantity);
    }, 0);
    setTotal(newTotal);
  }, [cartList]);


  return (
    <>
      <Header />

      <PageContainer>
        <CartContainer>
          {cartList.map((item, index) => {
            return (
              <CartItem
                key={index}
                itemInfo={item}
                itemIndex={index}
                cartList={cartList}
                setCartList={setCartList}
              />);
          })}

          <TotalSession total={total}/>

          <FinalizeCartSession />
        </CartContainer>
      </PageContainer>
    </>
  );
};


export default Cart;


const PageContainer = styled.div`
  height: calc(100% - 70px);
  margin-top: 70px;
  display: flex;
  justify-content: center;
`;

const CartContainer = styled.div`
  width: 90%;
  min-height: calc(100% - 2 * 5vh);
  padding: 60px 10% 0;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
  background-color: #FFFFFF;

  > div {
    width: 100%;
    height: 160px;
    padding: 15px 0 30px 0;
  }
`;
