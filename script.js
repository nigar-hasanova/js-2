const username = "admin";
const password = '12345678';
const answer = `${username} ${password}`;

let question1 = prompt('User adinizi daxil edin');
let question2 = prompt('Sifrenizi daxil edin');
let result = `${question1} ${question2}`

if (result === answer) {
    document.getElementById('welcome').innerText = "Xos geldiniz!";
} else {
    alert("Daxil etdiyiniz melumatlar yanlisdir.")
}