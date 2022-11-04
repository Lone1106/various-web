import classes from "./note-item.module.css";

const NoteItem = (props) => {

	const deleteNote = () => {
		props.deleteOne(props.id);
	};

	return (
		<div className={classes.item}>
			<h2>{props.title}</h2>
			<p>{props.content}</p>
			<button onClick={deleteNote}>Delete</button>
		</div>
	);
};

export default NoteItem;
