import Header from '../Shared/Header';
import styled from 'styled-components';


const Cart = () => {
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