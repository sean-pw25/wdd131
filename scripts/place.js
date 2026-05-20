function calculateWindChill(windSpeed, temp) {
    let windChill = temp - windSpeed * 0.7;
    return windChill;
};

let windSpeed = 14;
let temp = 48;
let windChill = calculateWindChill(windSpeed, temp);
if (temp <= 50 && windSpeed > 3) {
    document.querySelector("#wind-chill").textContent = `${windChill} °F`
}