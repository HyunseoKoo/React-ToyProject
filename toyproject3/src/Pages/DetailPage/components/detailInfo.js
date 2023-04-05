import { useDetailInfo } from 'hooks/queries/get-movie-infos';
import styled from 'styled-components';
import { IMAGE_URL } from 'Consts/URL';
function DetailInfo({ id }) {
	const { data: detail } = useDetailInfo(id);
	const data = detail && detail.data;

	const IMG_BASE_URL = IMAGE_URL(1280);
	const integer = detail && data.vote_average.toFixed(2);

	return (
		<S.DetailWrap>
			{data && (
				<>
					<S.Contents>
						<S.DetailTopWrap>
							<S.PostImg src={IMG_BASE_URL + data.poster_path} />
							<S.TitleInfoWrap>
								<S.TitleInfoWrapTop>
									<S.Title>{data.title}</S.Title>
									<S.TitleInfoUl>
										<S.TitleInfoLi>
											<S.InnerContent>Move ratings : </S.InnerContent>
											<S.InnerContent2>⭐{data.integer}</S.InnerContent2>
										</S.TitleInfoLi>
										<S.TitleInfoLi>
											<S.InnerContent>
												The cumulative number of spectators :
											</S.InnerContent>
											<S.InnerContent2>
												{data.popularity} million
											</S.InnerContent2>
										</S.TitleInfoLi>
									</S.TitleInfoUl>
								</S.TitleInfoWrapTop>
								<S.TitleInfoWrapTop>
									<S.TitleInfoUl>
										<S.TitleInfoLi>
											<S.InnerContent>Genres : </S.InnerContent>
											<S.InnerContent2>{data.genres[0].name}</S.InnerContent2>
										</S.TitleInfoLi>
										<S.TitleInfoLi>
											<S.InnerContent>Release date : </S.InnerContent>
											<S.InnerContent2>{data.release_date}</S.InnerContent2>
										</S.TitleInfoLi>
										<S.TitleInfoLi>
											<S.InnerContent>Runtime :</S.InnerContent>
											{
												<S.InnerContent2>
													{data.runtime} minutes
												</S.InnerContent2>
											}
										</S.TitleInfoLi>
									</S.TitleInfoUl>
									<S.TitleInfoUl>
										<S.TitleInfoLi>
											<S.InnerContent>Introduce : </S.InnerContent>
											<S.InnerContent2>{data.tagline}</S.InnerContent2>
										</S.TitleInfoLi>
									</S.TitleInfoUl>
								</S.TitleInfoWrapTop>
							</S.TitleInfoWrap>
						</S.DetailTopWrap>
						<S.DetailTopWrap>
							<S.Content>{data.overview}</S.Content>
						</S.DetailTopWrap>
					</S.Contents>
				</>
			)}
		</S.DetailWrap>
	);
}

export default DetailInfo;

const DetailWrap = styled.div`
	margin: 0;
	padding: 0;
	width: 100vw;
	background-color: black;
`;

const Iframe = styled.iframe`
	width: 100vw;
	height: 600px;
`;

const Contents = styled.div`
	width: 70vw;
	height: 100vh;
	color: #000;
	margin: 0 auto;
`;

const DetailTopWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 400px;
	width: 100%;
	border-bottom: 1px #d9d9d9 solid;
`;

const PostImg = styled.img`
	width: 250px;
`;

const TitleInfoWrap = styled.div`
	margin-left: 30px;
	width: 900px;
	height: 350px;
`;

const TitleInfoWrapTop = styled.div`
	width: 900px;
	height: 250px;
	line-height: 30px;
	padding-bottom: 200px;
`;

const Title = styled.div`
	padding: 20px 30px 70px;
	font-size: 50px;
	line-height: 50px;
	font-weight: bold;
	color: white;
`;

const Content = styled.div`
	padding: 20px 30px;
	font-size: 25px;
	line-height: 60px;
	color: white;
`;

const TitleInfoUl = styled.ul`
	width: 800px;
	height: 25px;
	padding: 0;
	margin-left: 30px;
	display: flex;
	justify-content: space-between;
	padding-bottom: 50px;
`;

const TitleInfoLi = styled.li`
	list-style: none;
	display: flex;
	justify-content: space-between;
`;

const InnerContent = styled.div`
	font-size: 20px;
	color: white;
`;

const InnerContent2 = styled.div`
	margin-left: 10px;
	font-size: 20px;
	font-weight: bold;
	color: white;
`;

const S = {
	DetailWrap,
	Iframe,
	Contents,
	DetailTopWrap,
	PostImg,
	TitleInfoWrap,
	TitleInfoWrapTop,
	TitleInfoUl,
	TitleInfoLi,
	Title,
	Content,
	InnerContent,
	InnerContent2,
};
