import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  CssBaseline,
  Drawer,
  Box,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Container,
  Link as MUILink,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Movie as MovieIcon,
  People as PeopleIcon,
  BubbleChart as BubbleChartIcon,
} from '@material-ui/icons'
import GraphPage from './components/GraphPage'
import PersonPage from './components/PersonPage'
import MoviePage from './components/MoviePage'
import { useAppStyles } from './theme/component.style'
import Paper from '@material-ui/core/Paper'
import DarkToggle from './theme/DarkToggle'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MUILink color="inherit" href="https://licyp.com/">
        licyp
      </MUILink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}


export default function App() {
  const classes = useAppStyles()
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <img
              className={classes.appBarImage}
              src=""
              alt="licyp logo"
            />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              welcome to licyp, play with your data
            </Typography>
            <DarkToggle />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/graphdata" className={classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <BubbleChartIcon />
                </ListItemIcon>
                <ListItemText primary="graph data" />
              </ListItem>
            </Link>
            <Link to="/person" className={classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="person data" />
              </ListItem>
            </Link>
            <Link to="/movie" className={classes.navLink}>
              <ListItem button>
                <ListItemIcon>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="movie data" />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>

            <Switch>
              <Route exact path="/graphdata" component={GraphPage} />
              <Route exact path="/person" component={PersonPage} />
              <Route exact path="/movie" component={MoviePage} />
            </Switch>

            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </Router>
  )
}
