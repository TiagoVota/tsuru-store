/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductInfo = ({ itemInfo }) => {
  const {
    id,
    name,
    quantity
  } = itemInfo;

  return (
    <Container>
      <Link to={`/product/${id}`}>
        <NameDiv>{name}</NameDiv>
      </Link>

      <QuantityWarper>
        <Button onClick={() => quantity-1}>+</Button>

        <Input
          value={quantity}
        />

        <Button>-</Button>
      </QuantityWarper>
      
      
      <ExcludeButton>Excluir</ExcludeButton>
    </Container>
  );
};


export default ProductInfo;


const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NameDiv = styled.div`
  padding: 5px 5px 5px 0;
  cursor: pointer;
`;

const QuantityWarper = styled.div`
  height: 30px;
  display: flex;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
`;

const Button = styled.button`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

const Input = styled.input`
  height: 30px;
  width: 30px;
`;

const ExcludeButton = styled.div`
  cursor: pointer;
  color: blue;
  padding: 5px 5px 5px 0;
`;
