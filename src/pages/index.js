import StyledCheckbox from '../components/Checkbox/styled';
import Layout from '../components/Layout';
import StyledProjectContainer from '../components/StyledProjectContainer/styled';
import StyledProjectName from '../components/StyledProjectName/styled';
import useStore from '../hooks/useStore';

export default function IndexPage() {
	const projects = useStore(state => state.projects);
	const checkProject = useStore(state => state.checkProject);
	const sortedProjects = projects.sort((a, b) => Number(a.isDone) - Number(b.isDone));

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
						</StyledProjectName>
					);
				})}
			</StyledProjectContainer>
		</Layout>
	);
}
