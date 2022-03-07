var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Congratulations, you\'re a Partner', 'success')
  })
}


//form variable
const form = document.getElementById('survey-form'),
      table = document.querySelector('.table');

// const del = document.querySelector('.del');

//event listeners
//form submit event listener
form.addEventListener('submit', formSubmit);

//save data on page load
document.addEventListener('DOMContentLoaded', onLoad);

//delete user data on click
// del.addEventListener('click', removeData);

// document.querySelector('.del').addEventListener('click', removeData);
//     removeData();



//form submit function
function formSubmit(e) {
  e.preventDefault();
  //read the name value
  let businessName = document.getElementById('name');
  let businessEmail = document.getElementById('email');
  let businessAge = document.getElementById('number');
  let businessType = document.getElementById('dropdown');
  let recommend = document.querySelector("input[name='recommend']:checked");
  let improvement = document.querySelector("input[name='improve']:checked");
  let comment = document.getElementById('comments');


  //create button
  let buttons = document.createElement('button');
      buttons.classList.add('btn', 'btn-info', 'buttons', 'edit');
      buttons.appendChild(document.createTextNode('Edit'));
  let buttons1 = document.createElement('button');
      buttons1.classList.add('btn', 'btn-danger', 'buttons', 'del');
      buttons1.appendChild(document.createTextNode('Delete'));
  // let myDiv = document.createElement('div');
  //     myDiv.append(buttons, buttons1);

  //create formobject
  const formObject = {
    businessName: businessName.value,
    businessEmail: businessEmail.value,
    businessAge: businessAge.value,
    businessType: businessType.value,
    recommend: recommend.value,
    improvement: improvement.value,
    comment: comment.value,
    id: Date.now()
  }

    //create rows and insert cells
    // table = document.querySelector('.table');
    // row = table.insertRow(-1);

    // businessName = row.insertCell(0);
    // businessEmail = row.insertCell(1);
    // businessAge = row.insertCell(2);
    // businessType = row.insertCell(3);
    // recommend = row.insertCell(4);
    // improvement = row.insertCell(5);
    // comment = row.insertCell(6);
    // let button = row.insertCell(7);


    //insert data into cells created
    // businessName.innerHTML = formObject.businessName;
    // businessEmail.innerHTML = formObject.businessEmail
    // businessAge.innerHTML = formObject.businessAge
    // businessType.innerHTML = formObject.businessType
    // recommend.innerHTML = formObject.recommend;
    // improvement.innerHTML = formObject.improvement;
    // comment.innerHTML = formObject.comment;
    // button.appendChild(myDiv);

    //add to local storage
    addFormLocalStorage(formObject);

    console.log('I have been submitted by event listener', formObject);
    window.location.reload();
   
    // document.querySelector('.del').addEventListener('click', removeData);
    // removeData();
}

//keep data on page on reload
function onLoad() {
  let formObjects = getFormFromStorage();

  console.log(formObjects, 'reloading................');
  //loop through storage and print the values
  formObjects.forEach(function(formObject, index){

    //create button
    
    let buttons = document.createElement('button');
      buttons.classList.add('btn', 'btn-info', 'buttons', 'edit');
      buttons.appendChild(document.createTextNode('Edit'));
    let buttons1 = document.createElement('button');
      buttons1.classList.add('btn', 'btn-danger', 'buttons', 'del');
      buttons1.appendChild(document.createTextNode('Delete'));
    // let myDiv = document.createElement('div');
    //   myDiv.append(buttons, buttons1);


    //create rows and insert cells
      // table = document.querySelector('.table');
      row = table.insertRow(-1);
      sn = row.insertCell(0);
      businessName = row.insertCell(1);
      businessEmail = row.insertCell(2);
      businessAge = row.insertCell(3);
      businessType = row.insertCell(4);
      recommend = row.insertCell(5);
      improvement = row.insertCell(6);
      comment = row.insertCell(7);
      let button = row.insertCell(8);


      //insert data into cells created
      sn.innerHTML = index;
      businessName.innerHTML = formObject.businessName;
      businessEmail.innerHTML = formObject.businessEmail
      businessAge.innerHTML = formObject.businessAge
      businessType.innerHTML = formObject.businessType
      recommend.innerHTML = formObject.recommend;
      improvement.innerHTML = formObject.improvement;
      comment.innerHTML = formObject.comment;
      button.append(buttons, buttons1);

      // document.querySelector('.del').addEventListener('click', removeData);
      // removeData();
  })
  // document.querySelector('.del').addEventListener('click', removeData);
  // removeData();
}

//add form data into the local storage
function addFormLocalStorage(formObject) {
  let formObjects = getFormFromStorage();

  //add form data into the array
  formObjects.push(formObject);

  //convert formdata array into string
  localStorage.setItem('formObjects', JSON.stringify(formObjects));
}


function getFormFromStorage() {
  let formObjects;
  const formsLS = localStorage.getItem('formObjects');
  //get the values, if null is returned then we create an empty array
  if (formsLS === null) {
      formObjects = [];
  } else {
      formObjects = JSON.parse(formsLS);
  }
  return formObjects;
}

//removes data from the dom
function removeData(e) {
  // if(e.target.classList.contains('del')){
  //   e.target.parentElement.parentElement.parentElement.remove();
  // }


  
  console.log(e.target.parentElement.parentElement.parentElement.textContent[0], 'param to remove', e.target.parentElement.parentElement.parentElement.textContent);

  //remove from storage
  removeDataFromLocalStorage(e.target.parentElement.parentElement.parentElement.textContent[0]);
  
}

//removes data from local storage
function removeDataFromLocalStorage(objectIndex){
  //gets data from local storage
  let formObjects = getFormFromStorage();

  console.log(formObjects, 'array before delete');
  
  const result = formObjects.filter(function(formsLS, index){
    console.log(index, 'compare', objectIndex);
      if(index != objectIndex){

        return formsLS;
      }
  });
  console.log(formObjects, 'array after delete', result);
  localStorage.setItem('formObjects', JSON.stringify(result));
  window.location.reload();
}







