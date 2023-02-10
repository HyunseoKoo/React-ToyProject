import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DiaryContents from './components/DiaryContents';
import DiaryTitle from './components/DiaryTitle';

function Diary({ data1 }) {
  const navigate = useNavigate();

  // const onChangePage = () => {
  //   return navigate('/DiaryInfo');
  // };

  // console.log(data1);
  return (
    <>
      <S.Wrapper>
        {data1.map((data) => {
          // console.log(data);
          return (
            <S.Card>
              <DiaryTitle data2={data} />
              <DiaryContents data2={data} />
            </S.Card>
          );
        })}
      </S.Wrapper>
    </>
  );
}
export default Diary;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  /* background-color: lightcoral; */
  width: 85vw;
  height: 100%;
  overflow: auto;
  margin: 0 auto;
`;

const Card = styled.div`
  width: 45%;
  height: 350px;
  margin: 30px auto;
  padding: 2rem;
  font-size: 1.5rem;
  overflow: hidden;
  box-shadow: 0 2px 3px 2px gray;
  border-radius: 3%;
  cursor: pointer;
`;

const S = {
  Wrapper,
  Card,
};
