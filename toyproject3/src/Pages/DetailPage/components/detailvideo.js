import { VIDEO_URL } from 'Consts/URL';
import { useVideo } from 'hooks/queries/get-movie-infos';
import styled from 'styled-components';

function DetailVideo({ id }) {
	const { data: video } = useVideo(id);
	const data2 = video && video.data;

	const videoId = data2?.results[0] ? data2.results[0].key : null;
	const VIDEO_BASE_URL = VIDEO_URL(videoId);

	return (
		<>
			{videoId ? (
				<S.Iframe width="100%" height="100%" src={VIDEO_BASE_URL} />
			) : (
				<div></div>
			)}
		</>
	);
}

export default DetailVideo;

const Iframe = styled.iframe`
	width: 100vw;
	height: 600px;
`;

const S = {
	Iframe,
};
