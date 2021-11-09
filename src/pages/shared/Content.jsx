
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Content = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promisse = axios.get('http://localhost:4000/products');
    promisse.then((res) => handleSucces(res));
  }, []);

  const handleSucces = (res) => {
    setProducts(res.data);
  };

  return (
    <Page>
      {products.map((product, key) => {
        return (<Product key={key}>
          <img src={product.image} alt='imagem' />
          <TextProduct>
            <p>{product.name}</p>
            <p>R${product.price.replace('.', ',')}</p>
          </TextProduct>
        </Product>);
      })}
    </Page>
  );
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

    img{
      margin: 0 auto;
      height: 85%;
      border-radius: 15px 15px 0 0;
      margin-bottom: 15px;
    }
`;

const TextProduct = styled.div`
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
`;

export default Content;