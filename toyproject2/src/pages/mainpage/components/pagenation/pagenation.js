import styled from 'styled-components';

function Pagination({
  pagesArr,
  totalPages,
  page,
  setPage,
  currentArrIndex,
  setCurrentArrIndex,
  pageOffset,
  currentPagesArr,
  setCurrentPagesArr,
}) {
  return (
    <S.Nav>
      <S.Button onClick={() => setPage(1)} disabled={page === 1}>
        맨처음
      </S.Button>
      {currentPagesArr && (
        <>
          <S.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </S.Button>
          {currentPagesArr.fill(null).map((item, indx) => (
            <S.Button
              key={indx + 1}
              onClick={() => setPage(indx + 1)}
              aria-current={page === indx + 1 ? 'page' : null}
            >
              {indx + 1}
            </S.Button>
          ))}
          <S.Button
            onClick={() => setPage(page + 1)}
            disabled={page === pagesArr[currentArrIndex][totalPages.length]}
          >
            &gt;
          </S.Button>
          <S.Button
            onClick={() => setPage(currentPagesArr.length)}
            disabled={page === pagesArr[pagesArr.length - 1][pagesArr.length - 1]}
          >
            맨끝
          </S.Button>
        </>
      )}
    </S.Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: pink;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: blue;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;

const S = {
  Nav,
  Button,
};
