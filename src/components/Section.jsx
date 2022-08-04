import { Box } from "@mui/material";
import { Fragment } from "react";

const Section = ({ children }) => {
    return (
        <Fragment>
            <Box py={5}>
                {children}
            </Box>
        </Fragment >
    );
}

export default Section;