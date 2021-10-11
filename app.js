const countdown = () => {
    
    // Setting the target:
    const countDate = new Date('Oct 20, 2021 00:00:00').getTime();  
    
    // Setting the actual time:
    const now = new Date().getTime();

    // Calculating the gap:
    const gap = countDate - now;

    // How does time works ? 
    const second = 1000; //1000 miliseconds
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculating...
    const textDay = Math.floor( gap / day );
    const textHour = Math.floor( (gap % day ) / hour );
    const textMinute = Math.floor( ( gap % hour ) / minute );
    const textSecond = Math.floor( ( gap % minute ) / second );

    // Manipulating HTML values
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

}

setInterval(countdown, 1000);