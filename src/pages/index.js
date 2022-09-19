import {nanoid} from 'nanoid';
import {useState} from 'react';

import StyledAddButton from '../components/StyledAddButton/styled';
import StyledInputField from '../components/StyledInputField/styled';
import StyledProjectName from '../components/StyledProjectName/styled';

export default function IndexPage() {
	const [inputValue, setInputValue] = useState('');
	const [projects, setProjects] = useState([{name: 'Pflanzentreppe', id: nanoid()}]);

	return (
		<>
			<form
				onSubmit={event => {
					event.preventDefault();
					setProjects([...projects, {name: inputValue, id: nanoid()}]);
					setInputValue('');
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
				<StyledAddButton type="submit">add</StyledAddButton>
			</form>
			<ul>
				{projects.map(project => {
					return <StyledProjectName key={project.id}>{project.name}</StyledProjectName>;
				})}
			</ul>
		</>
	);
}
