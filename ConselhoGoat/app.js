let result = fetch('https://api.adviceslip.com/advice')
.then(r => r.json())
.then (json => 
    document.querySelector(".conselho").textContent = json.slip.advice
) 

