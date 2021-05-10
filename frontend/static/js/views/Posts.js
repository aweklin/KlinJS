import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);

        this.setTitle('Posts');
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>Below are my recent posts</p>
            <p>
                <a href="/posts/1">Consume Paystack API with ease</a>
            </p>
            <p>
                <a href="/posts/2">Klin PHP - A simple yet robust framework for web apps and API</a>
            </p>
            <p>
                <a href="/posts/3">Creating SPA with vanila JS</a>
            </p>
            <p>
                <a href="/posts/4">Advanced CSS</a>
            </p>
        `;
    }
}