auth.onAuthStateChanged(user => {
    // console.log(user)
    if (user) {
        console.log('user loged in: ', user)
    } else {
        console.log('user loged out')
    }
})


const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
 e.preventDefault();

 const email = signupForm['signup-email'].value;
 const password = signupForm['signup-password'].value;

//  console.log(email,password)
auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user)
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
})
})

//logout 
const logout = document.querySelector('#logout');
logout.addEventListener('click' , (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user-signout')
    })
})

//login 
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value; 

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
}) 