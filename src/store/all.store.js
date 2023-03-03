import { All } from '../all/models/all.model';

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    all: [
        new All('Piedra del alma'),
        new All('Piedra del infinito'),
        new All('Piedra del tiempo'),
        new All('Piedra del poder'),
        new All('Piedra de realidad')
    ],
    filter: Filters.All,
}

const initStore = () =>{
    console.log(state)
    console.log('InitStore');
}

const loadStore = () => {
    throw new Error('Not implemented');
}
const getAll = (filter = Filters.All) => {
    switch( filter) {
        case Filters.All:
            return [...state.all];
        case Filters.Completed:
            return state.all.filter( all => all.done);
        case Filters.Pending:
            return state.all.filter( all => !all.done);
        default:
            throw new Error(`Option ${filter} is not valid`);
    }
}
/**
 * 
 * @param {String} description 
 */
const addAll = (description) => {
    if(!description) throw new Error('Description is required');
    state.all.push( new All(description));
}
/**
 * 
 * @param {String} allId 
 */
const toggleAll = (allId ) => {
    state.all = state.all.map( all => {
        if ( all.id === allId){
            all.done = !all.done;
        }
        return all;
    })
}
/**
 * 
 * @param {String} allId 
 */
const deleteAll = (allId) => {
    state.all = state.all.filter( all => all.id !==allId);
}
const deleteCompleted = () => {
    state.all = state.all.filter( all => all.done);
}
/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}
const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    setFilter,
    toggleAll,
    getCurrentFilter,
    deleteAll,
    deleteCompleted,
    getAll,
    addAll,
}