const date = new Date();
let hour = date.getHours();

function getshitdone() {
    let quotes = [
        "GET SHIT DONE",
        "KEEP CALM",
        "FUCK-UP"
    ]

    let i = Math.floor(Math.random() * quotes.length);

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
    </style>
    `
    document.body.innerHTML = `<div>` + quotes[i] + `</div>`
    document.title = quotes[i];
}

// From 11:00 PM - 06:00 AM, no more procrastination
// Hour range from 0 to 23
if (hour == 23 || (hour >= 0 && hour <= 6)) {
    getshitdone();
}

if (localStorage.getItem("getshitdone") == "yes") { 
    getshitdone();
}
