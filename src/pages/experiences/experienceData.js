import { Typography } from "@material-ui/core"
import MB from "../../assets/companies/Markbladet.png"
import SC from "../../assets/companies/Scribd.png"
import VA from "../../assets/companies/Varvet.png"
import PU from "../../assets/companies/Punch.png"

const experiences = [
    {
        name: "Markbladet AB",
        role: "React Developer",
        time: "May 2021 - January 2022",
        description:
            <Typography style={{
                fontSize: '1em',
                fontWeight: 200
            }}>
                - Followed AGILE Methodology for the software development process,
                    part of the cross-functional team for the application development.
                <br />
                - Used React as a JS library to create a Single Page Application ơSPAƣ
                    which can bind data to specific views and synchronize data with the
                    server
            </Typography>,
        logo: MB,
        link: "https://www.markbladet.se/"
    },
    {
        name: "Scribd - Book Publish",
        role: "Full Stack Engineer",
        time: "March 2020 - April 2021",
        description:
            <Typography style={{
                fontSize: '1em',
                fontWeight: 200
            }}>
                - Developed and executed 30+ test procedures for software
                    components.
                <br />
                - Developed/programmed new functionality and features in line with
                    functional specifications and business requirements. 
            </Typography>,
        logo: SC,
        link: "https://scribd.com/"
    },
    {
        name: "Varvet",
        role: "Backend Developer",
        time: "July 2018 - January 2020",
        description:
            <Typography style={{
                fontSize: '1em',
                fontWeight: 200
            }}>
                - Designed and developed backend system for SaaS web application demo integrated with OCR Technology
                <br />
                - Containerized application with Docker, configured domain with NGINX and deployed on Linux-based server for production 
            </Typography>,
        logo: VA,
        link: "https://www.varvet.com/"
    },
    {
        name: "Punch Powertrain Germany GmbH",
        role: "Frontend Developer",
        time: "January 2015 - May 2018",
        description:
            <Typography style={{
                fontSize: '1em',
                fontWeight: 200
            }}>
                - Implemented front-end technical solutions to meet project
                    requirements for creation of 5 new web pages.
                <br/>
                - Worked in an Agile, collaborative environment to receive design
                    requirements, peer program, and test applications.
            </Typography>,
        logo: PU,
        link: "https://punchpowertrain.com/"
    },
]

export default experiences;