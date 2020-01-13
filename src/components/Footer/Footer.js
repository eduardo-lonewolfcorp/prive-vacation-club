/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";
import "components/Footer/footer.css"

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className="footer">
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <span className={classes.block} className="text-decoration">
                Privê Vacation Club. Todos os direitos reservados.
              </span>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://lonewolfcorp.com/"
              target="_blank"
              className="text-decoration"
            >
              LoneWolf Corp
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
