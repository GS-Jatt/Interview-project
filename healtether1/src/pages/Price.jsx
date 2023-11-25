import React from "react";
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
import PriceWrapper from "../ui/PriceWrapper";
import PriceItem from "../ui/PriceItem";

export default function Price() {
    const data = [
        {
            heading: "Starter",
            heroText: "Best for  Starter",
            amount: [30000, 24000],
            binefits: [
                {
                    title: "Website ",
                    sub: [
                        "A Personalized website",
                        "Automated appointment booking through website",
                    ],
                },
                {
                    title: "Google my business",
                    sub: [
                        "Claim your Business Profile",
                        "optimization",
                        "Posts/week - 1",
                        "Maintain your Business Profile",
                    ],
                },
                {
                    title: "Instagram and facebook ad assistance",
                    sub: [
                        "Make posters and design instagram, facebook and google ads and publish",
                        "Targeted ads based on location, gender, diseases.",
                        "Posts/week - 1",
                    ],
                },
                {
                    title: "Personal Relationship Manager for any difficulties or issues.",
                    sub: [],
                },
            ],
        },
        // {
        //     heading: "Standard",
        //     heroText: "Ideal to grow and upgraded  business",
        //     amount: [50000, 34000],
        //     binefits: [
        //         {
        //             title: "Website ",
        //             sub: [
        //                 "A Personalized website",
        //                 "Automated appointment booking through website",
        //             ],
        //         },
        //         {
        //             title: "App",
        //             sub: [
        //                 "Access to all your doctors and staff",
        //                 "Automated appointment booking and tokens",
        //                 "Add and search for patient records with ease",
        //                 "Create digital prescriptions",
        //                 "Teleconsultation through whatsapp for patients",
        //                 "Automated followup reminders for your patients and post",
        //                 "consultation google review",
        //                 "Send bulk messages to patients through whatsapp",
        //             ],
        //         },
        //         {
        //             title: "Google my business",
        //             sub: [
        //                 "Claim your Business Profile",
        //                 "optimization",
        //                 "Posts/week - 1",
        //                 "Maintain your Business Profile",
        //             ],
        //         },
        //         {
        //             title: "Instagram and facebook ad assistance",
        //             sub: [
        //                 "Make posters and design instagram, facebook and google ads and publish",
        //                 "Targeted ads based on location, gender, diseases.",
        //                 "Posts/week - 1",
        //             ],
        //         },
        //         {
        //             title: "Personal Relationship Manager for any difficulties or issues.",
        //             sub: [],
        //         },
        //     ],
        // },
        {
            heading: "Standard",
            heroText: "Ideal to grow and upgraded  business",
            amount: [75000, 50000],
            binefits: [
                {
                    title: "Website ",
                    sub: [
                        "A Personalized website",
                        "Automated appointment booking through website",
                    ],
                },
                {
                    title: "App",
                    sub: [
                        "Access to all your doctors and staff",
                        "Automated appointment booking and tokens",
                        "Add and search for patient records with ease",
                        "Create digital prescriptions",
                        "Teleconsultation through whatsapp for patients",
                        "Automated followup reminders for your patients and post",
                        "consultation google review",
                        "Send bulk messages to patients through whatsapp",
                    ],
                },
                {
                    title: "Google my business",
                    sub: [
                        "Claim your Business Profile",
                        "optimization",
                        "Posts/week - 1",
                        "Maintain your Business Profile",
                    ],
                },
                {
                    title: "Instagram and facebook ad assistance",
                    sub: [
                        "Make posters and design instagram, facebook and google ads and publish",
                        "Targeted ads based on location, gender, diseases.",
                        "Posts/week - 1",
                    ],
                },
                {
                    title: "Personal Relationship Manager for any difficulties or issues.",
                    sub: [],
                },
            ],
        },
        // {
        //     heading: "Enterprise",
        //     heroText: "Ideal to grow and upgraded  business",
        //     amount: [75000, 50000],
        //     binefits: [
        //         "Website ",
        //         "App",
        //         "Business management ",
        //         "Digital marketting",
        //     ],
        // },
    ];
    return (
        <PriceWrapper>
            {data.map((data) => (
                <PriceItem key={data.amount} data={data} />
            ))}
        </PriceWrapper>
    );
}
