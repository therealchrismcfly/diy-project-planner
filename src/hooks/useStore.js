import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	projects: [
		{name: 'Pflanzenleiter', id: nanoid(), isDone: false, notes: ['Holz kaufen']},
		{name: 'Bilderrahmen', id: nanoid(), isDone: false, notes: ['Farbe kaufen']},
	],
	addProject: name => {
		set(state => {
			return {
				projects: [...state.projects, {id: nanoid(), name, isDone: false, notes: []}],
			};
		});
	},

	addNote: (id, note) => {
		set(state => ({
			projects: state.projects.map(project =>
				project.id === id ? {...project, notes: [...project.notes, note]} : project
			),
		}));
	},

	checkProject: id => {
		set(state => ({
			projects: state.projects.map(project =>
				project.id === id ? {...project, isDone: !project.isDone} : project
			),
		}));
	},

	deleteProject: id => {
		set(state => {
			return {
				projects: state.projects.filter(project => id !== project.id),
			};
		});
	},
}));

export default useStore;
