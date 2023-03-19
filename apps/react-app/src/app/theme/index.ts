import { createTheme, ThemeOptions } from '@mui/material/styles';



export type Themes = 'light' | 'dark';

export const muiGlobal = ( theme: Themes, isLight: boolean) => {
    return createTheme({
        direction: 'ltr',
        palette: {
            mode: theme,
            background: {
                default: isLight ? '#F9F9F9' : '#1B2737',
                paper: isLight ? '#FFFFFF' : '#283A53',
            },
            text: {
                primary: isLight ? '#213145' : '#C8D4E4',
            },
            primary: {
                light: '#FEF1E7',
                main: '#F38020',
                dark: '#6A3306',
                A100: '#FDE6D3',
                A200: '#FACDA8',
                A300: '#F8B177',
                A400: '#F5984C',
                A600: '#D0640B',
                A700: '#9B4A08',
                A900: '#351A03',
            },
            secondary: {
                light: '#F7F7F8',
                main: '#ADB5BD',
                dark: '#626E79',
                A100: '#EEF0F1',
                A200: '#DDE0E4',
                A300: '#CFD4D8',
                A400: '#BEC4CB',
                A600: '#86919D',
                A700: '#626E79',
                A900: '#202428',
            },
            success: {
                light: '#E1F9EE',
                main: '#198754',
                dark: '#0A3823',
                A100: '#C3F4DD',
                A200: '#8BEABD',
                A300: '#4FDE9B',
                A400: '#24C278',
                A600: '#146C43',
                A700: '#0F5233',
                A900: '#051A10',
            },
            error: {
                light: '#FBE9EB',
                dark: '#5B1017',
                main: '#DC3545',
                A100: '#F8D8DB',
                A200: '#F1ACB3',
                A300: '#EA858F',
                A400: '#E35E6B',
                A600: '#BB2030',
                A700: '#8B1824',
                A900: '#30080C',
            },
            warning: {
                light: '#FFF9E5',
                dark: '#6B5000',
                main: '#FFC107',
                A100: '#FFF2CC',
                A200: '#FFE79E',
                A300: '#FFDA6B',
                A400: '#FFCD38',
                A600: '#D19D00',
                A700: '#9E7700',
                A900: '#332600',
            },
            info: {
                light: '#E7FAFE',
                dark: '#055161',
                main: '#0DCAF0',
                A100: '#CFF5FC',
                A200: '#9EEAFA',
                A300: '#6EE0F7',
                A400: '#3ED6F4',
                A600: '#0BA3C1',
                A700: '#087A91',
                A900: '#032930',
            },

            divider: isLight ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
            action: {
                disabledBackground: 'transparent',
                disabled: isLight ? '#dce3ed' : '#354e6e',
            },
        },

        components: {
            MuiUseMediaQuery: {
                defaultProps: {
                    noSsr: true,
                },
            },
            MuiCssBaseline: {
            },
        },
        shape: {
            borderRadius: 15,
        },
        sidebars: {
            menuOpen: 300,
            menuClose: 78,
            log: 300,
            drawer: 400,
        },
    } as ThemeOptions);
};
