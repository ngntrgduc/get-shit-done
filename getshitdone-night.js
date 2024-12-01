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
    return hour >= 22 || (hour >= 0 && hour <= 6)
}

const hour = new Date().getHours();
if (inBlockRange(hour)) getshitdone();