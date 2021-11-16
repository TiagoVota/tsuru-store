import styled from 'styled-components';


const TotalSession = (params) => {
  const { total } = params;
  return (
    <Container>
      <Info>Total</Info>

      <Price>
        <p>R$ {total.toFixed(2).replace('.', ',')}</p>
      </Price>
    </Container>
  );
};


export default TotalSession;


const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
`;

const Info = styled.div`
  font-weight: 700;
`;

const Price = styled.div`
  width: 200px;
  text-align: end;
`;
