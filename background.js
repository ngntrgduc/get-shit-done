function getshitdone() {
    const status = localStorage.getItem("getshitdone");
    const newStatus = (status == "yes") ? "no" : "yes";
    localStorage.setItem("getshitdone", newStatus);
    location.reload() // auto reload, time-saving
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getshitdone
    });
});
