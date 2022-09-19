import Link from 'next/link';

import StyledCheckbox from '../components/Checkbox/styled';
import Layout from '../components/Layout';
import StyledButton from '../components/StyledButton/styled';
import StyledProjectContainer from '../components/StyledProjectContainer/styled';
import StyledProjectName from '../components/StyledProjectName/styled';
import useStore from '../hooks/useStore';

export default function IndexPage() {
	const projects = useStore(state => state.projects);
	const checkProject = useStore(state => state.checkProject);
	const sortedProjects = projects.sort((a, b) => Number(a.isDone) - Number(b.isDone));
	const deleteProject = useStore(state => state.deleteProject);

	return (
		<Layout>
			<StyledProjectContainer>
				{sortedProjects.map(project => {
					return (
						<StyledProjectName key={project.id}>
							{project.name}{' '}
							<StyledCheckbox
								checked={project.checked}
								type="checkbox"
								onChange={() => {
									checkProject(project.id);
								}}
							/>
							<StyledButton
								onClick={() => {
									deleteProject(project.id);
								}}
							>
								delete
							</StyledButton>
							<Link href="/edit">
								<a>
									<StyledButton>edit</StyledButton>
								</a>
							</Link>
						</StyledProjectName>
					);
				})}
			</StyledProjectContainer>
		</Layout>
	);
}
