import Link from 'next/link';

import StyledCheckbox from '../components/Checkbox/styled';
import IconButton from '../components/IconButton/styled';
import Icon from '../components/Icons.js';
import Layout from '../components/Layout';
import StyledHeadline from '../components/StyledHeadline/styled';
import StyledHeadlineContainer from '../components/StyledHeadlineContainer/styled';
import StyledIconContainer from '../components/StyledIconContainer/styled';
import StyledProjectList from '../components/StyledProjectList/styled';
import StyledProjectName from '../components/StyledProjectName/styled';
import useStore from '../hooks/useStore';

export default function IndexPage() {
	const projects = useStore(state => state.projects);
	const checkProject = useStore(state => state.checkProject);
	const sortedProjects = projects.sort((a, b) => Number(a.isDone) - Number(b.isDone));
	const deleteProject = useStore(state => state.deleteProject);

	return (
		<Layout>
			<StyledProjectList>
				<StyledHeadlineContainer>
					<StyledHeadline>Meine Projekte</StyledHeadline>
				</StyledHeadlineContainer>

				{sortedProjects.map(project => {
					return (
						<StyledProjectName key={project.id}>
							{project.name}
							<StyledIconContainer>
								<IconButton
									onClick={() => {
										deleteProject(project.id);
									}}
								>
									<Icon variant="delete" />
								</IconButton>
								<Link href={`/edit/${project.id}`}>
									<a>
										<Icon variant="edit">edit</Icon>
									</a>
								</Link>
								<StyledCheckbox
									checked={project.checked}
									type="checkbox"
									onChange={() => {
										checkProject(project.id);
									}}
								/>
							</StyledIconContainer>
						</StyledProjectName>
					);
				})}
			</StyledProjectList>
		</Layout>
	);
}
