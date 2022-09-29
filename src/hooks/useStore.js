import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	projects: [
		{
			name: 'Pflanzenleiter',
			id: nanoid(),
			isDone: false,
			notes: ['Holz kaufen'],
			shoppingItems: [],
		},
		{
			name: 'Bilderrahmen',
			id: nanoid(),
			isDone: false,
			notes: ['Farbe kaufen'],
			shoppingItems: [],
		},
	],
	addProject: name => {
		set(state => {
			return {
				projects: [
					...state.projects,
					{
						id: nanoid(),
						name,
						isDone: false,
						notes: [],
						shoppingItems: [],
					},
				],
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

	addShoppingItem: (id, shoppingItem) => {
		set(state => ({
			projects: state.projects.map(project =>
				project.id === id
					? {...project, shoppingItems: [...project.shoppingItems, shoppingItem]}
					: project
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
