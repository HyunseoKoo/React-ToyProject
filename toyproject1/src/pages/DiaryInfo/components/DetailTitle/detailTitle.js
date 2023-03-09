import styled from 'styled-components';

function DetailTitle({ selectedPost }) {
  const Month = selectedPost.createdAt.getMonth() + 1;
  //   console.log(Month); // 0 1 2 3 4 5 6 7 8 9 10 11

  const DayIndex = selectedPost.createdAt.getDay();
  const WhatDay = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  //   console.log(data2.createdAt.getDay()); // 0 1 2 3 4 5 6
  return (
    <>
      <S.OpenState>모두공개</S.OpenState>
      <S.Title>{selectedPost.User.nick_name}</S.Title>
      <S.ResisterInfo>
        <div>{selectedPost.id}</div>
        <S.Date>
          <div>{selectedPost.createdAt.getFullYear()}.</div>
          <div>{Month}.</div>
          <div>{selectedPost.createdAt.getDate()}.</div>
          <div>{WhatDay[DayIndex]}</div>
        </S.Date>
      </S.ResisterInfo>
    </>
  );
}

export default DetailTitle;

// const Wrapper = styled.div`
//   width: 50%;
//   height: 100%;
//   margin: 10px auto;
//   padding: 90px;
//   box-shadow: 0 2px 3px 2px gray;
// `;

const OpenState = styled.div`
  width: 10%;
  background-color: #f9d72f;
  border-radius: 7%;
  padding: 5px;
`;

const Title = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 40px 0 80px;
  font-weight: bold;
  font-size: 1.5rem;
`;

const ResisterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 2px #000;
  padding: 1rem 0;
  padding: 0 0 60px;
`;

const Date = styled.div`
  display: flex;
`;

const S = {
  OpenState,
  Title,
  ResisterInfo,
  Date,
};
