import {SxProps, Theme} from '@mui/material';

const layoutStyle: SxProps<Theme> = {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: (theme: Theme) => `auto ${theme.spacing(1)} minmax(0, 1fr) auto ${theme.spacing(1)}`,
  gridTemplateRows: (theme: Theme) => `${theme.spacing(0)} max-content minmax(0, 1fr) ${theme.spacing(0)}`,
  gap: '8px 0',
  gridTemplateAreas: `'sidebar . . . .'
     'sidebar . header header .'
     'sidebar . content log .'
     'sidebar . . . .'`,

  '.content': {
    gridArea: 'content',
    display: 'flex',
    flexDirection: 'row',
  },

  '.sidebar': {
    width: '240px',
  },
};

export default layoutStyle;
