import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	projects: [{name: 'Pflanzenleiter', id: nanoid()}],
	addProject: name => {
		set(state => {
			return {
				projects: [...state.projects, {id: nanoid(), name}],
			};
		});
	},
}));

export default useStore;
