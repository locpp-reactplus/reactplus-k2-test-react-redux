import "./delete.scss";
import { useDispatch } from "react-redux";
import { Delete } from "../../redux/action";
const DeleteDate = ({ cancel, OpenCancel }) => {
  const dispatch = useDispatch();
  const OutDate = () => {
    dispatch(Delete(cancel));
    OpenCancel();
  };
  return (
    <div className="DeleteData">
      <div className="list_delete">
        <div>Xóa User</div>
        <p>Bạn có muốn xóa không ?</p>
        <div>
          <button onClick={OutDate}>Delete</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDate;
