import {useState} from 'react';

import Layout from '../components/Layout';
import StyledButton from '../components/StyledButton/styled';
import StyledInputField from '../components/StyledInputField/styled';
import useStore from '../hooks/useStore';

export default function NewProjectPage() {
	const [inputValue, setInputValue] = useState('');
	const addProject = useStore(state => state.addProject);

	return (
		<Layout>
			<form
				onSubmit={event => {
					event.preventDefault();
					addProject(inputValue);
				}}
			>
				{' '}
				<label htmlFor="projectname">
					{' '}
					Add Project:
					<StyledInputField
						type="text"
						id="projectname"
						placeholder="What's the name of your new project?"
						value={inputValue}
						onChange={event => {
							setInputValue(event.target.value);
						}}
					/>
				</label>
				<StyledButton type="submit">add</StyledButton>
			</form>
		</Layout>
	);
}
