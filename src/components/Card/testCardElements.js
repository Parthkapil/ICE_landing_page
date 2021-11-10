import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	border: 1px solid;
	padding: 25px 12px 18px;
	background: linear-gradient(45deg);
`;

const Title = styled.h2`
	color: #f9a826;
	font-weight: 300;
	@media (max-width: 500px) {
		font-size: 1rem;
	}
`;

const Date = styled.div`
	color: #ff3300;
	font-weight: 300;
	margin: 6px 0;
	@media (max-width: 500px) {
		font-size: 0.8rem;
	}
`;

const Description = styled.p`
	color: #fff;
	font-weight: 300;
	@media (max-width: 500px) {
		font-size: 0.75rem;
	}
`;

const StyledPhoto = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border: 1px solid;
`;

const TestCard = ({ title, date, description, img }) => (
	<StyledContainer>
		<StyledPhoto src={img} />
		<Title>{title}</Title>
		<Date>{date}</Date>
		<Description>{description}</Description>
	</StyledContainer>
);

export default TestCard;
