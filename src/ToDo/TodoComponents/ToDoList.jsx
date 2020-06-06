import React from "react";
import style from "./ToDoList.module.css";

const ToDoList = (props) => {
  // console.log(props);
  // let itemClass = "" ? "" : "";

  return (
    // <ul>
    <>
      {props.items.map((e) => {
        return (
          <div className={style["list-item"]} key={e.id}>
            <div className={style["list-label"]}>
              <input type="checkbox" className={style["list-checkbox"]} onChange={() => props.completeHandle(e.id)} />
              <h2 className={style["list-text"]} style={{ margin: 0, padding: 0 }}>
                {e.text}
              </h2>
            </div>
            <button type="button" className={style["list-delete"]}>
              Edit
            </button>
            <button type="button" className={style["list-delete2"]} onClick={() => props.deleteHandle(e.id)}>
              Delete
            </button>
          </div>
        );
      })}
      {/* // </ul> */}
    </>
  );
};
export default ToDoList;
