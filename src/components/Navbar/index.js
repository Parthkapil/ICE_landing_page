import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	//this is called to change the nav color on scroll
	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					{/* adding to for Router */}
					<NavLogo to="/" onClick={toggleHome}>
						ICE
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars size={30} />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								About
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="events"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Events
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="team" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
								Our Team
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						{/* href="https://groupme.com/join_group/76453291/e6j4ng9s" target="_blank" */}
						<NavBtnLink href="https://groupme.com/join_group/76453291/e6j4ng9s" target="_blank">
							Join GroupMe
						</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
