import { $ } from '../jquery-module.js';

/**
 * Load content into a specific element
 * @param {Object} params - The parameters object
 * @param {string} params.content - The id of the element to load content into
 * @param {string} params.path - The path to the content to load
 */
const loadContent = ({ content, path } = params) => {
    $(`#${content}`).load(path);
}
export {
    loadContent
}