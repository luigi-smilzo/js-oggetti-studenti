$(document).ready(function() {
    var student = {
        firstName: 'Luigi',
        lastName: 'Smilzo',
        age: 30
    }

    for (var key in student) {
        console.log('Chiave:', key, '/', 'Valore:', student[key]);
    }
}); // <-- End ready
