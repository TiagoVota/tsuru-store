/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import treatError from '../../services/service.error';
import { getProducts } from '../../services/service.products';
import { getToken } from '../../services/service.getToken';

const Content = (props) => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const config = getToken();

  useEffect(() => {
    getProducts(config)
      .then((res) => handleSuccess(res))
      .catch(() => treatError(history));
  }, []);

  const handleSuccess = (res) => {
    setProducts(res.data);
  };


  if (!props.id) {
    return (
      <Page>
        {products.map((product, key) => {
          return (<Product key={key} onClick={() => history.push(`/product/${product.id}`)}>
            <img src={product.image} alt='imagem' />
            <TextProduct>
              <Name>{product.name}</Name>
              <Price>R$ {product.price.replace('.', ',')}</Price>
            </TextProduct>
          </Product>);
        })}
      </Page>
    );
  }

  return (<Page>
    {products.map((product, key) => {
      if (Number(props.id) === product.category_id) {
        return (<Product key={key} onClick={() => history.push(`/product/${product.id}`)}>
          <img src={product.image} alt='imagem' />
          <TextProduct>
            <Name>{product.name}</Name>
            <Price>R$ {product.price.replace('.', ',')}</Price>
          </TextProduct>
        </Product>);
      }
    })}
  </Page>);
};

const Page = styled.main`
  margin: 12vh auto 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 600px) {
		display: flex;
    flex-direction: column;
  }
`;

const Product = styled.div`
  width: 20vw;
  height: 30vh;
  box-shadow: 3px 3px 3px #888888;
  border-radius: 15px;
  margin: 15px 15px;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img{
    max-height: 80%;
    max-width: 90%;
    margin-bottom: 15px;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 30vh;
    margin: 0;
    margin-bottom: 15px;
    border-radius: 0;

    img{
      height: 100%;
    }
  }
`;

const TextProduct = styled.div`
  padding: 0 10px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Name = styled.p`
  width: 60%;
`;

const Price = styled.p`
  width: 30%;
`;

export default Content;
