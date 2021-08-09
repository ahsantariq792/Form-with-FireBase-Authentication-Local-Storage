let signup = () => {
    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value
    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}


let signin = () => {
    var email = document.getElementById('loginemail').value
    var password = document.getElementById('loginpass').value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log("user signin")
            console.log(data)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}
