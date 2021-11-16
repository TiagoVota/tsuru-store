/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductInfo = ({ itemInfo, onClick }) => {
  const {
    id,
    name,
    quantity
  } = itemInfo;
  const {
    changeQuantity,
    handleDelete
  } = onClick;

  const addProduct = () => changeQuantity(quantity+1);
  const subProduct = () => {
    if (quantity <= 1) return;
    changeQuantity(quantity-1);
  };

  return (
    <Container>
      <Link to={`/product/${id}`}>
        <NameDiv>{name}</NameDiv>
      </Link>

      <QuantityWarper>
        <Button onClick={subProduct}>-</Button>

        <Input
          value={quantity}
          onChange={({ target: { value } }) => changeQuantity(value)}
        />

        <Button onClick={addProduct}>+</Button>
      </QuantityWarper>
      
      
      <ExcludeButton onClick={handleDelete}>Excluir</ExcludeButton>
    </Container>
  );
};


export default ProductInfo;


const Container = styled.div`
  height: 100%;
  width: calc(2 * 30px + 45px);
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
  font-size: 20px;
  color: blue;
`;

const Input = styled.input`
  height: 30px;
  width: 45px;
  text-align: center;
`;

const ExcludeButton = styled.button`
  padding: 5px 5px 5px 0;
  cursor: pointer;
  text-align: center;
  color: red;
  font-size: 15px;
  background-color: #FFFFFF;
`;
