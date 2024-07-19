document.head.innerHTML = `
    <style>
    html {   
        background-color: black;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 60pt;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
    }
    </style>`;
const quotes = [
    'GET SHIT DONE',
    'KEEP CALM',
    'FUCK-UP'
];
let i = Math.floor(Math.random() * quotes.length);
document.body.innerHTML = `<div>` + quotes[i] + `</div>`;
document.title = quotes[i];