import styled from "styled-components";
import Card from "./Card";
import Section from "./Section";

const StyledMain = styled.main`
    height: 100vh;
    background: rgb(255, 255, 255);
    margin: 0 352px;
    @media (max-width: 750px) {
        margin: 0 18px;
    }
`;
const Div = styled.div`
    margin: 74px -74px;
    display: flex;
    gap: 40px;
    @media (max-width: 750px) {
        flex-direction: column;
        margin: 0 0;
        margin-top: 240px;
    }
`;

const Div2 = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 80px;
    @media (max-width: 750px) {
        flex-direction: column;
        /* margin: 0 0; */
        /* margin-top: 80px; */
    }
    & div {
        width: 368px;
        border-radius: 16px;
        display: flex;
        gap: 60px;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(77, 49, 215);
        padding: 16px 16px 16px 24px;
        @media (max-width: 750px) {
           width: 360px;
           margin: auto;
        }
    }
    & img {
        width: 96px;
    }
    & h3 {
        font-size: 30px;
    }
`;

export default function Main() {
    return (
        <StyledMain>
            <Div>
                <Card
                    btnUrl={
                        "https://yore-care.s3.ap-south-1.amazonaws.com/YoreCare+Website+V2/Web+Banner/Whatapp+icon.png"
                    }
                    url={
                        "https://yore-care.s3.ap-south-1.amazonaws.com/YoreCare+Website+V2/Web+Banner/Order+Online+Medicine+1.png"
                    }
                />
                <Card
                    btnUrl={
                        "https://yore-care.s3.ap-south-1.amazonaws.com/YoreCare+Website+V2/Web+Banner/Book+Now+Button.png"
                    }
                    url={
                        "https://yore-care.s3.ap-south-1.amazonaws.com/YoreCare+Website+V2/Web+Banner/Book+Lab+Test+1.png"
                    }
                />
            </Div>
            <Section
                data1={{
                    title: "ABHA ID YOUR UNIQUE & TRUSTABLE HEALTH ID",
                    header: "Unlock India's Digital Health Ecosystem with Seamless Access",
                    about: "Create your ABHA ID on the YORE Care app and manage your health anytime, anywhere in India.",
                    buttons: ["create abha", "know more"],
                }}
                data2={[
                    {
                        title: "Unique and Reliable Identity",
                        about: "Health ID cards offer a highly secure and encrypted platform. User consent is mandatory for accessing their PHR every time.",
                        icon: "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/icons8-name-96.png",
                        image: [
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/ABHA+Card.png",
                        ],
                    },
                    {
                        title: "Consolidated Benefits Platform",
                        about: "Effortlessly link diverse healthcare benefits, from public health programs to insurance schemes, with your ABHA number.",
                        icon: "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/icons8-application-window-96.png",
                        image: [
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/Home+component+2.png",
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/Home+component+3.png",
                        ],
                    },
                    {
                        title: "Quick and Easy Registration",
                        about: "Register swiftly by entering basic information and validating your Aadhaar or mobile number to generate your Health ID card",
                        icon: "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/icons8-register-96.png",
                        image: [
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/Create+abha+otp+components.png",
                        ],
                    },
                ]}
            />
            {/* 2 */}
            <Section
                data1={{
                    title: "STREAMLINED HEALTH RECORD MANAGEMENT MADE EFFORTLESS",
                    header: "NOW Link Your Health Records with ABHA ID",
                    about: "Experience a cutting-edge solution for effortless management of your health records. Gain secure and convenient digital access.",
                    buttons: ["Upload Now", "know More"],
                }}
                data2={[
                    {
                        title: "Digitrack",
                        about: "Effortlessly record and manage digital details of your medical treatments. the patients in one practice",
                        icon: "https://yore-care.s3.ap-south-1.amazonaws.com/New+Website/Icon/Digi+Track+1.png",
                        image: [
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/Group+9399.png",
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/Group+9400.png",
                        ],
                    },
                    {
                        title: "MedTrack",
                        about: "Centralize medical documents, including diagnostic test reports and prescriptions, for easy future reference.",
                        icon: "https://yore-care.s3.ap-south-1.amazonaws.com/New+Website/Icon/Med+Track+1.png",
                        image: [
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/Rectangle+2150.png",
                        ],
                    },
                    {
                        title: "CareTrack",
                        about: "Enable doctors to access your comprehensive medical files, treatment history, and diagnostic reports through a single platform",
                        icon: "https://yore-care.s3.ap-south-1.amazonaws.com/New+Website/Icon/Care+Track+1.png",
                        image: [
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/Frame+9817.png",
                        ],
                    },
                ]}
            />
            <Div2>
                <div>
                    <h3>Convenience</h3>
                    <img src="https://yore-care.s3.ap-south-1.amazonaws.com/New+Website/Icon/Convenience.png" />
                </div>
                <div>
                    <h3>Accessibility</h3>
                    <img src="https://yore-care.s3.ap-south-1.amazonaws.com/New+Website/Icon/Accessibility.png" />
                </div>
                <div>
                    <h3>Security</h3>
                    <img src="https://yore-care.s3.ap-south-1.amazonaws.com/New+Website/Icon/Security.png" />
                </div>
            </Div2>
            {/* 3 */}
            <Section
                data1={{
                    title: "SYNC, TRANSFORM, GET FIT WITH SMART HEALTH",
                    header: "Connect to the fitness galaxy and embark on an adventure",
                    about: "Sync your healthcare devices, elevate consistency, and be on the path of a transformational journey like never before!",
                    buttons: ["Download App", "know More"],
                }}
                data2={[
                    {
                        title: "Activity Tracker",
                        about: "Tracks steps, distance, calories burned, and other physical and activities",
                        icon: "https://yore-care.s3.ap-south-1.amazonaws.com/New+Website/Icon/Activity+tracker+1.png",
                        image: [
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/Group+9368.png",
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/Group+9369.png",
                        ],
                    },
                    {
                        title: "Water Tracker",
                        about: "Measures and monitors heart rate during workouts or daily and activities.",
                        icon: "https://yore-care.s3.ap-south-1.amazonaws.com/New+Website/Icon/Icon_Water+1+.png",
                        image: [
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/Group+9383+(1).png",
                        ],
                    },
                    {
                        title: "Sleep Tracker",
                        about: "Monitors sleep patterns, providing insights into sleep quality and duration",
                        icon: "https://yore-care.s3.ap-south-1.amazonaws.com/New+Website/Icon/Sleep+tracker+1+.png",
                        image: [
                            "https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/Group+9255.png",
                        ],
                    },
                ]}
            />
        </StyledMain>
    );
}
