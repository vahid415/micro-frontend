import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';

import {muiGlobal} from '.';
import MuiComponents from "./mui-component";

export const MuiGlobal = ({children}: { children: JSX.Element }) => {

    return (
            <ThemeProvider theme={muiGlobal('light', true)}>
                <CssBaseline/>
                <MuiComponents>{children}</MuiComponents>
            </ThemeProvider>
    );
};
