const secondHand = document.querySelector('#second-hand');
const minuteHand = document.querySelector('#minute-hand');
const hourHand = document.querySelector('#hour-hand');


const newTime = () => { 
    const currentTime = new Date();

    const seconds = currentTime.getSeconds();
    const secondHandMove = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondHandMove}deg)`;

    const mins = currentTime.getMinutes();
    const minuteHandMove = ((mins / 60) * 360) + ((seconds/60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minuteHandMove}deg)`;

    const hours = currentTime.getHours();
    const hourHandMove = ((hours / 12) * 360) + ((mins/60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourHandMove}deg)`
}

setInterval(newTime);

newTime();