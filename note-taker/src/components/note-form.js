import { useRef } from "react";
import { v4 as uuid } from "uuid";

import classes from "./note-form.module.css";

const NoteForm = (props) => {
	const title = useRef("");
	const content = useRef("");

	const add = () => {
		const newNote = {
			id: uuid(),
			title: title.current.value,
			content: content.current.value,
		};

		props.addNote(newNote);
		props.toggleForm();
	};

	const hideForm = () => {
		props.toggleForm();
	};

	return (
		<div className={classes.form}>
			<label htmlFor="title">Title</label>
			<input
				ref={title}
				id="title"
				type="text"
				placeholder="Insert your title..."
			/>

			<label htmlFor="content">Content</label>
			<textarea
				ref={content}
				id="content"
				cols="30"
				rows="3"
				placeholder="Insert your text..."
			/>

			<div className={classes.buttons}>
				<button className={classes.add} onClick={add}>
					Add
				</button>
				<button className={classes.close} onClick={hideForm}>Close</button>
			</div>
		</div>
	);
};

export default NoteForm;
