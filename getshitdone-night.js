function getshitdone() {
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
    let i = Math.floor(Math.random() * quotes.length);
    document.body.innerHTML = ''; // Clear existing content
    document.body.innerHTML = `<div>${quotes[i]}</div>`
    document.title = quotes[i];
}

function inBlockRange(hour) {
    // Block from 10 PM today to 6 AM tomorrow
    // Hour range from 0 to 23
    return hour >= 21 || (hour >= 0 && hour <= 6)
}

const date = new Date();
const hour = date.getHours();
if (inBlockRange(hour)) {
    getshitdone();
}
