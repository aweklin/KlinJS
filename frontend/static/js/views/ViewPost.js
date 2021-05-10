import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
console.log(params.id);
        this.setTitle('Viewing Post');
    }

    async getHtml() {
        return `
            <h1>Viewing Post</h1>
            <p>This is the content of selected post.</p>
        `;
    }
}