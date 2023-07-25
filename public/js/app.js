console.log('Client side javascript file is loaded!');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const alert = document.querySelector('#searchAlert')

const searchMsgOne = document.querySelector('#searchMessageOne')
const searchForm = document.querySelector('form');
const searchElement = document.querySelector('input');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevents default form from refreshing the browser which is its d efault behavior
  if(!searchElement.value) 
  {
    alert.classList.remove('hidden');
    setTimeout(clearAlert, 2000);
    return 
  }

  searchMsgOne.textContent = "You entered " + "'" +searchElement.value + "'";
  //const title = searchElement.value; // value extracts whatever istyped in;
  //console.log(title);
});

const clearAlert = function() {
  alert.classList.add('hidden');
}