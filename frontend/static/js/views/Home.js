import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        
        this.setTitle('Home');
    }

    async getHtml() {
        return `
            <h1>Welcome back, Aweda</h1>
            <p>
                I love the fact that you volunteer to learning new things with fund!
            </p>
            <p>
                Please checkout my new posts <a href="/posts" data-link>here</a>.
            </p>
        `;
    }
}