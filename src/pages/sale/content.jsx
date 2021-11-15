/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSale } from '../../services/service.getHistory.js';
import { getToken } from '../../services/service.getToken.js';

const Content = (props) => {
  const [listProducts, setListProducts] = useState([]);
  const config = getToken();
  let totalPrice = 0;
  let totalItens = 0;

  useEffect(() => {
    const promisse = getSale(props.id, config);
    promisse.then(res => setListProducts(res.data));
  }, []);

  return (
    <ContainerSale>
      <ContainerAllSales>
        {listProducts.map((product, key) => {
          totalPrice += Number(product.price * product.quantity);
          totalItens += Number(product.quantity);

          return (
            <ContainerProduct key={key}>
              <p>{product.name}</p>
              <p>Quantidade: {product.quantity}</p>
              <p>Preço: R${(product.price * product.quantity).toFixed(2)}</p>
            </ContainerProduct>
          );
        })}
      </ ContainerAllSales>
      <Total>
        <p>Total de itens: {totalItens}</p>
        <p>Total: R${totalPrice.toFixed(2)}</p>
      </Total>
    </ContainerSale>
  );
};

const ContainerSale = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: 50px;
  box-shadow: 10px 10px 15px 3px black;
`;

const ContainerAllSales = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  margin: auto;
  width: 100%;
  height: 100%;
`;

const ContainerProduct = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border: solid 1px black;
  background-color: wheat;
`;

const Total = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border: solid 1px black;
  background-color: wheat;
`;

export default Content;