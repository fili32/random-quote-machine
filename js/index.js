var quotes = [["\"We must let go of the life we have planned, so as to accept the one that is waiting for us.\"", "Joseph Campbell"], ["\"The best preparation for tomorrow is doing your best today.\"", "H. Jackson Brown, Jr."], ["\"You must do the things you think you cannot do.\"", "Eleanor Roosevelt"], ["\"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.\"", "Helen Keller"], ["\"Put your heart, mind, and soul into even your smallest acts. This is the secret of success.\"", "Swami Sivananda"], ["\"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.\"", "Jimmy Dean"], ["\"Happiness is not something you postpone for the future; it is something you design for the present.\"", "Jim Rohn"], ["\"Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it.\"", "Kevyn Aucoin"], ["\"Nothing is impossible, the word itself says 'I'm possible'!\"", "Audrey Hepburn"], ["\"our work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.\"", "Steve Jobs"], ["\"Keep your face always toward the sunshine - and shadows will fall behind you.\"", "Walt Whitman"], ["\"What we think, we become.\"", "Buddha"]];
var uniqueRandoms = [];
var numRandoms = 3;
function makeUniqueRandom() {
    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];
    uniqueRandoms.splice(index, 1);
    return val;
}
function get_random_color() {
    return "#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16);
}
function replaceQuotes() {
    var col = get_random_color();
    var randomQuotesIndex = makeUniqueRandom();
    var quote = quotes[randomQuotesIndex][0];
    var author = '-' + quotes[randomQuotesIndex][1];
    document.getElementById("demo").innerHTML = quote;
    document.getElementById("demo1").innerHTML = author;
    document.getElementById("demo").style.color = col;
    document.getElementById("demo1").style.color = col;
    document.getElementById("getMessage").style.color = col;
    document.body.style.backgroundColor = col;
}
function tweetIt() {
    var phrase = document.getElementById('demo').innerText + " " + document.getElementById('demo1').innerText;
    var tweetUrl = 'https://twitter.com/share?text=' +
        encodeURIComponent(phrase) +
        '&hashtags=quotes' + '&url=null';
    window.open(tweetUrl);
}