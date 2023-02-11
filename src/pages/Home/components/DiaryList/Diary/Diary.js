import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DiaryContents from './components/DiaryContents';
import DiaryTitle from './components/DiaryTitle';

function Diary({ data1 }) {
  // const onChangePage = () => {
  //   <Link to="DiaryInfo" />;
  // };

  return (
    <S.Wrapper>
      {data1.map((data) => {
        return (
          <StyledLink to={`/todo/post/${data.indx}`}>
            <S.Card>
              <DiaryTitle data2={data} />
              <DiaryContents data2={data} />
            </S.Card>
          </StyledLink>
        );
      })}
    </S.Wrapper>
  );
}
export default Diary;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  /* height: 100%; */
  overflow: auto;
  margin: 0 auto;
`;

const Card = styled.div`
  width: 650px;
  height: 350px;
  margin: 30px;
  padding: 2rem;
  font-size: 1.5rem;
  overflow: hidden;
  box-shadow: 0 2px 3px 2px gray;
  border-radius: 3%;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const S = {
  Wrapper,
  Card,
};
