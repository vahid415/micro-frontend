import {Theme, useTheme} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';


export const muiComponents = (theme: Theme) =>
        createTheme({
            ...theme,
            components: {
                ...theme.components,

            },
        });

const MuiComponents = ({children}: { children: JSX.Element }) => {
    const theme = useTheme();

    const useStyles = {
        success: {backgroundColor: `${theme.palette.success.main} !important`},
        error: {backgroundColor: `${theme.palette.error.main} !important`},
        warning: {backgroundColor: `${theme.palette.warning.main} !important`},
        info: {backgroundColor: `${theme.palette.info.main} !important`},
    };


    return (
            <ThemeProvider theme={muiComponents(theme)}>
                {children}
            </ThemeProvider>
    );
};

export default MuiComponents;
