import styled from 'styled-components';

function DiaryTitle({ data2 }) {
  // Thu Jan 26 2023 19:39:53 GMT+0900

  //   const Month = {data2.createdAt.getMonth()} + 1

  return (
    <>
      <S.ResisterInfo>
        <div>{data2.id}</div>
        <S.Date>
          <div>{data2.createdAt.getFullYear()}</div>
          <div>{data2.createdAt.getMonth() + 1}</div>
          <div>{data2.createdAt.getDate()}</div>
          <div>{data2.createdAt.getDay()}</div>
        </S.Date>
      </S.ResisterInfo>
      <S.VisitAmount>{data2.User.nick_name}</S.VisitAmount>
    </>
  );
}

export default DiaryTitle;

const ResisterInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Date = styled.div`
  display: flex;
`;

const VisitAmount = styled.div`
  flex-direction: row-reverse;
  border-bottom: solid 3px #000;
  padding: 1rem 0;
`;

const S = {
  ResisterInfo,
  Date,
  VisitAmount,
};
