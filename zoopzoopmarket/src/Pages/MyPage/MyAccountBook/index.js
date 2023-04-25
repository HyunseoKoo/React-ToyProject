import styled from "styled-components";
import AccountBookSelector from "./Components/selector";
import AccountBookDetailInfo from "./Components/detailInfo";

const AccountBookPage = () => {

	return(
	  <S.Wrapper>
		<AccountBookSelector/>
		<AccountBookDetailInfo/>
	  </S.Wrapper>
	) 
};

export default AccountBookPage;

const Wrapper = styled.div`
	margin: 0 auto;
	/* background-color: beige;	// 확인용 */
	width: 80vw;
	height: 100%;
`;

const S = {
	Wrapper,
}