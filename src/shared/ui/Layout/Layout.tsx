import {Outlet} from "react-router-dom";
import {Box, Container} from "@mui/material";
import {Header} from "../Header";

export const Layout = () => {
    return (
        <>
                <Box sx={{backgroundColor: '#4c4c4c'}}>
                    <Header/>
                    <Container maxWidth={"xl"} >
                        <Outlet/>
                    </Container>
                </Box>
        </>

    );
};

