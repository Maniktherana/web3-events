import React from 'react';
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../../styles';
import memories from '../../images/memories.png';

const Navbar = () => {
    const classes = useStyles();
    const user = null;
    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography className={classes.heading} variant="h2" align="center">Web3 Events</Typography>
            <img className={classes.image} src={memories} alt="memories" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <typography className={classes.userName} variant="h6">{user.result.name}</typography>
                    <Button variant="contained" className={classes.logout} color="secondary" component={Link} to="/logout">Logout</Button>
                </div>
            ) : (
                <Button variant="contained" color="secondary" component={Link} to="/auth">Login</Button>
            )}
        </Toolbar>
    </AppBar>
    );
};

export default Navbar;