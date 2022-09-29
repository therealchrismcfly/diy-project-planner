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
	const addNote = useStore(state => state.addNote);
	const [note, setNote] = useState('');
	const addShoppingItem = useStore(state => state.addShoppingItem);
	const [shoppingItems, setShoppingItems] = useState('');

	if (!entry) {
		return;
	}

	return (
		<Layout>
			<h1>{entry.name}</h1>
			<h2>Einkaufsliste</h2>
			<form
				onSubmit={event => {
					event.preventDefault();
					addShoppingItem(entry.id, shoppingItems);
				}}
			>
				<StyledInputField
					type="text"
					value={shoppingItems}
					onChange={event => {
						setShoppingItems(event.target.value);
					}}
				/>
				<StyledButton type="submit">add</StyledButton>
				{entry.shoppingItems.map((shoppingItem, id) => {
					return <p key={id}>{shoppingItem}</p>;
				})}
			</form>
			<h2>Notizen</h2>
			<form
				onSubmit={event => {
					event.preventDefault();
					addNote(entry.id, note);
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
				{entry.notes.map((note, id) => {
					return <p key={id}>{note}</p>;
				})}
			</form>
		</Layout>
	);
}
