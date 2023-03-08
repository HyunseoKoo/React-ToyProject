import { Posts } from 'pages/Home';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailComments from './components/DetailContent/DetailComments/detailComments';
import DetailContent from './components/DetailContent/detailContent';
import DetailTitle from './components/DetailTitle/detailTitle';

function DiaryInfo() {
  const { key } = useParams();
  const selectedPost = Posts.find((item) => item.indx == key);

  return (
    <>
      <S.Wrapper>
        <DetailTitle selectedPost={selectedPost} />
        <DetailContent selectedPost={selectedPost} />
      </S.Wrapper>
    </>
  );
}

export default DiaryInfo;

const Wrapper = styled.div`
  width: 50%;
  height: 200vh;
  margin: 10px auto 100px;
  padding: 90px 90px 300px;
  box-shadow: 0 2px 3px 2px #d9d9d9;
  border-radius: 10px;
`;

const S = {
  Wrapper,
};
