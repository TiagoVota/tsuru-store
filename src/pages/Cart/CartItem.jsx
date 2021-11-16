/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ProductInfo from './ProductInfo';


const CartItem = ({ itemInfo }) => {
  const {
    id,
    image,
    name,
    price,
    quantity
  } = itemInfo;

  return (
    <Container>
      <ProductBox>
        <Link to={`/product/${id}`}>
          <ImgBox>
            <img src={image} alt={`${name} image`} />
          </ImgBox>
        </Link>

        <ProductInfo itemInfo={itemInfo}/>
      </ProductBox>
      <PriceBox>
        R$ {(price * quantity).toFixed(2).replace('.', ',')}
      </PriceBox>
    </Container>
  );
};


export default CartItem;


const Container = styled.div`
  display: flex;
`;

const ProductBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;

const ImgBox = styled.div`
  width: 70px;
  height: 100%;
  margin-right: 20px;

  > img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const PriceBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
`;
