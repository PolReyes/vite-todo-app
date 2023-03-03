import html from './app.html?raw';
import allStore from '../store/all.store';
import { renderAll } from './use-cases';

const ElementIds = {
    AllList: '.todo-list',
    NewAllInput: '#new-todo-input',
}
/**
 * 
 * @param {String} elementId
 */
export const App = (elementId) =>{

    const displayAll = () => {
        const all = allStore.getAll( allStore.getCurrentFilter());
        renderAll(ElementIds.AllList, all);
    }
    //Cuando la función App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayAll();
    })();

    //referencias HTML
    const newDescriptionInput = document.querySelector(ElementIds.NewAllInput);
    //Listeners
    newDescriptionInput.addEventListener('keyup', (event)=>{
        if(event.keyCode !== 13) return;
        if(event.target.value.trim().length===0) return;

        allStore.addAll(event.target.value);
        displayAll();
        event.target.value= '';
    });
}
