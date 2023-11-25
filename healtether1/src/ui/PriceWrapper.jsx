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

export default function PriceWrapper({ children }) {

    return (
        <MDBContainer className="py-5 font ">
            <div className="text-center">
                <h4
                    className="mb-4"
                    style={{
                        fontFamily:
                            '"Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                    }}>
                    <strong>Pricing</strong>
                    <p className="text-muted mt-4">Plans that fit your need</p>
                </h4>
            </div>

            <MDBRow  center={true}>{children}</MDBRow>
        </MDBContainer>
    );
}
