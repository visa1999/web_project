function encryptData(data) {
    return btoa(data);  // Simple base64 encoding for simulation
}

function decryptData(data) {
    return atob(data);  // Simple base64 decoding for simulation
}

function comparePasswords(inputPassword, storedPassword) {
    return encryptData(inputPassword) === storedPassword;
}
