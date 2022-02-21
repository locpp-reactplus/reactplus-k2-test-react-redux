import React from "react";
import AddUser from "./component/AddUser.jsx/AddUser";
import ListUser from "./component/ListUser.jsx/ListUser";
import { useState } from "react";
import UpData from "./component/UpdateUser.jsx/UpData";
import DeleteDate from "./component/Delete/DleteData";
const App = () => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [update, setUpdate] = useState();
  const [cancel, setCancel] = useState("");
  const [openCancel, setOpenCancel] = useState(false);

  const Openadd = () => {
    setOpen(!open);
  };
  const UpdateUser = (item) => {
    setOpenUpdate(true);
    setUpdate(item);
  };
  const OpenCancel = () => {
    setOpenCancel(!openCancel);
  };

  return (
    <div className="App">
      {open && <AddUser Openadd={Openadd} />}

      <div>
        <button className="ADD_app" onClick={Openadd}>
          ADD
        </button>
      </div>
      <div className="Update_List">
        <ListUser
          UpdateUser={UpdateUser}
          setCancel={setCancel}
          OpenCancel={OpenCancel}
        />
        {openUpdate && <UpData update={update} setOpenUpdate={setOpenUpdate} />}
      </div>
      {openCancel && <DeleteDate cancel={cancel} OpenCancel={OpenCancel} />}
    </div>
  );
};

export default App;
