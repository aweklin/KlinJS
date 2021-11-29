import RequestHandler, { TYPE_POST } from '../misc/fetchapi.js';
import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);

        this.setTitle('Contact us');

        
    }

    async submitContact(e) {
        e.preventDefault();
        
        // get form elements
        const form = document.getElementById('contactForm');
        const inputName = form.elements['name'];
        const inputEmail = form.elements['email'];
        const inputGender = form.elements['gender'];
        const inputBirthDate = form.elements['birthDate'];
        const inputInterest = form.elements['interest'];

        // get input values
        const name = inputName.value;
        const gender = inputGender.value;
        const email = inputEmail.value;
        const birthDate = inputBirthDate.value;
        const interest = inputInterest.value;

        // validate 
        if (!hasValue(name)) {
            return showErrorAlert('#alertDiv', 'Name is required.');
        }  
        if (!hasValue(email)) {
            return showErrorAlert('#alertDiv', 'Email is required.');
        } 
        if (!isValidEmail(email)) {
            return showErrorAlert('#alertDiv', 'Invalid email.');
        } 
        if (!hasValue(gender)) {
            return showErrorAlert('#alertDiv', 'Gender is required.');
        }
        if (!['M', 'F'].includes(gender)) {
            return showErrorAlert('#alertDiv', 'Gender must be male or female.');
        } 
        if (!hasValue(birthDate)) {
            return showErrorAlert('#alertDiv', 'Birth date is required.');
        } 
        if (!hasValue(interest)) {
            return showErrorAlert('#alertDiv', 'Interest is required.');
        }

        try {
            showInformationAlert('#alertDiv', "Processing your request...");
            new RequestHandler(
                '/contact', 
                TYPE_POST,
                {
                    name: name,
                    gender: gender,
                    interest: interest,
                    email: email,
                    birthDate: birthDate
                }
            )
            .request()
            .then(response => showSuccessAlert('#alertDiv', response.message))
            .catch(error => showErrorAlert('#alertDiv', error));
        } catch (error) {
            showErrorAlert('#alertDiv', error);
        }
    }

    async hookEvents() {
        document.getElementById('contactForm').addEventListener('submit', async (e) => {
            await this.submitContact(e);
        });
    }

    async getHtml() {
        setTimeout(async () => {
            this.hookEvents();
        }, 1);

        return `
            <h1>Contact us</h1>
            <form id="contactForm" method="post">
                <div>
                    <label>Name</label>
                    <input type="text" id="name" name="name">
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" id="email" name="email">
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
                <div id="alertDiv"></div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>            
        `;
    }
}