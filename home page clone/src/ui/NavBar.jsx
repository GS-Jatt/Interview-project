import styled from "styled-components"
import { Button } from "./Button";

const StyledNavBar = styled.nav`
    margin: auto;
    max-width:1200px;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: transparent;
    & img {
        height: 50px;
    }
    & ul {
        display: flex;
        gap: 40px;
        align-items: center;
        @media(max-width: 750px){
            display: none;
        }
    }
`;
const Div = styled.div`

    display: flex;
    align-items: center;
    height: 72px;
    position: fixed;
    z-index: 1100;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(6px);
    box-shadow: 1px -3px 16px 9px #00000014;
`;

const NavItem = styled.li`
    cursor: pointer;
    color: ${(props) => (props.isActive ? "rgb(118, 53, 220)" : "")};
    list-style: ${(props) =>props.isActive ?"circle" : 'none'};
    font-weight: 600;
    
    &:hover {
        opacity: 0.5;
    }
`;
const MobileUl = styled.div`
    display: none;

    @media (max-width: 750px) {
        display: flex;
        gap: 25px;
        align-items: center;
        
    }
`;

export default function NavBar(){
    return (
        <Div>
            <StyledNavBar>
                <img src="logo.png" />
                <MobileUl>
                    <Button>Download Now</Button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        class="MuiBox-root css-1t9pz9x iconify iconify--eva"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24">
                        <g id="iconifyReact213">
                            <g id="iconifyReact214">
                                <g id="iconifyReact215" fill="currentColor">
                                    <circle cx="4" cy="12" r="1"></circle>
                                    <rect
                                        width="14"
                                        height="2"
                                        x="7"
                                        y="11"
                                        rx=".94"
                                        ry=".94"></rect>
                                    <rect
                                        width="18"
                                        height="2"
                                        x="3"
                                        y="16"
                                        rx=".94"
                                        ry=".94"></rect>
                                    <rect
                                        width="18"
                                        height="2"
                                        x="3"
                                        y="6"
                                        rx=".94"
                                        ry=".94"></rect>
                                </g>
                            </g>
                        </g>
                    </svg>
                </MobileUl>
                <ul>
                    <NavItem isActive={true}>Home</NavItem>
                    <NavItem>App Features</NavItem>
                    <NavItem>About Us</NavItem>
                    <NavItem>
                        <Button>Download Now</Button>
                    </NavItem>
                </ul>
            </StyledNavBar>
        </Div>
    );
}