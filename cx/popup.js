
const ele = document.getElementById("btn")
ele.addEventListener("click", () => {
    chrome.runtime.sendMessage({ time: "30" }, function (response) {
        console.log(response);
    });
});