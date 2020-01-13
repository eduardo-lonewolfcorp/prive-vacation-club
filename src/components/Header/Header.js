import React from "react";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import logo from "../../assets/img/logo.png"
import { makeStyles } from "@material-ui/core/styles";
import "components/Header/header.css"

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  return (
      <div className="header">
        <div className="header-container wd-hg-inherit">
          <div className="left">
            <a href="/" className="link-logo">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>
          <div className="right">
            <List className="list wd-hg-inherit">
              <ListItem className={classes.inlineBlock}>
                <a href="https://www.privedoatalaia.com/" target="_blank" className={classes.block}>
                  <span>Privê do Italaia</span>
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="/" className={classes.block}>
                  <span>Como Funciona</span>
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="/" className={classes.block}>
                  <span>Contato</span>
                </a>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
  );
}
