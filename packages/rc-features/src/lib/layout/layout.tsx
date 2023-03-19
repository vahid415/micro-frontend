import {Outlet} from 'react-router-dom';

import {Box} from "@mui/material";
import SidebarLayout from "./sidebar";
import layoutStyle from "./layout.style";


export const AppLayout = () => {
    return (
            <Box  sx={layoutStyle} component='main' role='main'>
                <SidebarLayout/>
                <Box className='content' component='section'>
                    <Outlet/>
                </Box>
            </Box>
    );
};

export default AppLayout
