import styled from 'styled-components';

import Header from '../Shared/Header';
import Sidebar from '../Shared/Sidebar';
import Content from '../Shared/Content';
import { useParams } from 'react-router-dom';

const ProductsByCategories = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <PageContainer>
        <Sidebar />
        <Content id={id} />
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