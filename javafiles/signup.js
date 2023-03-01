const form = document.querySelector(".form")
const signupBtn = document.getElementById("signUp")
const imageFile = document.querySelector("input[type=file]")
let profilePicture;

form.addEventListener("submit", function (event){
    event.preventDefault()
    const userName = form.username.value
    const emailAddress = form.email.value
    const passWord = form.password.value

    if(!userName || !emailAddress || !passWord){
        return alert("Fill in the fields guy!!!!")
    }

    if(!isUserExists(userName)){
        saveUserDetails({userName, emailAddress, passWord, profilePicture})
        alert(`You have successfully registered ${userName}`)
        setTimeout(() =>{
            location.replace("./login.html")
        } ,1000)
    }else{
        alert("username already exist!")
    }
})

function isUserExists(usernames) {
    const allUsers = getUserDetails()
    const eachUser = allUsers.find(allUser => {
        return allUser.userName === usernames
    })
    return eachUser ? true : false
}

imageFile.addEventListener("change", function(event){
    let image = event.target.files[0]
    let reader = new FileReader()

    reader.onloadend = function(){
        profilePicture = reader.result
    }
    reader.readAsDataURL(image)
})
