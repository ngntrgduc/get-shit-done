function getshitdone() {
    document.head.innerHTML = `
        <style>
        html {   
            background-color: #1f1f1f;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 100pt;
        }
        </style>`;
    document.body.innerHTML = `<div>👁️</div>`;
}

function inBlockRange(startHour, endHour) {
    // Block if between startHour and endHour
    // Hour range from 0 to 23
    const hour = new Date().getHours();
    return hour >= startHour && hour < endHour
}


// if (inBlockRange(0, 6)) getshitdone();
if (inBlockRange(6, 12)) getshitdone();