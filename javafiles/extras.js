function getUserDetails(){
    const userDetails = localStorage.getItem("userDetails")
    if(!userDetails){
        return []
    }
    return JSON.parse(userDetails)
}

function saveUserDetails(user){
    let userDetails = getUserDetails()
    userDetails = [...userDetails, user]
    localStorage.setItem("userDetails", JSON.stringify(userDetails))
}

const logoutBtn = document.querySelector(".logout")

if(logoutBtn != null){
    logoutBtn.addEventListener("click", () =>{
        localStorage.removeItem("token")
        localStorage.removeItem("currentUser")
        location.reload()
    })
}

let cUser = localStorage.getItem("currentUser")
if(cUser){
    document.querySelector(".login").style.display= 'none'
    document.querySelector(".logout").style.display= 'block'
    document.querySelector(".signup").style.display= 'none'
    document.querySelector(".dashboard").style.display= 'block'
}else{
    document.querySelector(".login").style.display= 'block'
    document.querySelector(".logout").style.display= 'none'
    document.querySelector(".signup").style.display= 'block'
    document.querySelector(".dashboard").style.display= 'none'
}

