import NoteItem from "./note-item.js";

import classes from "./notes.module.css";

const Notes = (props) => {
	const notesArray = props.notes;

	return (
		<div className={classes.field}>
			{notesArray.map((note) => {
				return (
					<NoteItem key={note.id} id={note.id} title={note.title} content={note.content}
					deleteOne={props.deleteNote} />
				);
			})}
		</div>
	);
};

export default Notes;
