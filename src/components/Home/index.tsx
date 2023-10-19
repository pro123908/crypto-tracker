import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography fontSize={42} fontWeight={700}>
        Crypto Manager
      </Typography>
    </Box>
  );
};

export default Home;
