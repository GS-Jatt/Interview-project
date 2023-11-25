import PriceWrapper from "./PriceWrapper";
import {
    MDBContainer,
    MDBBtnGroup,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBTypography,
    MDBIcon,
    MDBCardTitle,
} from "mdb-react-ui-kit";

function PriceItem({ data }) {


    return (
        <>
            <MDBCol md="4" className="mb-4">
                <MDBCard border="dark shadow-sm">
                    <MDBCardBody className="mx-0">
                        <MDBCardTitle
                            className="my-2"
                            style={{
                                fontFamily:
                                    '"Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            }}>
                            {data.heading}
                        </MDBCardTitle>
                        <p className="text-muted ">{data.heroText}</p>
                        <p className="h2 fw-bold">
                            ₹
                            <span
                                style={{
                                    textDecoration: "line-through",
                                    marginRight: "10px",
                                }}>
                                {data.amount[0]}
                            </span>
                            {data.amount[1]}
                            <small
                                className="text-muted"
                                style={{ fontSize: "18px" }}>
                                /year
                            </small>
                        </p>
                        <MDBBtn
                            style={{ backgroundColor: " #008374" }}
                            noRipple={true}
                            onClick={() => ""}
                            className="d-block mb-2 btn w-100 mt-3 ">
                            Buy {data.heading}
                        </MDBBtn>
                    </MDBCardBody>

                    <MDBCardFooter>
                        <p
                            className="text-uppercase fw-bold"
                            style={{ fontSize: "16px" }}>
                            What's included
                        </p>

                        <MDBTypography
                            listUnStyled
                            className="mb-0  text-start">
                            {data.binefits.map((item) => (
                                <li key={item.title} className="mb-3 ">
                                    <p style={{margin:'5px',fontWeight:600}}>
                                    {item.title}
                                    </p>
                                    <ul>
                                        {item.sub.map((it)=><li key={it}>{it}</li>)}
                                    </ul>
                                </li>
                            ))}
                        </MDBTypography>
                    </MDBCardFooter>
                </MDBCard>
            </MDBCol>
        </>
    );
}

export default PriceItem;
