function showErrorAlert(input, message) {
    showMessage(input, message, 'danger');
}

function showInformationAlert(input, message) {
    showMessage(input, message, 'info');
}

function showSuccessAlert(input, message) {
    showMessage(input, message, 'success');
}

function showWarningAlert(input, message) {
    showMessage(input, message, 'warning');
}

function showMessage(input, message, type) {
    document.querySelector(input).innerText = message;
    document.querySelector(input).className = `alert ${type}`;
}

function isValidEmail(email) {
    if (!email) 
        return false;
    
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

function hasValue(data) {
    if (!data)
        return false;
    
    return data.trim().length > 0;
}