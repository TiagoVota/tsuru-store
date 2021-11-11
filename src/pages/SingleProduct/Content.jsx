import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import treatError from '../../services/service.error';
import { getProduct } from '../../services/service.products';

const Content = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    price: '',
    name: '',
    image: '',
  });

  const handleSuccess = (res) => {
    setProduct(res.data);
  };

  useEffect(() => {
    getProduct(id)
      .then((res) => handleSuccess(res))
      .catch(() => treatError(history));
  }, []);

  return (
    <Page>
      <ProductContainer>
        <img src={product.image} alt='Foto do produto'/>
        <Sidebar>
          <TextContainer>
            <p>{product.name}</p>
            <p>R$ {product.price.replace('.', ',')}</p>
          </TextContainer>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </Sidebar>
      </ProductContainer>
    </Page>);
};

const Page = styled.main`
  margin: auto;
`;

const ProductContainer = styled.div`
  height: calc(90vh - 70px);
  padding: 10px 0;
  width: 80vw;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img{
    max-width: 70%;
    max-height: 100%;
  }

  @media (max-width: 600px){
    margin-top: 10vh;
    width: 100vw;
    flex-direction: column;

    img{
      max-width: 100%;
      max-height: 50%;
    }
  }
`;

const Sidebar = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80%;

  p{
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin: 10px;
  }

  @media (max-width: 600px){
    p{
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

const AddToCartButton = styled.button`
  width: 80%;
  height: 70px;
  border: solid 1px green;
  background-color: lightgreen;
  border-radius: 50px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 600px){
    width: 90vw;
  }
`;

export default Content;