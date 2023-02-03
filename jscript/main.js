/*index.html*/ 
const imagePop = document.getElementById('image1');

if(document.body.contains(imagePop)) {
   let popImage = () => {
      imagePop.style.height = '200px';
      imagePop.style.width = '200px';
   }
   let returnImage = () =>{
      imagePop.style.height = '150px';
      imagePop.style.width = '150px';
   }
   imagePop.onmouseover = popImage;
   imagePop.onmouseout = returnImage;
}

/*map.html*/

const toggleButton = document.getElementById('button');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const mobile = document.getElementById('mob');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
const buttonp = document.getElementById('buttonp');

const buttonText = () =>  {
   buttonp.style.display = 'block';
   toggleButton.style.display = 'none';
   nameInput.disabled = true;
   surnameInput.disabled = true;
   mobile.disabled = true;
   email.disabled = true;
   textarea.disabled = true;
  
}
toggleButton.onclick = buttonText;
