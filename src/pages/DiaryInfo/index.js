import { Posts } from 'pages/Home';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailContent from './components/DetailContent/detailContent';
import DetailTitle from './components/DetailTitle/detailTitle';

function DiaryInfo() {
  let { key } = useParams();
  let data = Posts.find((item) => item.indx == key);

  return (
    <S.Wrapper>
      <DetailTitle data2={data} />
      <DetailContent data2={data} />
    </S.Wrapper>
  );
}

export default DiaryInfo;

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  margin: 10px auto 300px;
  padding: 90px 90px 300px;
  box-shadow: 0 2px 3px 2px #d9d9d9;
  border-radius: 2%;
`;

const S = {
  Wrapper,
};
