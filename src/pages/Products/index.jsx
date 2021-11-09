import Header from '../shared/Header';
import Sidebar from '../shared/Sidebar';
import Content from '../shared/Content';
import styled from 'styled-components';

const Products = () => {

  return (
    <>
      <Header />
      <PageContainer>
        <Sidebar />
        <Content></Content>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.main`
  display: flex;
  margin-top: 70px;
  height: calc(100vh - 70px);
`;

export default Products;