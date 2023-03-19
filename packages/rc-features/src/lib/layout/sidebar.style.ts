import { SxProps, Theme, lighten } from '@mui/material';

const sidebarStyle: SxProps<Theme> = {
    gridArea: 'sidebar',
    display: 'flex',
    // background: 'linear-gradient(#FDE6D7 0%,#FFFFFF 4%, #FFFFFF 96% ,#FDE6D7 100%)',
    bgcolor: (theme: Theme) =>
        theme.palette.mode === 'light' ? lighten(theme.palette.secondary.main, 1) : 'background.paper',
    transition: (theme: Theme) => `width ${theme.transitions.duration.standard}ms`,
    zIndex: 1,

    '.os-host': {
        flexGrow: 1,

        '.os-content': {
            height: `initial !important`,
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
    },

    '.MuiList-root': {
        p: 0,
        flexGrow: 1,

        '.MuiMenuItem-root': {
            p: '0.5rem 0.75rem',
            m: '0.5rem 1rem',
            transition: (theme: Theme) => `color ${theme.transitions.duration.short}ms`,

            '.MuiListItemIcon-root': {
                minWidth: 50,
            },

            '.MuiListItemText-root': {
                color: (theme: Theme) => (theme.palette.mode === 'light' ? theme.palette.secondary.main : 'background.paper'),
            },

            '&:hover, &.active': {
                bgcolor: (theme: Theme) => (theme.palette.mode === 'light' ? theme.palette.primary.main : 'background.paper'),
                borderRadius: '20px',
                transition: (theme: Theme) => `color ${theme.transitions.duration.short}ms`,

                '.MuiListItemIcon-root, .MuiListItemText-root': {
                    color: 'primary.light',
                    transition: (theme: Theme) => `color ${theme.transitions.duration.short}ms`,
                },
            },
        },
    },
};

export default sidebarStyle;
