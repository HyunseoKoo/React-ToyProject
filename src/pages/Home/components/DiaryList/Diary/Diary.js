import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Diary({ data1 }) {
  const navigate = useNavigate();

  const onChangePage = (params, e) => {
    return navigate('/Info');
  };

  // console.log(data1);
  return (
    <>
      <S.Wrapper>
        {data1.map((data) => {
          console.log(data);
          return (
            <S.Card onClick={onChangePage}>
              <div>
                <div>
                  <div>{data.id}</div>
                  {/* <div>{data.createdAt}</div> */}
                  <div>{data.User.id}</div>
                </div>
                <S.BorderBox>{data.User.nick_name}</S.BorderBox>
              </div>
              <S.MainTitle>{data.User.nick_name}</S.MainTitle>
              <S.MainContents>{data.content}</S.MainContents>
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
  height: 300px;
  margin: 30px auto;
  padding: 2rem;
  font-size: 1.5rem;
  overflow: hidden;
  box-shadow: 0 2px 3px 2px gray;
  border-radius: 3%;
  cursor: pointer;

  div:first-child > div {
    display: flex;
    justify-content: space-between;
  }

  div:first-child > div:nth-child(2) {
    flex-direction: row-reverse;
  }
`;

const BorderBox = styled.div`
  border-bottom: solid 3px #000;
  padding: 1rem 0;
`;

const MainTitle = styled.div`
  margin: 1rem 0;
  line-height: 1.8rem;
  font-size: 1.8rem;
  font-weight: bold;
`;
const MainContents = styled.div`
  overflow: hidden;
  padding: 1rem 0;
  line-height: 1.8rem;
`;

const S = {
  Wrapper,
  Card,
  BorderBox,
  MainTitle,
  MainContents,
};
