window.onload = function () {
    fetch("https://api.adviceslip.com/advice")
    .then((resp) => resp.json())
    .then(function (data) {
        let conselho = data.slip.advice;
        document.querySelector("#conselho").textContent = `"${conselho}"`;
    })
    .catch(function (error) {
        console.error(error)
    })
};