let namesignup= document.getElementById("nameup");
let passwordsignup= document.getElementById("passwordup");
let emailsignup =document.getElementById("emailup");
let emailLogin=document.getElementById("emailLogin");
let passwordLogin=document.getElementById("passwordLogin");
let massage=document.getElementById("massage");
let alertMassage = document.getElementById("alertMassage");
let signUpArray = [];

let pathparts = location.pathname.split('/');
 let baseURL = ''
 for (let i = 0; i < pathparts.length - 1; i++) {
     baseURL += '/' + pathparts[i]
 }


 document.addEventListener("DOMContentLoaded", () => {
    let username = localStorage.getItem('sessionUsername');
    if (username !== null) {
        document.getElementById('username').innerHTML = "Welcome " + username;
    }
});

// document.addEventListener("DOMContentLoaded", () => {
//     let username = localStorage.getItem('sessionUsername');
//      if (username !== null) {
//         document.getElementById('username').innerHTML = "Welcome " + username;
//     }
//     else {
       
//         location.replace(baseURL + '/index.html');
//     }
// });







if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}


 


// ***************************************************function check input empity*************************************************


function isEmpty() {

    if (namesignup.value == "" || emailsignup.value == "" || passwordsignup.value == "") {
        return false
    } else {
        return true
    }
}





// ***************************************************function check email empity*************************************************

function isEmailExist() {
    for (let i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email == emailsignup.value) {
            return false
        }
    }
}


// ***************************************************function register*************************************************

function signup(){

    if (isEmpty() == false) {
        alertMassage.innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
           return false
          }

          var signUpOb = {
                     name: namesignup.value,
                     email: emailsignup.value,
                    password: passwordsignup.value,
                }

                if (signUpArray.length == 0) {
                             signUpArray.push(signUpOb)
                             localStorage.setItem('users', JSON.stringify(signUpArray))
                             alertMassage.innerHTML = '<span class="text-success m-3">Success</span>'
                            return true
                       }

                if (isEmailExist() == false) {
                    alertMassage.innerHTML = '<span class="text-danger m-3">email already exists</span>'
                        
                            } 
                            
                else {
                                signUpArray.push(signUpOb)
                               localStorage.setItem('users', JSON.stringify(signUpArray))
                               alertMassage.innerHTML = '<span class="text-success m-3">Success</span>'
                        
                            }
                        

}



// ***************************************************function check input empity*************************************************

function isLoginEmpty() {

    if (passwordLogin.value == "" || emailLogin.value == "") {
        return false
    } else {
        return true
    }
}



// ***************************************************function login*************************************************
function login() {
    if (isLoginEmpty() == false) {
        massage.innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    let password = passwordLogin.value;
    let email = emailLogin.value;
    for (let i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email == email && signUpArray[i].password== password) {
            localStorage.setItem('sessionUsername', signUpArray[i].name)
           
            
            if (baseURL == '/') {
                location.replace('https://' + location.hostname + '/home.html')

            } 
            else {
                location.replace(baseURL + '/home.html')

            }
        } 
        else {
            massage.innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    
    }
    
}










// ***************************************************function logout*************************************************

function logout(){
    
    localStorage.removeItem("sessionUsername")


}




































































