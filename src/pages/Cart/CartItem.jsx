/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import styled from 'styled-components';

import { errorModal } from '../../factories/modalsFactory';
import { deleteCartProduct, postCartProduct } from '../../services/service.cart';
import { getToken } from '../../services/service.getToken';

import ProductInfo from './ProductInfo';


const CartItem = ({ itemInfo, itemIndex, cartList, setCartList }) => {
  const config = getToken();
  const {
    id,
    image,
    name,
    price,
    quantity
  } = itemInfo;

  const changeQuantity = (newQuantity) => {
    if (isNaN(Number(newQuantity))) return;

    postCartProduct(id, newQuantity, config)
      .then(() => {
        const newItem = {
          ...itemInfo,
          quantity: newQuantity
        };
    
        const newList = [...cartList];
        newList[itemIndex] = newItem;
        
        setCartList(newList);
      })
      .catch((error) => errorModal(error.response.message));
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Você tem certeza disso?',
      text: 'Essa ação não pode ser revertida!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, delete ele!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCartProduct(id, config)
          .then(() => {
            const newList = [...cartList];
            newList.splice(itemIndex, 1);
        
            setCartList(newList);

            Swal.fire(
              'Já foi!',
              'Seu origami foi reciclado!',
              'success'
            );
          })
          .catch((error) => errorModal(error.response.message));

      }
    });
  };

  return (
    <Container>
      <ProductBox>
        <Link to={`/product/${id}`}>
          <ImgBox>
            <img src={image} alt={`${name} image`} />
          </ImgBox>
        </Link>

        <ProductInfo
          itemInfo={itemInfo}
          onClick={{changeQuantity, handleDelete}}
        />
      </ProductBox>
      <PriceBox>
        R$ {(Number(price) * Number(quantity)).toFixed(2).replace('.', ',')}
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
