import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Issue from './issueCard/issue';

function IssueList({ issueList }) {
  return (
    <>
      <S.Wrapper>
        {issueList &&
          issueList.map((issue) => {
            return (
              <S.Card>
                <S.StyledLink to={`/issue/${issue.id}`}>
                  <Issue issues={issue} />
                </S.StyledLink>
              </S.Card>
            );
          })}
      </S.Wrapper>
    </>
  );
}

export default IssueList;

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
  margin: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const S = {
  Wrapper,
  Card,
  StyledLink,
};
