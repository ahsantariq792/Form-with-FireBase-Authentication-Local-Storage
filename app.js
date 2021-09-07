let signup = () => {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)

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
    var password = document.getElementById('loginpassword').value

    
    localStorage.setItem(email)
    localStorage.setItem(password)


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
