import React from "react";
import {
	CloseIcon,
	Icon,
	SidebarContainer,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarBtnWrap,
	SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="events" onClick={toggle}>
						Events
					</SidebarLink>
					<SidebarLink to="team" onClick={toggle}>
						Our Team
					</SidebarLink>
				</SidebarMenu>
				<SidebarBtnWrap>
					<SidebarRoute to="/joinus">Join Us</SidebarRoute>
				</SidebarBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;