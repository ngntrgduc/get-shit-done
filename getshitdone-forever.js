document.head.innerHTML = `
    <style>
    html {   
        background-color: #1f1f1f;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 50pt;
        color: #fefefe;
        font-family: Arial, Helvetica, sans-serif;
    }
    </style>`;
const quotes = [
    'GET SHIT DONE',
    'KEEP CALM',
];
const i = Math.floor(Math.random() * quotes.length);
document.body.innerHTML = `<div>${quotes[i]}</div>`
document.title = quotes[i];
