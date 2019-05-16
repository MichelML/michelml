import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import DescriptionIcon from "@material-ui/icons/Description";
import BookIcon from "@material-ui/icons/Book";
import InfoIcon from "@material-ui/icons/Info";
import MailIcon from "@material-ui/icons/Mail";
import Link from "next/link";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import classNames from "classnames";
import Backdrop from "@material-ui/core/Backdrop";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  toolBar: {
    backgroundColor: "#fff"
  },
  typo: {
    cursor: "pointer",
    padding: "0 20px 0 0"
  },
  grow: {
    flexGrow: 1
  },
  headerLink: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  activeName: {
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  drawerIcon: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex"
    }
  },
  // drawer style
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 16px 0 20px",
    ...theme.mixins.toolbar
  },
  drawerRoot: {
    zIndex: 1001
  },
  backdropShown: {
    zIndex: 1000
  },
  backdropHidden: {
    backgroundColor: "transparent"
  }
});

class HeaderBar extends React.Component {
  static AllLinks = [
    { href: "/", name: "Blog", icon: () => <DescriptionIcon /> },
    { href: "/library", name: "Library", icon: () => <BookIcon /> },
    { href: "/contact", name: "Contact", icon: () => <MailIcon /> },
    { href: "/about", name: "About", icon: () => <InfoIcon /> }
  ];

  static HeaderLink = ({ activeName, name, href, classes }) => (
    <Link prefetch href={href}>
      <Button
        color="inherit"
        className={classNames(classes.headerLink, {
          [classes.activeName]: activeName === name
        })}
      >
        {name}
      </Button>
    </Link>
  );

  static DrawerLink = ({ link }) => (
    <ListItem button component="a" href={link.href}>
      <ListItemIcon>{link.icon()}</ListItemIcon>
      <ListItemText primary={link.name} />
    </ListItem>
  );

  state = {
    drawerOpen: false
  };

  handleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const { classes, activeName } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Drawer
            className={classNames(classes.drawer, {
              [classes.drawerRoot]: this.state.drawerOpen
            })}
            variant="persistent"
            anchor="left"
            open={this.state.drawerOpen}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={classes.typo}
              >
                Navigation
              </Typography>
              <div className={classes.grow} />
              <IconButton
                onClick={this.handleDrawer}
                color="inherit"
                aria-label="Close Menu"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              {HeaderBar.AllLinks.map(link => (
                <HeaderBar.DrawerLink key={link.name} link={link} />
              ))}
            </List>
          </Drawer>
          <Backdrop
            open={this.state.drawerOpen}
            onClick={this.handleDrawer}
            classes={{
              root: classNames({
                [classes.backdropShown]: this.state.drawerOpen,
                [classes.backdropHidden]: !this.state.drawerOpen
              })
            }}
          />
          <Toolbar variant="dense" className={classes.toolBar}>
            <IconButton
              onClick={this.handleDrawer}
              className={classes.drawerIcon}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <Typography
                variant="subtitle1"
                color="inherit"
                className={classes.typo}
              >
                MichelML
              </Typography>
            </Link>
            <div className={classes.grow} />
            {HeaderBar.AllLinks.map(link => (
              <HeaderBar.HeaderLink
                key={link.name}
                activeName={activeName}
                classes={classes}
                href={link.href}
                name={link.name}
              />
            ))}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);
