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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap" rel="stylesheet">
    <style>
    html {   
        background-color: black;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 60pt;
        color: white;
        font-family: 'Roboto Mono', monospace;
    }
    </style>
    `
    document.body.innerHTML = `<div>` + quotes[i] + `</div>`
} else {}