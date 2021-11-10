import React from "react";
import Icon1 from "../../images/nick.PNG";
import Icon2 from "../../images/parth.PNG";
import Icon3 from "../../images/himanshu.PNG";
import {
	ServicesContainer,
	ServicesH1,
	ServicesH2,
	SevicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesP,
} from "./ServicesElements";

const teamData = [
	{
		name: "Nick Leamon",
		designation: "President",
		img: Icon1,
	},
	{
		name: "Parth Kapil",
		designation: "Lead --",
		img: Icon2,
	},
	{
		name: "Himanshu Hansaria",
		designation: "Lead --",
		img: Icon3,
	},
	{
		name: "Lavanya Subramanian",
		designation: "Lead --",
		img: Icon1,
	},
];

const ServiceSection = () => {
	return (
		<ServicesContainer id="team">
			<ServicesH1>Our Team</ServicesH1>
			<SevicesWrapper>
				{teamData.map(member => (
					<ServicesCard>
						<ServicesIcon src={member.img} />
						<ServicesH2>{member.name}</ServicesH2>
						<ServicesP>{member.designation}</ServicesP>
					</ServicesCard>
				))}
			</SevicesWrapper>
		</ServicesContainer>
	);
};

export default ServiceSection;
