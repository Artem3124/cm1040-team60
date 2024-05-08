import {$} from '../jquery-module.js';

const loadContent = ({content, path} = params) => {
    $(`#${content}`).load(path);
}

export { 
    loadContent
}
