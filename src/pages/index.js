import StyledProjectName from '../components/StyledProjectName/styled';
import useStore from '../hooks/useStore';

export default function IndexPage() {
	const projects = useStore(state => state.projects);

	return (
		<ul>
			{projects.map(project => {
				return <StyledProjectName key={project.id}>{project.name}</StyledProjectName>;
			})}
		</ul>
	);
}
