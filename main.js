const form = document.getElementById("form");
const errorMsg = document.querySelector('.error-msg')
const mainPage = document.querySelector('.main-page')
const dismissBtn = document.querySelector('.DismissBtn');
const sucess = document.querySelector('.sucess');
const handleSubmit = (e) => {
  e.preventDefault(e);
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  const mail = data.email;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmail.test(mail)) {
    errorMsg.textContent = 'valid email required';
    return;  // Exit the function if email is invalid
  }
  mainPage.style.display = 'none'
  sucess.style.display = 'flex'
  console.log(data.email);
};

form.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener('click', (e)=>{
       sucess.style.display="none";
       mainPage.style.display="flex";
})