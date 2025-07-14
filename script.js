const btnUserUrl = document.getElementById('btn1');
const btnUserUrlForward = document.getElementById('btn2');
let userUrl;

function buttonClicked() {
    userUrl = prompt("Enter your url")
    if (userUrl) {
        // если нет http, добавь https://
        if (!userUrl.startsWith("http")) {
            userUrl = "https://" + userUrl;
        }

    }

}



btnUserUrl.addEventListener('click', buttonClicked)

btnUserUrlForward.addEventListener('click', function () {
    window.location.href = userUrl;
});