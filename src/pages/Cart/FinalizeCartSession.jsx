import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { postCheckout } from '../../services/service.cart';
import { getToken } from '../../services/service.getToken';
import { errorModal, successModal } from '../../factories/modalsFactory';


const FinalizeCartSession = () => {
  const config = getToken();
  const history = useHistory();
  const closeCart = () => {
    postCheckout(config)
      .then(handleSuccess)
      .catch((error) => handleError(error));
  };

  const handleSuccess = () => {
    successModal('Compra realizada!');
    history.push('/products');
  };
  
  const handleError = (error) => {
    console.log({error});
    if (error.response.status === 404) {
      return errorModal('Parece que seu carrinho está vazio');
    }

    errorModal('Algo deu errado');
    return history.push('/products');
  };
  
  return (
    <Container>
      <FinalizeButton onClick={closeCart}>
        Continuar a compra
      </FinalizeButton>
    </Container>
  );
};


export default FinalizeCartSession;


const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FinalizeButton = styled.button`
  width: 220px;
  height: 50px;
  font-size: 17px;
  cursor: pointer;
  background-color: #B5FFFC;
`;
