if (localStorage.getItem("getshitdone") == "no") { 
    // alert('no');
} else {
    // alert('yes');
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

    document.body.innerHTML = `
    <div> 
        GET SHIT DONE
    </div>
    `
}