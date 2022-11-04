import classes from "./header.module.css";

const Header = (props) => {

	const showForm = () => {
		props.toggleForm();
	}

	const clearNotes = () => {
		props.toggleClear();
	}

	return (
		<div className={classes.header}>
			<h1>Noter</h1>
			<div>
				<button className={classes.add} onClick={showForm}>New Note</button>
				<button className={classes.clear} onClick={clearNotes}>Clear</button>
			</div>
		</div>
	);
};

export default Header;
