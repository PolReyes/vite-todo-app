import {All } from '../models/all.model';
import { createAllHTML } from './create-all-html';

let element;
/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderAll = (elementId, all = []) => {
    if(!element)
    element = document.querySelector(elementId);

    if (!element) throw new Error(`Element ${elementId} not found`);

    element.innerHTML = '';

    all.forEach( all =>{
        element.append(createAllHTML(all));
    });
}