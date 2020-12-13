import { Component } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import s from "./Form.module.css";

const initialState = {
  name: "",
  number: "",
};
class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = initialState;

  handleOnChange = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState(initialState);
  };

  render() {
    return (
      <form className={s.container} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            required
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
          ></input>
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            required
            type="tel"
            name="number"
            value={this.state.number}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="000-00-00"
            onChange={this.handleOnChange}
          ></input>
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
