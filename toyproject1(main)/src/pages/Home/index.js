import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import { MockPost } from '__mocks__/post';
import Diary from './components/DiaryList/Diary/Diary';

export const Posts = MockPost(100);

// diary 파일에서 만들면 DairyInfo의 index에서 indx가 안찍힘. 왜지?
for (let i = 0; i < Posts.length; i++) {
  Posts[i].indx = i;
}

function HomePage() {
  const [viewPosts, setViewPosts] = useState(Array.from({ length: 100 })); // 리스트 내 포스트

  const fetchData = () => {
    setTimeout(() => {
      setViewPosts(viewPosts.concat(Array.from({ length: 50 })));
    }, 1500);
  };

  return (
    <>
      <S.Title>공개 일기를 보여드려요</S.Title>
      <InfiniteScroll
        dataLength={viewPosts.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Diary posts={Posts} />
      </InfiniteScroll>
    </>
  );
}
export default HomePage;

const Title = styled.div`
  text-align: center;
  color: orange;
  font-size: 20px;
  padding: 3rem 0 4rem 0;
`;

const S = {
  Title,
};
