import useInput from 'hooks/useInput';
import moment from 'moment/moment';
import { useState } from 'react';
import styled from 'styled-components';
import { faker } from '@faker-js/faker';

// moment.js 라이브러리 사용을 위해 createdAt을 (YYYY-MM-DD hh:mm:ss) 형식으로 바꾸기 위함
const dateFormat = (date) => {
  let dateFormat2 =
    date.getFullYear() +
    '-' +
    (date.getDate() + 1 < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) +
    '-' +
    (date.getDate() < 9 ? '0' + date.getDate() : date.getDate());
  return dateFormat2;
};

let todayFormat = dateFormat(new Date());

function DetailComments({ CommentsObj, onDeleteComment }) {
  const { User, content, createdAt, id, myComment } = CommentsObj; // 주소에 담긴 indx가 포함된 post 객체를 구조분해하여 Comments 키 값을 가져옴.
  console.log(CommentsObj); // 코멘트 객체

  // console.log(createdAt); // Sun Jan 01 2023 12:24:56 GMT+0900 (한국 표준시)
  let dayIndx = createdAt.getDay();
  let dayKo = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  let createdAtFormat = dateFormat(new Date(createdAt));
  let postingDate = moment().format(createdAtFormat);
  // console.log(postingDate); // 2023-1-24 댓글 작성 시간 (댓글마다 값 다름.)

  const getDayMinuteCounter = (date) => {
    if (!date) {
      return '';
    }

    const today = moment(todayFormat);
    console.log('오늘', today._i);
    const atDate = moment(postingDate);
    console.log('포스팅일자', postingDate);
    const dayDiff = atDate.diff(today, 'days');
    // const hourDiff = atDate.diff(today, 'hours');
    console.log(dayDiff);

    if (dayDiff < -3) {
      return (
        createdAt.getFullYear() +
        '.' +
        (createdAt.getMonth() + 1) +
        '.' +
        createdAt.getDate() +
        '.' +
        dayKo[dayIndx]
      );
    } else if (-3 <= dayDiff && dayDiff < -2) {
      const threeDay = Math.ceil(-dayDiff);
      return threeDay + '일 전';
    } else if (-2 <= dayDiff && dayDiff < -1) {
      const twoDay = Math.ceil(-dayDiff);
      return twoDay + '일 전';
    } else if (-1 <= dayDiff && dayDiff < 0) {
      const oneDay = Math.ceil(-dayDiff);
      return oneDay + '일 전';
    } else if (dayDiff === 0) {
      return '3시간 전';
    }
  };

  moment().subtract(1);

  const [myCommentState, setMyCommentState] = useState(false);

  const useInput = (initialization) => {
    const [value, setValue] = useState(initialization);
    const onChange = (event) => {
      setValue(event.target.value);
    };
    return [value, onChange, setValue];
  };

  const [editComment, onEditComment] = useInput(content);

  const startEditBtn = () => {
    console.log(CommentsObj.myComment);
    setMyCommentState(true);
    // if (CommentsObj.myComment === 'N') {
    //   return setMyCommentState(false);
    // } else if (CommentsObj.myComment === 'Y') {
    //   setMyCommentState(true);
    // }
  };

  const [changedComment, setChangedComment] = useState(content);

  const handleChangeComment = (content) => {
    const newComment = { ...CommentsObj };
    newComment.content = content;
    setChangedComment(newComment.content);
  };

  const closeEditBtn = () => {
    if (editComment === content) return setMyCommentState(false);
    handleChangeComment(editComment);
    setMyCommentState(false);
  };

  return (
    <S.Wrapper>
      <S.CommentWrapper>
        <S.FlexWrap>
          <S.Flex>
            <div>{User.id}</div>
            <S.Img src={User.profile_img}></S.Img>
          </S.Flex>
          <S.Flex>{getDayMinuteCounter(createdAt)}</S.Flex>
        </S.FlexWrap>

        {myCommentState ? (
          <textarea onChange={onEditComment}>{content}</textarea>
        ) : (
          <div>{changedComment}</div>
        )}
      </S.CommentWrapper>
      {myComment === 'Y' && (
        <S.Button onClick={myCommentState ? closeEditBtn : startEditBtn}>수정</S.Button>
      )}
      {myComment === 'Y' && <S.Button onClick={() => onDeleteComment(User.id)}>삭제</S.Button>}
    </S.Wrapper>
  );
}
export default DetailComments;

const Wrapper = styled.div`
  margin-bottom: 20px;
`;
const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 50x;
  height: 50px;
  border-radius: 50%;
`;

const CommentWrapper = styled.div`
  background-color: beige;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #f9d72f;
`;

const S = {
  FlexWrap,
  Wrapper,
  Flex,
  Img,
  CommentWrapper,
  Button,
};
