import styled from "styled-components";

const Caared = styled.div`
    display: flex;
    position: relative;
    @media (max-width: 750px) {
    }
`;
const Img = styled.img`
    width: 654px;
    @media (max-width: 750px) {
        width: 358px;
    }
`;
const Button = styled.img`
    height: 44px;
    position: absolute;
    bottom: 75px;
    left: 35px;
    cursor: pointer;
    @media (max-width: 750px) {
        height: 24px;
        bottom: 41px;
        left: 15px;
    }
`;
export default function Card({ url, btnUrl }) {
    return (
        <Caared>
            <Img src={url} alt="Medicine Image" />
            <Button src={btnUrl} />
        </Caared>
    );
}
