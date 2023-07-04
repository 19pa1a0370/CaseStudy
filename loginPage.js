const loginBtn = document.getElementById('login-btn');
const dis = document.getElementById("dispaly");
function clicked(){
    // loginBtn.classList.add('successful');
    loginBtn.innerHTML = '<h2>Login successful✅</h2>';
    dis.innerHTML = '<h2>Login successful✅</h2>';
}