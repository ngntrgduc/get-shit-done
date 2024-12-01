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

function inBlockRange(hour) {
    // Hour range from 0 to 23
    // Block all day except from 6 to 10 AM
    return hour < 6 || (hour >= 10 && hour <= 23)
}

const hour = new Date().getHours();
if (inBlockRange(hour)) getshitdone();