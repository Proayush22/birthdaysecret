const shareButtons = document.querySelectorAll('.share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the link")
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))

var i = 0;
var str = "Dear Aadya, First and Foremost, I would like to say, HAPPY BIRTHDAY!! I know you are typically sad on your birthday, but I hope you are still able to enjoy your special day, after all you only turn 16 once! Above all, you are the smartest and most caring person i've met; you made gifts for numerous of my friends on their birthdays and you're always spoiling me with gifts or food regardless of the occasion. You are also dedicated to learning new things and hold yourself to the highest standards which is amazing and something I admire about you. Many others can agree that you're remarkably easy and fun to talk to. As I am writing this, I can remember when it was my birthday and you did everything you possibly could to cheer me up and make me feel special. These all go to show how phenomenal of a friend you are and I am so lucky and undeserving of being able to call you my best friend and my girlfriend. I know I have not been the best partner to you, and I am truly sorry for that and I promise that I will try my hardest to improve. I cannot thank you enough for the amount you have helped me develop as a person and for sticking by me through the past year and a half. I love you more than you can imagine and will always hold a special place in my heart for you regardless of what happens in the future. Now, I think its safe to say, sending that pick-up line to you is something i'll never regret ;), but I digress, once again Happy Birthday and don't die while driving!  P.S. (8/25/23) I just just told you I spent the entire day learning python, but I spent basically all of yesterday and today making this D:";
var speed = 50;

function typeWriter1() {
    if (i < str.length) {
        document.getElementById("letter").innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    }
}

var x = 0;
var txt = "Hi! Thank you for always taking time out of your day to do things with me such as play covidopoly, agar.io, buzzfeed quizzes, watching youtube/shows, or walking with me at vets (though it only happened twice). This playlist is just a bunch of songs that we used to listen to together and remind me of you! The first three songs are ones from sweets, and I really wanted to include 'Hook Up Song' becasue it was my favorite dance that we did, but i'm pretty sure they removed it from spotify. If you scroll to the end you'll see the Hamilton series which you somehow know every single word to. Crack a bottle and Homicide are also there, and i'll never let you live it down that Eminem was your top played artist last year. Also I just want to say that I hate the spotify embed code feature because it doesnt update the embed after you update the playlist so I ended up remaking the playlist like 3 times.";

function typeWriter2() {
    if (i < txt.length) {
        document.getElementById("spotify-letter").innerHTML += txt.charAt(x);
        x++;
        setTimeout(typeWriter2, speed);
    }
}
