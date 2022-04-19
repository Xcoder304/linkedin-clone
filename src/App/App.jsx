import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, loginOut } from "./Redux/features/userSlice";
import { selectLoading } from "./Redux/features/Loading";
import Login from "./components/Login";
import { auth } from "./backend/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import "./style/app.css";

const App = () => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(login(authUser));
      } else {
        dispatch(loginOut());
      }
    });

    return () => unsub();
  }, [auth]);

  console.log(loading);

  return (
    <Router>
      <div className="app">{user ? <AllRoutes /> : <Login />}</div>
    </Router>
  );
};

export default App;
