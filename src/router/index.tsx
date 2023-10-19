import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(10),
  },
}));

const Router = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Box className={classes.container}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default Router;
