import { Fragment } from "react";

import classes from "./TodoItem.module.css";

function TodoItem(props) {

	const removeOneItem = () => {
		props.removeOne(props.id);
	};

	return (
		<Fragment>
			<li className={classes.item} onClick={removeOneItem}>{props.text}</li>
		</Fragment>
	);
}

export default TodoItem;
