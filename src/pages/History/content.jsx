/* eslint-disable react/prop-types */
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useHistory } from 'react-router';

const Content = (props) => {
  const history = useHistory();

  return (
    <SalesContainer>
      {
        props.sales.map((sale, key) => {
          return (
            <SaleContainer key={key} onClick={() => history.push(`/history/${sale.id}`)}>
              <p>{`Código da compra: ${sale.id}`}</p>
              <p>{`Feita no dia: ${dayjs(sale.time).format('DD/MM/YY')}`}</p>
            </SaleContainer>
          );
        })
      }
    </SalesContainer>
  );
};

const SalesContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SaleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  border: solid 1px black;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: wheat;

  p{
    padding: 5px;
  }
`;

export default Content;