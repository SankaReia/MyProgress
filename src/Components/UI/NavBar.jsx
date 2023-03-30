import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import { auth } from "../../config";
import { signOut } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function NavBar({ isAuth }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email } = useAuth();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                MyProgress
              </Typography>
              {isAuth ? (
                <Button color="inherit" onClick={signOutHandler}>
                  {email} <LogoutOutlinedIcon sx={{ ml: 2 }} />
                </Button>
              ) : (
                <Button color="inherit" onClick={() => navigate("signIn")}>
                  LOGIN
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
