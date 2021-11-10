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
					<SidebarRoute href="https://groupme.com/join_group/76453291/e6j4ng9s" target="_blank">
						Join GroupMe
					</SidebarRoute>
				</SidebarBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
