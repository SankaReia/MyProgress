import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import Progress from "./Components/Progress";
import useAuth from "./hooks/useAuth";
import useAuthState from "./hooks/useAuthState";
import Loader from "./Components/UI/Loader";
import NavBar from "./Components/UI/NavBar";

function App() {
  const { isAuth } = useAuth();
  const { isLoading } = useAuthState();

  if (isLoading) {
    return (
      <div style={{ marginTop: "20%" }}>
        <Loader />
      </div>
    );
  }

  if (isAuth) {
    return (
      <Routes>
        <Route path={"/"} element={<NavBar isAuth={true} />}>
          <Route path="progress" element={<Progress />} />
          <Route path="*" element={<Navigate to="progress" replace />} />
        </Route>
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path={"/"} element={<NavBar isAuth={false} />}>
        <Route path={"signIn"} element={<SignIn />} />
        <Route path={"signUp"} element={<SignUp />} />
        <Route path={"*"} element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
