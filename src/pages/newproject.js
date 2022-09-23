import {useState} from 'react';

import Layout from '../components/Layout';
import StyledButton from '../components/StyledButton/styled';
import StyledForm from '../components/StyledForm/styled';
import StyledHeadline from '../components/StyledHeadline/styled';
import StyledHeadlineContainer from '../components/StyledHeadlineContainer/styled';
import StyledInputField from '../components/StyledInputField/styled';
import StyledNewProjectContainer from '../components/StyledNewProjectContainer/styled';
import useStore from '../hooks/useStore';

export default function NewProjectPage() {
	const [inputValue, setInputValue] = useState('');
	const addProject = useStore(state => state.addProject);

	return (
		<Layout>
			<StyledNewProjectContainer>
				<StyledHeadlineContainer>
					<StyledHeadline>Dein neues Projekt</StyledHeadline>
				</StyledHeadlineContainer>
				<StyledForm
					onSubmit={event => {
						event.preventDefault();
						addProject(inputValue);
					}}
				>
					{' '}
					<label htmlFor="projectname">
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
				</StyledForm>
			</StyledNewProjectContainer>
		</Layout>
	);
}
