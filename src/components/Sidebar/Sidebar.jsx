import React, {useEffect} from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { useGetGenresQuery} from '../../services/TMBD';
import genreIcons from '../../assets/genres';
import useStyles from './styles';

const  categories = [
    {label:'Popular', value:'popular'},
    {label:'Top Rated', value:'top_rated'},
    {label:'Upcoming', value:'upcoming'},
];



const redLogo = 'https://fontmeme.com/permalink/230701/f2526947d24fbbecf20f31fccc5a0bb7.png';
const blueLogo = 'https://fontmeme.com/permalink/230701/914985c0f8bc81b9a86d04198d371a49.png';

const Sidebar = ({setMobileOpen}) => {
const {  genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
const theme = useTheme();
const classes = useStyles();
const { data, isFetching } = useGetGenresQuery();
const dispatch = useDispatch();

useEffect(() => {
  setMobileOpen(false);
}, [genreIdOrCategoryName]);


  return (
    <>
        <Link to="/" className={classes.imageLink}>
         <img className={classes.image}
         src={theme.palette.mode === 'light'? redLogo : blueLogo}
         alt="Showpia Logo"
         />
        </Link>
        <Divider/>
        <List>
            <ListSubheader>Categories</ListSubheader>
            {categories.map(({label,value})=>(
               <Link key={value} className={classes.links} to="/">
                <ListItem onClick={()=>dispatch(selectGenreOrCategory(value))} button>
                   <ListItemIcon>
                        <img src={genreIcons[label.toLowerCase()]} className={classes.genreImage} height={30}/>
                    </ListItemIcon> 
                    <ListItemText primary={label}/>
                </ListItem>
               </Link>
            ))}
        </List>
        <Divider/>
        <List>
            <ListSubheader>Genres</ListSubheader>
            {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box> ):
            data.genres.map(({name,id})=>(
               <Link key={name} className={classes.links} to="/">
                <ListItem onClick={()=>dispatch(selectGenreOrCategory(id))} button>
                <ListItemIcon>
                    <img src={genreIcons[name.toLowerCase()]} className={classes.genreImage} height={30}/>
                </ListItemIcon> 
                    <ListItemText primary={name}/>
                </ListItem>
               </Link>
            ))}
        </List>
    </>
  )
}

export default Sidebar