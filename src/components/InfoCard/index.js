import React from "react";
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	Column2,
	ImgWrap,
	Img,
} from "./testElements";
import Icon1 from "../../images/landing_page.PNG";
import Parent from "../Card";

const eventData = [
	{
		name: "Learn To Build Landing Page",
		description: "Learn how to make a Professional landing page for your business with react.js",
		Date: "10th, Novemeber",
		img: Icon1,
	},
];

const TestC = ({
	id,
	lightBg,
	lightText,
	topLine,
	headLine,
	description,
	imgStart,
	img,
	alt,
	darkText,
}) => {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
							</TextWrapper>
						</Column1>
						<Column2>
							<Parent
								title={eventData[0].name}
								date={eventData[0].Date}
								img={eventData[0].img}
								description={eventData[0].description}
							/>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default TestC;
