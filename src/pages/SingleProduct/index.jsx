import Header from '../Shared/Header';
import Sidebar from '../Shared/Sidebar';

import styled from 'styled-components';
import Content from './Content';

const SingleProduct = () => {
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
export default SingleProduct;