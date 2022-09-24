import {useRouter} from 'next/router';
import {useState} from 'react';

import Layout from '../../components/Layout';
import StyledButton from '../../components/StyledButton/styled';
import StyledInputField from '../../components/StyledInputField/styled';
import useStore from '../../hooks/useStore';

export default function EditProjectPage() {
	const projects = useStore(state => state.projects);
	const router = useRouter();
	const {id} = router.query;
	const entry = projects.find(entry => entry.id === String(id));
	const notes = useStore(state => state.notes);
	const addNote = useStore(state => state.addNote);
	const [note, setNote] = useState('');

	if (!entry) {
		return;
	}

	return (
		<Layout>
			<h1>{entry.name}</h1>
			<h2>Notizen</h2>
			<form
				onSubmit={event => {
					event.preventDefault();
					addNote(note);
				}}
			>
				<StyledInputField
					type="text"
					value={note}
					onChange={event => {
						setNote(event.target.value);
					}}
				/>
				<StyledButton type="submit">add</StyledButton>
				{notes.map(note => {
					return <p key={note.id}>{note.name}</p>;
				})}
			</form>{' '}
		</Layout>
	);
}
