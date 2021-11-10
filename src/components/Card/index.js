import React from "react";
import styled from "styled-components";
import TestCard from "./testCardElements";
import Tilt from "react-parallax-tilt";

const StyledRoot = styled.div`
	padding: 50px 12px;
`;

const StyledContainer = styled.div`
	max-width: 550px;
	width: 100%;
	margin: auto;
`;

const Parent = ({ img, title, date, description }) => {
	return (
		<Tilt>
			<StyledRoot>
				<StyledContainer>
					<TestCard img={img} title={title} date={date} description={description} />
				</StyledContainer>
			</StyledRoot>
		</Tilt>
	);
};

export default Parent;
