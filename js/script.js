const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

function register() {
    var username = document.getElementById('usernameSignup').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('passwordSignup').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('Xác nhận mật khẩu không khớp!');
        return;
    }
    alert('Đăng ký thành công!');

}

function signIn() {
    var username = document.getElementById('usernameLogin').value;
    var password = document.getElementById('passwordLogin').value;
    if (username !== "" && password !== "") {
        alert('Đăng nhập thành công!');   
        window.location.href="Trangchinh.html";
    } else {
        alert('Hãy nhập đủ thông tin');
    }

}

// Registration function
// function store() {
//     var name = document.getElementById('ruserName');
//     var pw = document.getElementById('rpassword');

//     // Validate input (similar to your existing code)
//     // ...

//     // Create an array to store user data
//     var users = JSON.parse(localStorage.getItem('users')) || [];

//     // Add the new user to the array
//     users.push({ username: ruserName.value, password: rpassword.value });

//     // Store the updated array back in localStorage
//     localStorage.setItem('users', JSON.stringify(users));

//     alert('Your account has been created with Username ' + ruserName.value + ". Welcome to Zack's Tech Shop, " + ruserName.value + "!");
// }

// // Login function
// function check() {
//     var storedUsers = JSON.parse(localStorage.getItem('users'));
//     var userName = document.getElementById('userName');
//     var userPw = document.getElementById('password');

//     // Validate input (similar to your existing code)
//     // ...

//     // Check if the entered username and password match any stored user
//     var foundUser = storedUsers.find(user => user.username === userName.value && user.password === userPw.value);

//     if (foundUser) {
//         alert('You are logged in. Welcome back ' + userName.value);
//     } else {
//         alert('Error on login');
//     }
// }
