import styled from 'styled-components';

function DiaryTitle({ data2 }) {
  // Thu Jan 26 2023 19:39:53 GMT+0900
  const Month = data2.createdAt.getMonth() + 1;
  //   console.log(Month); // 0 1 2 3 4 5 6 7 8 9 10 11

  const DayIndex = data2.createdAt.getDay();
  const WhatDay = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  //   console.log(data2.createdAt.getDay()); // 0 1 2 3 4 5 6

  return (
    <>
      <S.ResisterInfo>
        <div>{data2.id}</div>
        <S.Date>
          <div>{data2.createdAt.getFullYear()}.</div>
          <div>{Month}.</div>
          <div>{data2.createdAt.getDate()}.</div>
          <div>{WhatDay[DayIndex]}</div>
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
