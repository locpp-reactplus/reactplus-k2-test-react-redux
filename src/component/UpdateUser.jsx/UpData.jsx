import "./Update.scss";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { UpDate } from "../../redux/action";
// import { useState } from "react";
const UpData = ({ update, setOpenUpdate }) => {
  const [dataNew, setDataNew] = useState({ id: "", fullName: "", name: "" });
  const [fullNameNew, setFullNameNew] = useState("");
  const [nameNew, setNameNew] = useState("");
  const [idNew, setIdNew] = useState("");
  console.log(dataNew);

  useEffect(() => {
    if (update) {
      setFullNameNew(update.fullName);
      setNameNew(update.name);
      setIdNew(update.id);
    }
  }, [update]);
  useEffect(() => {
    setDataNew({ id: idNew, name: nameNew, fullName: fullNameNew });
  }, [nameNew, fullNameNew]);

  const Name = (e) => {
    setNameNew(e.target.value);
  };
  const FullName = (e) => {
    setFullNameNew(e.target.value);
  };

  const dispatch = useDispatch();
  const UpDateData = () => {
    dispatch(UpDate(dataNew));
    setFullNameNew("");
    setNameNew("");
    setIdNew("");
    setOpenUpdate(false);
  };

  const Remove = () => {
    setOpenUpdate(false);
  };

  return (
    <div className="addUser flex">
      <div className="header_add">Sửa User</div>
      <div>
        UserName
        <input type="text" value={nameNew} onChange={Name} />
      </div>
      <div>
        Full Name
        <input type="text" value={fullNameNew} onChange={FullName} />
      </div>
      <div className="add">
        <button onClick={UpDateData}>Update</button>
        <button onClick={Remove}>Calcer</button>
      </div>
    </div>
  );
};

export default UpData;
