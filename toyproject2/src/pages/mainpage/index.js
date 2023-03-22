import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getIssues } from '../../reducer/issue';
import IssueList from './components/fetchIssues/issueList';
import Pagination from './components/pagenation/pagenation';
import Loading from './components/showLoading/loading';
import Sort from './components/sort/sort';

const totalIssues = 200;
let pagesArr = []; // 10개 단위의 페이지 배열을 요소로 가진 배열 ex)[[1,..,10], [11,..,20]]
let totalPages;

function MainPage() {
  const loading = useSelector((state) => state.issue.getIssueState);
  const issueList = useSelector((state) => state.issue.issues);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filterOption, setFilterOption] = useState('created');
  const [currentArrIndex, setCurrentArrIndex] = useState(0); // 페이지배열 중 현재 위치한 번호
  const [currentPagesArr, setCurrentPagesArr] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIssues({ limit, page, filterOption }));
    const pages = Math.ceil(totalIssues / limit);
    console.log('////////', pages);
    totalPages = new Array(pages).fill(null).map((item, index) => (item = index + 1));
    if (pagesArr.length > 0) pagesArr = [];
    for (let i = 0; i < pages; i += limit) {
      const arr = totalPages.slice(i, i + 10);
      pagesArr.push(arr);
    }
    setCurrentPagesArr(pagesArr[currentArrIndex]);
  }, [limit]);
  console.log(pagesArr); // (2) [Array(10), Array(10)]
  console.log(currentPagesArr);

  return (
    <>
      {loading.loading && <Loading />}
      <S.Wrapper>
        <div>Git Issue.net</div>
        <Sort
          limit={limit}
          setLimit={setLimit}
          filterOption={filterOption}
          setFilterOption={setFilterOption}
        />
        <IssueList issueList={issueList} />
        <Pagination
          pagesArr={pagesArr}
          totalPages={totalPages}
          limit={limit}
          page={page}
          setPage={setPage}
          currentArrIndex={currentArrIndex}
          setCurrentArrIndex={setCurrentArrIndex}
          filterOption={filterOption}
          currentPagesArr={currentPagesArr}
          setCurrentPagesArr={setCurrentPagesArr}
        />
      </S.Wrapper>
    </>
  );
}

export default MainPage;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const S = {
  Wrapper,
};
