import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	projects: [{name: 'Pflanzenleiter', id: nanoid()}],
	addProject: name => {
		set(state => {
			return {
				projects: [...state.projects, {id: nanoid(), name, isDone: false}],
			};
		});
	},
	checkProject: id => {
		set(state => ({
			projects: state.projects.map(project =>
				project.id === id ? {...project, isDone: !project.isDone} : project
			),
		}));
	},
}));

export default useStore;
