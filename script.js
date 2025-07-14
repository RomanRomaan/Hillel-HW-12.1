const btnUserUrl = document.getElementById('btn1');
const btnUserUrlForward = document.getElementById('btn2');
let userUrl;

function buttonClicked() {
    userUrl = prompt("Enter your url");
    if (userUrl) {
        userUrl = userUrl.trim();
        if (hasCyrillic(userUrl)) {
            alert("URL must not contain Cyrillic characters!");
            userUrl = "";
            return;
        }
        if (!userUrl.toLowerCase().startsWith("http")) {
            userUrl = "https://" + userUrl;
        }
    }
}

function hasCyrillic(text) {
    return /[а-яёіїєґА-ЯЁІЇЄҐ]/.test(text);
}


btnUserUrl.addEventListener('click', buttonClicked)

btnUserUrlForward.addEventListener('click', function () {
    window.location.href = userUrl;
});