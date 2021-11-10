import Header from '../Shared/Header';
import Sidebar from '../Shared/Sidebar';
import Content from '../Shared/Content';
import styled from 'styled-components';

const Products = () => {

  return (
    <>
      <Header />
      <PageContainer>
        <Sidebar />
        <Content />
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