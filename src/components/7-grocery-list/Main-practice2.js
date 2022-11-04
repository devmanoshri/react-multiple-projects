import React, { useState, useEffect } from "react";
import "../../style/7-grocery-list-style.css";
import Alert from "./Alert2-practice";
import List from "./List2";

function MainPractice2() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "hi there",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please enter name!");
      //console.log("no field block");
    } else {
      if (isEdit) {
        // console.log("edit block");
        list[editId].title = name;
        setName("");
        setIsEdit(false);
        setEditID(null);
        showAlert(true, "success", "Value Updated");
      } else {
        const newItem = { id: new Date().getTime().toString(), title: name };
        setList([...list, newItem]);
        // console.log("new add block");
        setName("");
        showAlert(true, "success", "New Item added!");
      }
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearAll = () => {
    setList([]);
    showAlert(true, "danger", "Empty List");
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item Removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const objIndex = list.findIndex((obj) => obj.id === id);
    console.log("before update - ", list[objIndex]);
    setName(list[objIndex].title);
    setIsEdit(true);
    setEditID(objIndex);
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handelSubmit}>
        <h3> Grocery List</h3>
        {alert.show && <Alert {...alert} />}
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. Egg"
            name="item"
            id="item"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button type="button" className="clear-btn" onClick={clearAll}>
            Clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default MainPractice2;
