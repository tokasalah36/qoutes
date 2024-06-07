var qoute = [
    {
        qoute: " I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
        Auther: "-Marilyn Monroe"
    },
    {
        qoute: "Be yourself; everyone else is already taken.",
        Auther: "-Oscar Wilde"
    },
    {
        qoute: "So many books, so little time.",
        Auther: "-Frank Zappa"
    },
    {
        qoute: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        Auther: "-Albert Einstein"
    },
    {
        qoute: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        Auther: "-Bernard M. Baruch"
    },
    {
        qoute: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        Auther: "-Dr. Seuss"
    },
     {
        qoute: "You only live once, but if you do it right, once is enough",
        Auther: "-Mae West"
    },
    {
        qoute: "Be the change that you wish to see in the world.",
        Auther: "-Mahatma Gandhi"
    },
    {
        qoute: "In three words I can sum up everything I've learned about life: it goes on",
        Auther: "-Robert Frost"
    },
    {
        qoute: "If you tell the truth, you don't have to remember anything.",
        Auther: "-Mark Twain"
    },
]




function getQoutes() {

    var num = Math.floor(Math.random() * qoute.length)
    console.log(num)


    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].Auther;

}