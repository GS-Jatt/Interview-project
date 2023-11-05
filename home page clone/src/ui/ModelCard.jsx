import styled from "styled-components";

const Card = styled.div`
    display: flex;
    gap: 20px;

    background-color: rgb(255, 255, 255);
    color: rgb(33, 43, 54);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-image: none;
    overflow: hidden;
    position: relative;
    box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
        rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
    border-radius: 16px;
    z-index: 0;
    max-width: 535px;
    padding: 16px;
    cursor: pointer;
    border: ${(props) => (props.boarder ? "1px solid black" : "none")};
    @media (max-width: 750px) {

        max-width: 72px;
        padding: 10px ;
    & p{
        display: none;
    }
    & div [
        margin: 0;
        padding:0;
    ]
    }
    & img {
        width: 50px;
    }
    & h4 {
        font-size: 24px;
        margin-bottom: 5px;
        @media (max-width: 750px) {
            display: none;
        }
    }
`;
export default function ModelCard({ model, setModel, data ,num}) {
    return (
        <Card boarder={model === num} onClick={()=>setModel(num)}>
            <div>
                <img src={data.icon} />
            </div>
            <div>
                <h4>{data.title} </h4>
               {model === num && <p>{data.about}</p>}
            </div>
        </Card>
    );
}
