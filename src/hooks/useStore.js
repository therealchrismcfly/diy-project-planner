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
	links: [],
	addLink: name => {
		set(state => {
			return {
				links: [...state.links, {id: nanoid(), name}],
			};
		});
	},

	notes: [],
	addNote: name => {
		set(state => {
			return {
				notes: [...state.notes, {id: nanoid(), name}],
			};
		});
	},
	shoppingItems: [],
	addShoppingItem: name => {
		set(state => {
			return {
				shoppingItems: [...state.shoppingItems, {id: nanoid(), name}],
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
	deleteProject: id => {
		set(state => {
			return {
				projects: state.projects.filter(project => id !== project.id),
			};
		});
	},
}));

export default useStore;
