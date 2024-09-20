const loginForm = document.getElementById('login-form')
const loginButton = document.getElementById('login-form-submit')
const loginErrorMsg = document.getElementById('login-error-msg')

async function userLogin() {
  const usersFetch = await fetch('./users.json') // await can only be used in async functions
  const users = await usersFetch.json()

  // event listener that waits for a click on the element
  loginButton.addEventListener('click', e => {
    e.preventDefault()
    const username = loginForm.username.value
    const password = loginForm.password.value
    if (users.some(u => u.username === username) && users.some(p => p.password === password)) {
      alert('You have successfully loged in.')
      location.reload()
    } else {
      // change opacity of error message css to be displayed
      loginErrorMsg.style.opacity = 1
    }
  })
}

userLogin() // when file is called from html, this function executes.
