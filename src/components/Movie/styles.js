import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: '10px',
  },
  links: {
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  image: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    height: '300px',
    marginBottom: '10px',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
    },
  },
  title: {
    color: theme.palette.text.primary,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px',
    textAlign: 'center',
  },
}));





