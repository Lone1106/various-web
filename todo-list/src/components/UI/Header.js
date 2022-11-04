import classes from "./Header.module.css";

function Header(props) {
	return (
		<header className={classes.header}>
			<h1>My ToDo Mayham</h1>
			<div>
				<button onClick={props.save} className={classes.clear}>Save</button>
				<button onClick={props.clearData} className={classes.clear}>
					Clear All
				</button>
			</div>
		</header>
	);
}

export default Header;
