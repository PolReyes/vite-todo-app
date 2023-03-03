import {All} from '../models/all.model';
/**
 * 
 * @param {Todo} all 
 */
export const createAllHTML = (all) =>{
    if(!all) throw new Error ('A TODO object is required');
    const {done, description, id} = all;

    const html = `
                    <div class="view">
                        <input class="toggle" type="checkbox" ${done?'checked':''}>
                        <label>${description}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template">
                `;
    const liElement = document.createElement('li');
    liElement.innerHTML= html;
    liElement.setAttribute('data-id', id);

    if(all.done)
    liElement.classList.add('completed');

    return liElement;

}