import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import AddUser from "./Components/AddUser";
import EditForm from "./Components/EditForm";
import User from "./Components/User";
import { getListUser } from "./redux/user/userAction";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListUser());
  }, []);

  return (
    <div className="App">
      <AddUser />
      <EditForm />
      <User /> 
    </div>
  );
};

export default App;
