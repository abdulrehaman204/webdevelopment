function checkPasswordStrength(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    if (!password.match(/[0-9]/)) {
        return "Password must contain at least one number";
    }

    if (!password.match(/[A-Z]/)) {
        return "Password must contain at least one uppercase letter";
    }
    
    return "Password is strong";
}



console.log(checkPasswordStrength("abc"));        
console.log(checkPasswordStrength("abcdefgh"));  
console.log(checkPasswordStrength("Abcdef1"));  
