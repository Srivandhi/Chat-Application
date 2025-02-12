let login = JSON.parse(localStorage.getItem('login'))||[];
const input = document.querySelector('.username');
const button = document.querySelector('.btn');

button.addEventListener('click',(event)=>{
    event.preventDefault();
    if(input.value.trim() ===""){
        alert("UserName is required");
        return;
    }
    if(login.includes(input.value)){
        alert("UserName already Exist");
    }
    else{
        console.log("next page");
        localStorage.setItem('login',JSON.stringify(input.value));
        window.location.href ="chatroom.html";
    }
})
