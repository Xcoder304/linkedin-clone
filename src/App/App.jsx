import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes";
import "./style/app.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, loginOut } from "./Redux/features/userSlice";
import Login from "./components/Login";
import { auth } from "./backend/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const user = useSelector(selectUser);
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

  return (
    <Router>
      <div className="app">{user ? <AllRoutes /> : <Login />}</div>
    </Router>
  );
};

export default App;
