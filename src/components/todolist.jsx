import React, { Component } from "react";
import InputFields from "./comon/inputFeiild";
import Pagination from "./comon/pagination";
import "../styles/todo.css";
import { Parginate } from "../utils/parginate";
class TodoList extends Component {
  state = {
    list: [],
    inputtedTodo: "",
    currentPage: 1,
    pageSize: 3,
  };

  handleAddTodo = (e) => {
    e.preventDefault();
    const { inputtedTodo } = this.state;
    const list = [...this.state.list];
    const newId = list.length ? list[list.length - 1].id + 1 : 1;
    const updatedlist = [
      ...list,
      { id: newId, item: inputtedTodo, checked: false },
    ];

    this.setState({ list: updatedlist, inputtedTodo: "" });
  };

  handleInputChange = (e) => {
    this.setState({ inputtedTodo: e.currentTarget.value });
  };

  handleDelete = (id) => {
    const list = [...this.state.list];
    let filitredList = list.filter((m) => m.id !== id);
    this.setState({ list: filitredList });
  };

  handlecheck = (content) => {
    const list = [...this.state.list];
    const index = list.indexOf(content);
    list[index].checked = !list[index].checked;
    this.setState({ list });
  };

  handlestrike = (content) => {
    return content.checked ? "strikethrough" : " ";
  };

  handleClearAll = () => {
    const list = [...this.state.list];
    const filitred = list.filter((content) => !content.checked);
    this.setState({ list: filitred });
  };
  handleTickAll = () => {
    const list = [...this.state.list];
    const allList = list.every((todo) => todo.checked);
    const checkedallList = !allList;
    list.forEach((todo) => (todo.checked = checkedallList));
    this.setState({ list });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { list, inputtedTodo, currentPage, pageSize } = this.state;
    const newlist = Parginate(list, currentPage, pageSize);

    return (
      <div className="todo-body">
        <div className="todo-container">
          <header>
            <h1>
              TO<span>DO</span>
            </h1>
          </header>
          <div className="todo-selector">
            <p>Personal</p>
          </div>
          <div className="list-section">
            <form onSubmit={this.handleAddTodo}>
              <InputFields
                onchange={this.handleInputChange}
                type="text"
                required={true}
                name="inputTodo"
                value={inputtedTodo}
              />
              <button>ADD</button>
            </form>

            <div className="todo-list-cotent">
              {list.length === 0 ? (
                <h1 className="error-h1">There Are No Todos</h1>
              ) : (
                newlist.map((content) => {
                  return (
                    <ol key={content.id}>
                      <li className={this.handlestrike(content)}>
                        {" "}
                        <input
                          onChange={() => this.handlecheck(content)}
                          type="checkbox"
                          name="checbox"
                          value={content.id}
                        />
                        {content.item}
                        <i
                          onClick={() => this.handleDelete(content.id)}
                          class="fa-regular fa-trash-can"
                        ></i>
                      </li>
                    </ol>
                  );
                })
              )}
              <div className="todo-btn-container">
                <button onClick={this.handleTickAll}>
                  {" "}
                  <i class="fa-solid fa-check"></i> Tick All
                </button>
                <button onClick={this.handleClearAll}>
                  {" "}
                  <i class="fa-solid fa-arrow-right-from-bracket"></i> Clear All
                </button>
              </div>
            </div>
          </div>
          <div className="pagination-todo">
            <Pagination
              listCount={list.length}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              pageSize={pageSize}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
