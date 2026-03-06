const userNameInput = document.getElementById('username-Input');

const userPasswordInput = document.getElementById('user-password')
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
  const userName = userNameInput.value;
  const userPassword = userPasswordInput.value;

if (userName == 'admin' && userPassword == 'admin123') {
 window.location.assign('/home.html');

} else {
  return alert('Invalid info');
}


});
