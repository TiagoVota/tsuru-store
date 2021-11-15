import Header from '../Shared/Header';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { postCheckout } from '../../services/service.closeCart';
import Swal from 'sweetalert2';


const Cart = () => {
  const history = useHistory;

  const handleSucces = () => {
    Swal.fire({
      icon: 'success',
      title: 'Tudo certo',
      text: 'Compra realizada',
    });
    history.push('/products');
  };

  const handleError = (error) => {
    if (error.response.status === 404) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Parece que seu carrinho está vazio',
      });
      return;
    }

    Swal.fire({
      icon: 'Error',
      title: 'Oops...',
      text: 'Algo deu errado',
    });
    history.push('/products');
    return;
  };

  const closeCart = () => {
    const promisse = postCheckout(localStorage.getItem('token'));
    promisse.then(handleSucces).catch((error) => handleError(error));
  };

  return (
    <>
      <Header />

      <PageContainer>
        <CartContainer>

        </CartContainer>
      </PageContainer>
    </>
  );
};


export default Cart;


const PageContainer = styled.div`
  display: flex;
  margin-top: 70px;
  height: calc(100vh - 70px);
`;

const CartContainer = styled.div`
  margin-top: 5vh;
`;
