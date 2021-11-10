import React, { useState } from "react";
import Video from "../../videos/video4.mp4";
import { Button } from "../ButtonElements";
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay={true} loop={true} muted={true} src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Ideation & Creation Entrepreneurs</HeroH1>
				<HeroP>Where your Ideas take Wings!!</HeroP>
				<HeroBtnWrapper>
					<Button
						to="/joinus"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary="false"
						dark="true"
					>
						Join Us {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
