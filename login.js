const loginForm = document.getElementById('login-form')
const loginButton = document.getElementById('login-form-submit')
const loginErrorMsg = document.getElementById('login-error-msg')

loginButton.addEventListener('click', e => {
  e.preventDefault()
  const username = loginForm.username.value
  const password = loginForm.password.value
  if (username === 'user' && password === 'webdev') {
    alert('You have successfully loged in.')
    location.reload()
  } else {
    // change opacity of error message css to be displayed
    loginErrorMsg.style.opacity = 1
  }
})
