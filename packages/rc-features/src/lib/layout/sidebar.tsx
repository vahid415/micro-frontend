import {Link} from "react-router-dom";
import {Box, Icon, ListItemIcon, ListItemText, MenuItem, MenuList} from "@mui/material";

import sidebarStyle from "./sidebar.style";


export const SidebarLayout = () => {

    return (
            <Box sx={sidebarStyle} className='sidebar' component='aside'>
                <MenuList role='menuList'>
                    <MenuItem component={Link} disableRipple to='/first'>
                        <ListItemIcon>
                            <Icon className='menu-icon'/>
                        </ListItemIcon>
                        <ListItemText primary='First'/>
                    </MenuItem>
                    <MenuItem component={Link} disableRipple to='/second'>
                        <ListItemIcon>
                            <Icon className='menu-icon'/>
                        </ListItemIcon>
                        <ListItemText primary='Second'/>
                    </MenuItem>
                </MenuList>
            </Box>
    );
};

export default SidebarLayout
