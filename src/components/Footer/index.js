import { Grid, Icon, makeStyles, Paper, Typography } from "@material-ui/core";
import { loadCSS } from "fg-loadcss";
import { useEffect } from "react";
import clsx from "classnames";
import sharedStyle from "../../utils/style/js/sharedStyle";

const Footer = (params) => {
  const useStyle = makeStyles((theme) => {
    const mainStyle = sharedStyle();
    return {
      wrapper: {
        ...mainStyle.wrapper,
        backgroundColor: theme.palette.primary.dark,
        position: "relative",
        bottom: 0,
      },
      container: {
        ...mainStyle.container,
      },
      text: {
        maxWidth: theme.spacing(55),
        marginBottom: theme.spacing(5),
      },
      email: {
        marginBottom: theme.spacing(2),
      },
    };
  });
  const classes = useStyle();
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <Paper className={classes.wrapper}>
      <Grid container direction='column' className={classes.container}>
        <Grid item>
          <a href='#' data-ix='logo' className='footer-logo-2 w-nav-brand'>
            <img src='/images/Zede-logo.svg' width='104' alt='' />
          </a>
        </Grid>
        <Grid item>
          <Typography className={clsx(classes.text, "ondark")}>
            From empowering challenger brands to think big to helping global
            brands feel closer to home, we leverage technology to bring people
            closer to the products, content, and experiences they love.
          </Typography>
        </Grid>
        <Grid item>
          <div className='footer-links-container'>
            <Typography className='footer-heading'>Let&#x27;s Meet</Typography>
            <Typography className={clsx(classes.email, "footer-paragraph")}>
              hello@zede.tech
            </Typography>
          </div>
        </Grid>
        <Grid item>
          <Grid container justify='space-around'>
            <Icon className='fab fa-facebook-f' color='secondary' />
            <Icon className='fab fa-instagram' color='secondary' />
            <Icon className='fab fa-twitter' color='secondary' />
            <Icon className='fab fa-linkedin-in' color='secondary' />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;