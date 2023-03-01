const loginForm = document.querySelector(".login_form")

// note that the username and password are the names you gave in your HTML
loginForm.addEventListener("submit", (event) =>{
    event.preventDefault()
    const userName = loginForm.username.value
    const passWord = loginForm.password.value

    if(!userName || !passWord){
        alert("Enter all fields")
        return
    }
    console.log(passWord);

    loginUser(userName, passWord)
})

function loginUser(userName, passWord){
    const userInfo = getUserDetails()

    const currentUser = userInfo.find(user => {
        return user.userName === userName && user.passWord === passWord
    })

    if(currentUser === undefined){
        return alert("invalid username or password")
    }
    else{
        alert(`Welcome ${userName}`)
    }
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
    localStorage.setItem("token", currentUser.username)
    alert(`Welcome ${userName}`)
    setTimeout(()=>{
        location.href = "./quiz.html"
    }, 1000)

}