import styled from "styled-components";
import { Button } from "./Button";

const StyledMain = styled.header`
    height: 100vh;
    background: linear-gradient(
                rgba(255, 255, 255, 0.9),
                rgba(255, 255, 255, 0.9)
            )
            center center / cover no-repeat,
        url(overlay_2.jpg);
    background-repeat: no-repeat;
    background-position: center center;
`;

const Div = styled.div`
    margin: 0px 275px;
    margin-top: 74px;
    display: flex;
    gap: 80px;
    @media (max-width: 750px) {
        flex-direction: column;
        margin: 50px 24px;
        gap: 5px;
    }
`;
const Section = styled.section`
    flex: 1;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
        height: 581px;
    }
    & p {
        font-size: 30px;
        margin-top: 16px;
        @media (max-width: 750px) {
            font-size: 19px;
        }
    }
    & span {
        color: #4d31d7;
    }
    & h1 {
        font-size: 55px;
        font-weight: 700;
        line-height: 1.2;
        @media (max-width: 750px) {
            font-size: 30px;
        }
    }
    & div {
        display: flex;
        gap: 30px;
        margin-top: 30px;
        & span {
            display: inline-block;
            padding: 4px 18px;
            color: white;
            font-weight: 700;
            font-size: 20px;
            @media (max-width: 750px) {
                font-size:15px;
            }
        }
    }
`;
export default function Header() {
    return (
        <StyledMain>
            <Div>
                <Section>
                    <h1>
                        Digitize, Preserve & Empower <span>Healthcare</span>
                    </h1>
                    <p>
                        Your comprehensive online healthcare solution, we
                        provide 24x7 access to personalized healthcare services,
                        seamless integration of health devices, and daily health
                        updates, all within a unified and empowering ecosystem.
                    </p>
                    <div>
                        <Button>
                            <span>Google Play</span>
                        </Button>
                        <Button color={"transparent"}>
                            <span style={{ color: "black" }}>App Store</span>
                        </Button>
                    </div>
                </Section>
                <Section>
                    <img
                        alt="Link Medical Records With ABHA ID"
                        src="https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/ABHA+page+frame.png"
                    />
                </Section>
            </Div>
        </StyledMain>
    );
}
