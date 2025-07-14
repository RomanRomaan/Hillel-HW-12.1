const btnUserUrl = document.getElementById('btn1');
const btnUserUrlForward = document.getElementById('btn2');
let userUrl;

function buttonClicked() {
    userUrl = prompt("Enter your url")

}



btnUserUrl.addEventListener('click', buttonClicked)

btnUserUrlForward.addEventListener('click', function () {
    window.location.href = userUrl;
});