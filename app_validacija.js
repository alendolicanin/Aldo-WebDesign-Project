/* --------- js for form validation --------- */

const form = document.getElementById("form");
const name_surname = document.getElementById("name_surname");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    checkInputs();
});

function checkInputs() {
    //  dobijamo vrednosti iz inputs
    const name_surnameValue = name_surname.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (name_surnameValue === "") {
        // prikazuje grešku, dodaje klasu greške
        setErrorFor(name_surname, "Polje za ime i prezime ne može biti prazno!")
    } else if (!isNameSurname(name_surnameValue)) {
        // prikazuje da nije validno, dodaje klasu greške
        setErrorFor(name_surname, "Nevažeće ime i prezime!");
    } else {
        // dodaje klasu da je dobro
        setSuccessFor(name_surname);
    }

    if (emailValue === "") {
        // prikazuje grešku, dodaje klasu greške
        setErrorFor(email, "Polje za e-mail ne može biti prazno!");
    } else if (!isEmail(emailValue)) {
        // prikazuje da nije validno, dodaje klasu greške
        setErrorFor(email, "Nevažeći e-mail!");
    } else {
        // dodaje klasu da je dobro
        setSuccessFor(email);
    }

    if (messageValue === "") {
        // prikazuje grešku, dodaje klasu greške
        setErrorFor(message, "Polje za poruku ne može biti prazno!")
    } else if (!isMessage(messageValue)) {
        // prikazuje da nije validno, dodaje klasu greške
        setErrorFor(message, "Nevažeća poruka!");
    } else {
        // dodaje klasu da je dobro
        setSuccessFor(message);
    }

    function setErrorFor(input, message_) {
        const formControl = input.parentElement; // .form-control
        const small = formControl.querySelector("small");
        // dodajemo poruku o grešci u small
        small.innerText = message_;
        // dodaje klasu greške
        formControl.className = "form-control error";
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement; // .form-control
        // dodaje klasu da je dobro
        formControl.className = "form-control success";
    }

    function isNameSurname(name_surname) {
        var regex = /^[a-z]{3,}\.[a-z]{3,}$/g;
        if (name_surname.length <= 25) {
            return regex.test(name_surname);
        }
    }

    function isEmail(email) {
        var regex = /^([^0-9.,'><~"!?:;@#$%^&*()_+-=])\w[a-z\d]+[\d|\w]@\w+(\.\w+)*$/gim;
        return regex.test(email);
    }

    function isMessage(message) {
        var regex = /^[a-zA-Z0-6\_]{50,250}$/g;
        return regex.test(message);
    }
};

function checkName() {
    //  dobijamo vrednosti iz inputs
    const name_surnameValue = name_surname.value.trim();

    if (name_surnameValue === "") {
        // prikazuje grešku, dodaje klasu greške
        setErrorFor(name_surname, "Polje za ime i prezime ne može biti prazno!")
    } else if (!isNameSurname(name_surnameValue)) {
        // prikazuje da nije validno, dodaje klasu greške
        setErrorFor(name_surname, "Nevažeće ime i prezime!");
    } else {
        // dodaje klasu da je dobro
        setSuccessFor(name_surname);
    }

    function setErrorFor(input, message_) {
        const formControl = input.parentElement; // .form-control
        const small = formControl.querySelector("small");
        // dodajemo poruku o grešci u small
        small.innerText = message_;
        // dodaje klasu greške
        formControl.className = "form-control error";
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement; // .form-control
        // dodaje klasu da je dobro
        formControl.className = "form-control success";
    }

    function isNameSurname(name_surname) {
        var regex = /^[a-z]{3,}\.[a-z]{3,}$/g;
        if (name_surname.length <= 25) {
            return regex.test(name_surname);
        }
    }
};

function checkEmail() {
    //  dobijamo vrednosti iz inputs
    const emailValue = email.value.trim();

    if (emailValue === "") {
        // prikazuje grešku, dodaje klasu greške
        setErrorFor(email, "Polje za e-mail ne može biti prazno!");
    } else if (!isEmail(emailValue)) {
        // prikazuje da nije validno, dodaje klasu greške
        setErrorFor(email, "Nevažeći e-mail!");
    } else {
        // dodaje klasu da je dobro
        setSuccessFor(email);
    }

    function setErrorFor(input, message_) {
        const formControl = input.parentElement; // .form-control
        const small = formControl.querySelector("small");
        // dodajemo poruku o grešci u small
        small.innerText = message_;
        // dodaje klasu greške
        formControl.className = "form-control error";
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement; // .form-control
        // dodaje klasu da je dobro
        formControl.className = "form-control success";
    }

    function isEmail(email) {
        var regex = /^([^0-9.,'><~"!?:;@#$%^&*()_+-=])\w[a-z\d]+[\d|\w]@\w+(\.\w+)*$/gim;
        return regex.test(email);
    }
};

function checkMessage() {
    //  dobijamo vrednosti iz inputs
    const messageValue = message.value.trim();

    if (messageValue === "") {
        // prikazuje grešku, dodaje klasu greške
        setErrorFor(message, "Polje za poruku ne može biti prazno!")
    } else if (!isMessage(messageValue)) {
        // prikazuje da nije validno, dodaje klasu greške
        setErrorFor(message, "Nevažeća poruka!");
    } else {
        // dodaje klasu da je dobro
        setSuccessFor(message);
    }

    function setErrorFor(input, message_) {
        const formControl = input.parentElement; // .form-control
        const small = formControl.querySelector("small");
        // dodajemo poruku o grešci u small
        small.innerText = message_;
        // dodaje klasu greške
        formControl.className = "form-control error";
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement; // .form-control
        // dodaje klasu da je dobro
        formControl.className = "form-control success";
    }

    function isMessage(message) {
        var regex = /^[a-zA-Z0-6\_]{50,250}$/g;
        return regex.test(message);
    }
};

function send() {
    const name_surnameValue = name_surname.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (name_surnameValue !== "" && (isNameSurname(name_surnameValue)) && emailValue !== "" && (isEmail(emailValue)) && messageValue !== "" && (isMessage(messageValue))) {
        document.location.href = "uspeh.html";
    }

    function isNameSurname(name_surname) {
        var regex = /^[a-z]{3,}\.[a-z]{3,}$/g;
        if (name_surname.length <= 25) {
            return regex.test(name_surname);
        }
    }

    function isEmail(email) {
        var regex = /^([^0-9.,'><~"!?:;@#$%^&*()_+-=])\w[a-z\d]+[\d|\w]@\w+(\.\w+)*$/gim;
        return regex.test(email);
    }

    function isMessage(message) {
        var regex = /^[a-zA-Z0-6\_]{50,250}$/g;
        return regex.test(message);
    }
}