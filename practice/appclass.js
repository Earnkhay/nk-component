//form variable
const formData = document.getElementById('survey-form');

//form submit event listener
formData.addEventListener('submit', formSubmit);

//form submit function
function formSubmit(e) {
    e.preventDefault();

    let businessName = document.getElementById('name');
    let businessEmail = document.getElementById('email');
    let businessAge = document.getElementById('number');
    let businessType = document.getElementById('dropdown');
    let recommend = document.querySelector("input[name='recommend']:checked");
    let improvement = document.querySelector("input[name='improve']:checked");
    let comment = document.getElementById('comments');

    const formObject = {
        businessName: businessName.value,
        businessEmail: businessEmail.value,
        businessAge: businessAge.value,
        businessType: businessType.value,
        recommend: recommend.value,
        improvement: improvement.value,
        comment: comment.value
    }



     table = document.querySelector('.table');
     row = table.insertRow(-1);
     businessName = row.insertCell(0);
     businessEmail = row.insertCell(1);
     businessAge = row.insertCell(2);
     businessType = row.insertCell(3);
     recommend = row.insertCell(4);
     improvement = row.insertCell(5);
     comment = row.insertCell(6);

    businessName.innerHTML = formObject.businessName;
    businessEmail.innerHTML = formObject.businessEmail
    businessAge.innerHTML = formObject.businessAge
    businessType.innerHTML = formObject.businessType
    recommend.innerHTML = formObject.recommend;
    improvement.innerHTML = formObject.improvement;
    comment.innerHTML = formObject.comment;
}






  