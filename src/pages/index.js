import {useState} from 'react';

import StyledAddButton from '../components/StyledAddButton/styled';
import StyledInputField from '../components/StyledInputField/styled';
import StyledProjectName from '../components/StyledProjectName/styled';
import useStore from '../hooks/useStore';

export default function IndexPage() {
	const [inputValue, setInputValue] = useState('');
	const addProject = useStore(state => state.addProject);
	const projects = useStore(state => state.projects);

	return (
		<>
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
