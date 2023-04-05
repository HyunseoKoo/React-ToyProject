import { useParams } from 'react-router-dom';
import DetailInfo from './components/detailInfo';
import DetailVideo from './components/detailvideo';

function DetailPage() {
	const { id } = useParams();

	window.scrollTo(0, 0);

	return (
		<>
			<DetailVideo id={id} />
			<DetailInfo id={id} />
		</>
	);
}

export default DetailPage;
