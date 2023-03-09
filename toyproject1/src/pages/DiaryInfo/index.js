import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailContent from './components/DetailContent/detailContent';
import DetailTitle from './components/DetailTitle/detailTitle';

function DiaryInfo() {
  const Posts = useSelector((state) => state.posts);
  const { key } = useParams();
  console.log(key);
  const selectedPost = Posts.find((item) => item.id === key);

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
