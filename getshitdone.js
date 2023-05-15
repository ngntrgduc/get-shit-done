if (localStorage.getItem("getshitdone") == "yes") { 
    let quotes = [
        "GET SHIT DONE",
        "KEEP CALM",
        "HELLO ?",
        "NOTHING HERE",
        "PROCRASTINATION",
        "404"
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
    }
    </style>
    `
    document.body.innerHTML = `<div>` + quotes[i] + `</div>`
} else {}