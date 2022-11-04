import { useState } from "react";
import { v4 as uuid } from "uuid";

import classes from "./TodoInput.module.css";

function TodoInput(props) {
	const [inputText, setInputText] = useState("");

	const changeInputHandler = (event) => {
		setInputText(event.target.value);
	};

	const newItem = (e) => {
		e.preventDefault();

		const item = { id: uuid(), text: inputText };

		props.addTodo(item);
		setInputText("");
	};

	return (
		<div className={classes.box}>
			<p className={classes.counter}>{inputText.length} / 50</p>
			<input
				required
				className={classes.input}
				type="text"
				placeholder="Enter Todo"
				maxLength="50"
				onChange={changeInputHandler}
				value={inputText}
			/>
			<button onClick={newItem} className={classes.add}>
				Add
			</button>
		</div>
	);
}

export default TodoInput;
