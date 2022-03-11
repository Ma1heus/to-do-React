import React, { Component } from "react";
import "./styles.css";

export default class To_Do extends Component {
  state = {
    tarefa: "",
    lista: []
  };

  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    });
  };

  add = (e) => {
    let { lista, tarefa } = this.state;
    if (tarefa != 0 || null) {
      this.setState({
        lista: lista.concat({
          tarefa: tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
    e.preventDefault();
  };

  remove = (id) => {
    let { lista } = this.state;
    this.setState({
      lista: lista.filter((item) => item.id != id)
    });
  };

  render() {
    let { handleChange, add, remove } = this;
    let { tarefa, lista } = this.state;
    return (
      <div class="container">
        <h1>To-Do List</h1>
        <div class="container-input">
          <input value={tarefa} onChange={handleChange} />
          <button onClick={add}>ADD</button>
        </div>
        <div>
          {lista.map((item) => (
            <ul>
              <li>{item.tarefa}</li>
              <button onClick={() => remove(item.id)}>X</button>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
