import {useRouter} from 'next/router';
import {useState} from 'react';

import Layout from '../../components/Layout';
import StyledButton from '../../components/StyledButton/styled';
import StyledInputField from '../../components/StyledInputField/styled';
import useStore from '../../hooks/useStore';

export default function EditProjectPage() {
	const [link, setLink] = useState('');
	const [shoppingItem, setShoppingItem] = useState('');
	const [note, setNote] = useState('');
	const projects = useStore(state => state.projects);
	const links = useStore(state => state.links);
	const addLink = useStore(state => state.addLink);
	const notes = useStore(state => state.notes);
	const addNote = useStore(state => state.addNote);
	const shoppingItems = useStore(state => state.shoppingItems);
	const addShoppingItem = useStore(state => state.addShoppingItem);
	const router = useRouter();
	const {id} = router.query;
	const entry = projects.find(entry => entry.id === Number(id));

	if (!entry) {
		return;
	}

	return (
		<Layout>
			<p>{entry.name}</p>
			<h2>Inspo Images</h2>
			<p>Hier kommt ein Image Upload hin!</p>
			<br />
			<h2>Linksammlung</h2>
			<form
				onSubmit={event => {
					event.preventDefault();
					addLink(link);
				}}
			>
				<StyledInputField
					type="text"
					value={link}
					onChange={event => {
						setLink(event.target.value);
					}}
				/>
				<StyledButton type="submit">add</StyledButton>
				{links.map(link => {
					return <p key={link.id}>{link.name}</p>;
				})}
			</form>

			<h2>Einkaufsliste</h2>
			<form
				onSubmit={event => {
					event.preventDefault();
					addShoppingItem(shoppingItem);
				}}
			>
				<StyledInputField
					type="text"
					value={shoppingItem}
					onChange={event => {
						setShoppingItem(event.target.value);
					}}
				/>
				<StyledButton type="submit">add</StyledButton>
				{shoppingItems.map(shoppingItem => {
					return <p key={shoppingItem.id}>{shoppingItem.name}</p>;
				})}
			</form>
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
			</form>
		</Layout>
	);
}
