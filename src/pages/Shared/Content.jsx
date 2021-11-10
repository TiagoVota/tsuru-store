/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import treatError from '../../services/service.error';
import { getProducts } from '../../services/service.products';

const Content = (props) => {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getProducts()
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
              <p>{product.name}</p>
              <p>R$ {product.price.replace('.', ',')}</p>
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
            <p>{product.name}</p>
            <p>R$ {product.price.replace('.', ',')}</p>
          </TextProduct>
        </Product>);
      }
    })}
  </Page>);
};

const Page = styled.main`
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const Product = styled.div`
  width: 20vw;
  height: 30vh;
  box-shadow: 3px 3px 3px #888888;
  border-radius: 15px;
  margin: 15px 15px;
  cursor: pointer;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img{
    height: 85%;
    margin-bottom: 15px;
  }
`;

const TextProduct = styled.div`
  padding: 0 10px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  p{
    margin: 5px;
  }
`;

export default Content;