
/* ------------------------------{ Varaibles }------------------------------ */

// Variables: Input
let FormName = document.querySelector("#Form__name");
let FormEmail = document.querySelector("#Form__email");



/* ------------------------------{ Input Validation }------------------------------ */

// Initiator
document.querySelector("#Form__button").onclick = Validate;

// Function: Validate form
function Validate() {

    // Validate: Navn
    if (FormName.value.length == 0) {
        alert("Udfyld navn!");
        FormName.focus();
        FormName.style.backgroundColor = "#F37335";
        return false;
    } else {
        if(validateLetters(FormName.value)) {
            FormName.style.backgroundColor = "transparent";
        } else {
            alert("Udfyld navn!");
            FormName.focus();
            FormName.style.backgroundColor = "#F37335";
            return false;
        };
    };



    // Validate: Email
    if (FormEmail.value.length == 0) {
        alert("Udfyld email!");
        FormEmail.focus();
        FormEmail.style.backgroundColor = "#F37335";
        return false;
    } else {
        if(validateSpecial(FormEmail.value)) {
            FormEmail.style.backgroundColor = "transparent";
        } else {
            alert("Udfyld email!");
            FormEmail.focus();
            FormEmail.style.backgroundColor = "#F37335";
            return false;
        };
    };



    /* ------------------------------{ Symbol validation }------------------------------ */

    // Validate: Special
    function validateSpecial(Input) {
        let re = /(.+)@(.+){2,}\.(.+){2,}$/;
        return re.test(String(Input).toLowerCase());
    };

    // Validate: Letter
    function validateLetters(Input) {
        let re = /^[A-Za-z]+$/;
        return re.test(String(Input).toLowerCase());
    };



    /* ------------------------------{ Symbol validation }------------------------------ */

    // Validation accepted
    alert("Beskeden blev sent!");
};