import React from "react";
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import useStyles from './components/styles';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './components/index';
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root} >
    <CssBaseline />
    <NavBar />
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
<<<<<<< Updated upstream
          <Route exact path={["/","/approved"]}>
=======
          <Route exact path={["/" ,"/approved"]}>
>>>>>>> Stashed changes
            <Movies />
          </Route>
          <Route exact path="/profile/:id"> 
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
