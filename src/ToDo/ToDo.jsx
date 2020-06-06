import React, { Component } from "react";
import style from "./ToDo.module.css";
import ToDoList from "./TodoComponents/ToDoList";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      work: [],
    };
    this.submithandler = this.submithandler.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });

    // console.log(e.target.value);
  };
  submithandler(event) {
    event.preventDefault();
    if (this.state.text) {
      var newItem = {
        id: Date.now(),
        text: this.state.text,
        done: false,
      };

      this.setState((prevState) => ({
        work: prevState.work.concat(newItem),
        text: "",
      }));
    }

    // console.log("hello", this.state.text);
  }

  markItemCompleted = (itemId) => {
    var updatedItems = this.state.work.map((item) => {
      if (itemId === item.id) item.done = !item.done;
      return item;
    });
    console.log(updatedItems, itemId);
    this.setState({
      work: [].concat(updatedItems),
    });
  };
  handleDeleteItem = (itemId) => {
    console.log("itemID", itemId);
    var updatedItems = this.state.work.filter((item) => {
      return item.id !== itemId;
    });

    this.setState({
      work: [].concat(updatedItems),
    });
  };

  render() {
    return (
      <div className={style["todo-container"]}>
        <div className={style["todo-space"]}></div>
        <div className={style["todo-input-section"]}>
          <input className={style["todo-input"]} type="text" placeholder="Enter the Work" value={this.state.text} onChange={this.handleChange} />
          <button className={style["todo-button"]} type="submit" onClick={this.submithandler}>
            Add
          </button>
        </div>
        <div className={style["todo-work"]}>
          <h2 style={{ color: "white" }}>Your Work</h2>
          <ToDoList items={this.state.work} deleteHandle={this.handleDeleteItem} completeHandle={this.markItemCompleted} />
        </div>
      </div>
    );
  }
}

export default ToDo;
