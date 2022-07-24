var submitBtn = document.getElementById
('form');

submitBtn.addEventListener('submit', function
() {
    event.preventDefault();
    let userInput = document.querySelector
    ('#location').value;
    console.log(userInput);
    getCoord(userInput)
});

function getCoord(location) {
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${dog}&limit=5&appid=d91f911bcf2c0f925fb6535547a5ddc9`
    fetch(url){
        
    }
}
