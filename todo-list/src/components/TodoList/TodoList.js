import TodoItem from "../TodoItem/TodoItem";
import TodoInput from "../TodoInput/TodoInput";
import CounterBig from "../UI/CounterBig";

import classes from "./TodoList.module.css";

function TodoList(props) {
	return (
		<main>
			<div className={classes.box}>
				<CounterBig amount={props.amount} />
				<ul className={classes.list}>
					{props.data.map((item) => {
						return (
							<TodoItem
								key={item.id}
								id={item.id}
								text={item.text}
								removeOne={props.removeOne}
							/>
						);
					})}
				</ul>
				<TodoInput addTodo={props.addTodo} />
			</div>
		</main>
	);
}

export default TodoList;
