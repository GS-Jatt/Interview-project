import styled from "styled-components"
import { Button } from "./Button"
import Model from "./Model";

const Header = styled.div`
    margin-top: 80px;
    margin-bottom: 40px;
    & p {
        width: 545px;
        margin: auto;
        text-align: center;
        color: #1b9c7d;
        background-color: #f1fff3;
        padding: 12px;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 20px;
        @media (max-width: 750px) {
            width: 322px;
            font-size: 16px;
            font-weight: 700;
        }
    }
    & h1 {
        font-size: 50px;
        font-weight: 700;
        text-align: center;
        line-height: 1.3;
        margin-bottom: 20px;
        @media (max-width: 750px) {
            font-size: 33px;
        }
    }
    & h4 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 45px;
        @media (max-width: 750px) {
            font-size: 16px;
        }
    }
    & div {
        display: flex;
        gap: 10px;
        justify-content: center;
        @media (max-width: 750px) {
            flex-direction: column;
        }
        & span {
            display: inline-block;
            padding: 4px 18px;
            font-weight: 700;
            font-size: 20px;
        }
    }
`;
export default function Section({data1, data2}){
    return (
        <>
        <Header>
            <p>{data1.title}</p>
            <h1>{data1.header}</h1>
            <h4>{data1.about}</h4>
            <div>
                <Button>
                    <span>{data1.buttons[0]}</span>
                </Button>
                <Button color="transparent">
                    {" "}
                    <span>{data1.buttons[1]}</span>
                </Button>
            </div>
        </Header>
        <Model data2={data2}/>
        </>
    );
}