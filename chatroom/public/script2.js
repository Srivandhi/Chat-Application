let login = JSON.parse(localStorage.getItem('login')) || []; 
const input = document.querySelector('.username');
const button = document.querySelector('.btn');
const loginContainer = document.querySelector('.container');  
const appContainer = document.querySelector('.app');          

button.addEventListener('click', (event) => {
    event.preventDefault();

    const username = input.value.trim();

    if (username === "") {
        alert("UserName is required");
        return;
    }

    if (login.includes(username)) {
        alert("UserName already exists");
    } else {
        login.push(username);
        localStorage.setItem('login', JSON.stringify(login)); 
       
        loginContainer.style.display = "none"; 
        appContainer.style.display = "block";  
    }
});

(function(){
    const app = document.querySelector('.header');
    const socket = io();

    let uname;

})();