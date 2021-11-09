import styled from 'styled-components';

import Header from '../shared/Header';
import Sidebar from '../shared/Sidebar';
import Content from '../shared/content';
import { useParams } from 'react-router';

const ProductsByCategories = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <PageContainer>
        <Sidebar />
        <Content id={id}></Content>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.main`
  display: flex;
  margin-top: 70px;
  height: calc(100vh - 70px);
`;

export default ProductsByCategories;