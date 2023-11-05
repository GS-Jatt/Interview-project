import { useEffect, useState } from "react";
import styled from "styled-components";
import ModelCard from "./ModelCard";

const StyledModel = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 750px) {
        flex-direction: column;
        .order {
            order: -1;
        }
    }
`;
const Section = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    flex: 1;
    @media (max-width: 750px) {
        flex-direction: row;
        gap: 15px;
    }
`;
const Img = styled.img`
    margin: auto;
    display: inline-block;
    height: 550px;
    width: 287px;
`;
const SubImg = styled.img`
    position: absolute;
    top: ${(props) => (props.sec === 1 ? "38%" : "17%")};
    width: 244px;
    right: ${(props) => (props.sec === 1 ? "0px" : "none")};
    @media (max-width: 750px) {
        right: ${(props) => (props.sec === 1 ? "-27px" : "none")};
        left: ${(props) => (props.sec === 1 ? "none" : "0px")};
    }
`;
const Hero = styled.div`
    display: none;
    & p {
        font-size: 14px;
        text-align: center;
        margin-bottom: 25px;
    }
    & h4 {
        text-align: center;
        font-size: 20px;
        margin-bottom: 5px;
    }
    @media (max-width: 750px) {
        display: block;
    }
`;

export default function Model({ data2 }) {
    const [model, setModel] = useState(1);

    useEffect(()=>{
        setInterval(()=>{
            
         setModel((m)=>{
            if(m<3) return m+1;
            return 1;
         })

        }, 2300)
    },[setModel ])
    return (
        <StyledModel>
            <Hero>
                <div>
                    <h4>{data2[model-1].title} </h4>
                    <p>{data2[model-1].about}</p>
                </div>
            </Hero>
            <Section>
                {data2.map((data, index) => (
                    <ModelCard
                        key={index}
                        model={model}
                        data={data}
                        num={index + 1}
                        setModel={setModel}
                    />
                ))}
            </Section>
            <Section className="order">
                <Img
                    alt="Link Medical Records With ABHA ID"
                    src="https://yore-care.s3.ap-south-1.amazonaws.com/mocks/Components/ABHA+page+frame.png"
                />
                {data2[model - 1].image.map((img, index) => (
                    <SubImg key={index} sec={index} src={img} />
                ))}
            </Section>
        </StyledModel>
    );
}
