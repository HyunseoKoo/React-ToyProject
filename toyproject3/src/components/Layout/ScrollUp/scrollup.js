import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { flexAllCenter } from 'Styles/common';

const ScrollUpBtn = () => {
	const [scroll, setScroll] = useState(0);
	const [showBtn, setShowBtn] = useState(false);

	const onScroll = () => {
		setScroll(window.scrollY);
		if (scroll > 100) setShowBtn(true);
		if (scroll < 100) setShowBtn(false);
	};

	const scrollTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
		setScroll(0);
		setShowBtn(false);
	};

	useEffect(() => {
		onScroll();
	}, [scroll]);

	useEffect(() => {
		const watch = () => {
			window.addEventListener('scroll', onScroll);
		};
		watch();
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return <Div>{showBtn && <Icon onClick={scrollTop}>👆</Icon>}</Div>;
};

export default ScrollUpBtn;

const Div = styled.div`
	width: 100%;
	position: relative;
`;

const Icon = styled.button`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin: 20px;
	background-color: blue;
	color: white;
	font-weight: bolder;
	font-size: 20px;
	${flexAllCenter}
	position: fixed;
	right: 50px;
	bottom: 30px;
`;
