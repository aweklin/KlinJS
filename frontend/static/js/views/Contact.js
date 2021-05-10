import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);

        this.setTitle('Contact us');
    }

    async getHtml() {
        return `
            <h1>Contact us</h1>
            <form id="contactForm" method="post" action="/contact/submit">
                <div>
                    <label>Name</label>
                    <input type="text" id="name" name="name">
                </div>
                <div>
                    <label>Gender</label>
                    <select id="gender" name="gender">
                        <option value="">[Select an option]</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                </div>
                <div>
                    <label>Birth Date</label>
                    <input type="date" id="birthDate" name="birthDate">
                </div>
                <div>
                    <label>Interest</label>
                    <input type="radio" id="interestProgramming" name="interest"> Programming
                    <input type="radio" id="interestDancing" name="interest"> Dancing
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        `;
    }
}