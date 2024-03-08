// newtab.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to change the body content
    function changeBodyContent() {
        var randomIndex = Math.floor(Math.random()*137);
        document.body.innerHTML = "<h1 style='font-weight: bold; color:orange' >"+quotes["motivationalQuotes"][randomIndex]["quote"]+"</h1>";
    }

    // Call the function to change the body content
    changeBodyContent();
});


const quotes = {
    "motivationalQuotes": [
    {
        "quote": "Success is not in what you have, but who you are.",
        "author": "Bo Bennett"
    },
    {
        "quote": "The only place where success comes before work is in the dictionary.",
        "author": "Vidal Sassoon"
    },
    {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "Success usually comes to those who are too busy to be looking for it.",
        "author": "Henry David Thoreau"
    },
    {
        "quote": "Don't be afraid to give up the good to go for the great.",
        "author": "John D. Rockefeller"
    },
    {
        "quote": "Opportunities don't happen. You create them.",
        "author": "Chris Grosser"
    },
    {
        "quote": "The only place where success comes before work is in the dictionary.",
        "author": "Vidal Sassoon"
    },
    {
        "quote": "Success is not just about making money. It's about making a difference.",
        "author": "Unknown"
    },
    {
        "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer"
    },
    {
        "quote": "Success is not in what you have, but who you are.",
        "author": "Bo Bennett"
    },
    {
        "quote": "The only place where success comes before work is in the dictionary.",
        "author": "Vidal Sassoon"
    },
    {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "Success usually comes to those who are too busy to be looking for it.",
        "author": "Henry David Thoreau"
    },
    {
        "quote": "Don't be afraid to give up the good to go for the great.",
        "author": "John D. Rockefeller"
    },
    {
        "quote": "Opportunities don't happen. You create them.",
        "author": "Chris Grosser"
    },
    {
        "quote": "Success is not just about making money. It's about making a difference.",
        "author": "Unknown"
    },
    {
        "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer"
    },
    {
        "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        "author": "Jordan Belfort"
    },
    {
        "quote": "Don't watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson"
    },
    {
        "quote": "The only way to achieve the impossible is to believe it is possible.",
        "author": "Charles Kingsleigh"
    },
    {
        "quote": "Success is not just about making money. It's about making a difference.",
        "author": "Unknown"
    },
    {
        "quote": "You don't have to be rich to travel well.",
        "author": "Eugene Fodor"
    },
    {
        "quote": "The road to success and the road to failure are almost exactly the same.",
        "author": "Colin R. Davis"
    },
    {
        "quote": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill"
    },
    {
        "quote": "Hard work beats talent when talent doesn't work hard.",
        "author": "Tim Notke"
    },
    {
        "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "author": "Christian D. Larson"
    },
    {
        "quote": "Success is stumbling from failure to failure with no loss of enthusiasm.",
        "author": "Winston S. Churchill"
    },
        {
            "quote": "The only way to achieve the impossible is to believe it is possible.",
            "author": "Charles Kingsleigh"
        },
        {
            "quote": "Your time is limited, don't waste it living someone else's life.",
            "author": "Steve Jobs"
        },
        {
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston Churchill"
        },
        {
            "quote": "Hard work beats talent when talent doesn't work hard.",
            "author": "Tim Notke"
        },
        {
            "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
            "author": "Christian D. Larson"
        },
        {
            "quote": "Success is stumbling from failure to failure with no loss of enthusiasm.",
            "author": "Winston S. Churchill"
        },
        {
            "quote": "Success is not just about making money. It's about making a difference.",
            "author": "Unknown"
        },
        {
            "quote": "You don't have to be rich to travel well.",
            "author": "Eugene Fodor"
        },
        {
            "quote": "The road to success and the road to failure are almost exactly the same.",
            "author": "Colin R. Davis"
        },
        {
            "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
            "author": "Jordan Belfort"
        },
        {
            "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            "author": "Albert Schweitzer"
        },
        {
            "quote": "Don't watch the clock; do what it does. Keep going.",
            "author": "Sam Levenson"
        },
        {
            "quote": "The only way to do great work is to love what you do.",
            "author": "Steve Jobs"
        },
        {
            "quote": "Don't be afraid to give up the good to go for the great.",
            "author": "John D. Rockefeller"
        },
        {
            "quote": "Opportunities don't happen. You create them.",
            "author": "Chris Grosser"
        },
        {
            "quote": "Success usually comes to those who are too busy to be looking for it.",
            "author": "Henry David Thoreau"
        },
        {
            "quote": "The only place where success comes before work is in the dictionary.",
            "author": "Vidal Sassoon"
        },
        {
            "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
            "author": "Franklin D. Roosevelt"
        },
        {
            "quote": "Success is not in what you have, but who you are.",
            "author": "Bo Bennett"
        },
        {
            "quote": "Success is not just about making money. It's about making a difference.",
            "author": "Unknown"
        },
        {
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston Churchill"
        },
        {
            "quote": "The only place where success comes before work is in the dictionary.",
            "author": "Vidal Sassoon"
        },
        {
            "quote": "Success is not just about making money. It's about making a difference.",
            "author": "Unknown"
        },
        {
            "quote": "You don't have to be rich to travel well.",
            "author": "Eugene Fodor"
        },
        {
            "quote": "The road to success and the road to failure are almost exactly the same.",
            "author": "Colin R. Davis"
        },
        {
            "quote": "Your time is limited, don't waste it living someone else's life.",
            "author": "Steve Jobs"
        },
        {
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston Churchill"
        },
        {
            "quote": "Hard work beats talent when talent doesn't work hard.",
            "author": "Tim Notke"
        },
        {
            "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
            "author": "Christian D. Larson"
        },
        {
            "quote": "Success is stumbling from failure to failure with no loss of enthusiasm.",
            "author": "Winston S. Churchill"
        },
        {
            "quote": "The only way to achieve the impossible is to believe it is possible.",
            "author": "Charles Kingsleigh"
        },
        {
            "quote": "Success is not just about making money. It's about making a difference.",
            "author": "Unknown"
        },
        {
            "quote": "You don't have to be rich to travel well.",
            "author": "Eugene Fodor"
        },
        {
            "quote": "The road to success and the road to failure are almost exactly the same.",
            "author": "Colin R. Davis"
        },
        {
            "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
            "author": "Jordan Belfort"
        },
        {
            "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            "author": "Albert Schweitzer"
        },
        {
            "quote": "Don't watch the clock; do what it does. Keep going.",
            "author": "Sam Levenson"
        },
        {
            "quote": "The only way to do great work is to love what you do.",
            "author": "Steve Jobs"
        },
        {
            "quote": "Don't be afraid to give up the good to go for the great.",
            "author": "John D. Rockefeller"
        },
        {
            "quote": "Opportunities don't happen. You create them.",
            "author": "Chris Grosser"
        },
        {
            "quote": "Success usually comes to those who are too busy to be looking for it.",
            "author": "Henry David Thoreau"
        },
        {
            "quote": "The only place where success comes before work is in the dictionary.",
            "author": "Vidal Sassoon"
        },
        {
            "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
            "author": "Franklin D. Roosevelt"
        },
        {
            "quote": "Success is not in what you have, but who you are.",
            "author": "Bo Bennett"
        },
        {
            "quote": "Success is the sum of small efforts repeated day in and day out.",
            "author": "Robert Collier"
        },
        {
            "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
            "author": "Jordan Belfort"
        },
        {
            "quote": "Your time is limited, don't waste it living someone else's life.",
            "author": "Steve Jobs"
        },
        {
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston Churchill"
        },
        {
            "quote": "Hard work beats talent when talent doesn't work hard.",
            "author": "Tim Notke"
        },
        {
            "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
            "author": "Christian D. Larson"
        },
        {
            "quote": "Success is stumbling from failure to failure with no loss of enthusiasm.",
            "author": "Winston S. Churchill"
        },
        {
            "quote": "The only way to achieve the impossible is to believe it is possible.",
            "author": "Charles Kingsleigh"
        },
        {
            "quote": "Success is not just about making money. It's about making a difference.",
            "author": "Unknown"
        },
        {
            "quote": "You don't have to be rich to travel well.",
            "author": "Eugene Fodor"
        },
        {
            "quote": "The road to success and the road to failure are almost exactly the same.",
            "author": "Colin R. Davis"
        },
        {
            "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
            "author": "Franklin D. Roosevelt"
        },
        {
            "quote": "Success is not just about making money. It's about making a difference.",
            "author": "Unknown"
        },
        {
            "quote": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
            "author": "Brian Tracy"
        },
        {
            "quote": "Your attitude, not your aptitude, will determine your altitude.",
            "author": "Zig Ziglar"
        },
        {
            "quote": "Do not wait to strike till the iron is hot, but make it hot by striking.",
            "author": "William Butler Yeats"
        },
        {
            "quote": "It always seems impossible until it's done.",
            "author": "Nelson Mandela"
        },
        {
            "quote": "The future belongs to those who believe in the beauty of their dreams.",
            "author": "Eleanor Roosevelt"
        },
        {
            "quote": "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
            "author": "Vince Lombardi"
        },
        {
            "quote": "Success is not how high you have climbed, but how you make a positive difference to the world.",
            "author": "Roy T. Bennett"
        },
        {
            "quote": "Success is not just about the destination, but the journey along the way.",
            "author": "Unknown"
        },
        {
            "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
            "author": "Jordan Belfort"
        },
        {
            "quote": "Strive not to be a success, but rather to be of value.",
            "author": "Albert Einstein"
        },
        {
            "quote": "Success is not the result of spontaneous combustion. You must set yourself on fire.",
            "author": "Arnold H. Glasow"
        },
        {
            "quote": "The only way to do great work is to love what you do.",
            "author": "Steve Jobs"
        },
        {
            "quote": "Don't watch the clock; do what it does. Keep going.",
            "author": "Sam Levenson"
        },
        {
            "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
            "author": "Franklin D. Roosevelt"
        },
        {
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston Churchill"
        },
        {
            "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
            "author": "Christian D. Larson"
        },
        {
            "quote": "Success is stumbling from failure to failure with no loss of enthusiasm.",
            "author": "Winston S. Churchill"
        },
        {
            "quote": "The only way to achieve the impossible is to believe it is possible.",
            "author": "Charles Kingsleigh"
        },
        {
            "quote": "Success is not just about making money. It's about making a difference.",
            "author": "Unknown"
        },
        {
            "quote": "You don't have to be rich to travel well.",
            "author": "Eugene Fodor"
        },
        {
            "quote": "The road to success and the road to failure are almost exactly the same.",
            "author": "Colin R. Davis"
        },
        {
            "quote": "Your time is limited, don't waste it living someone else's life.",
            "author": "Steve Jobs"
        },
        {
            "quote": "Your attitude, not your aptitude, will determine your altitude.",
            "author": "Zig Ziglar"
        },
        {
            "quote": "Do not wait to strike till the iron is hot, but make it hot by striking.",
            "author": "William Butler Yeats"
        },
        {
            "quote": "It always seems impossible until it's done.",
            "author": "Nelson Mandela"
        },
        {
            "quote": "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
            "author": "Vince Lombardi"
        },
        {
            "quote": "Success is not how high you have climbed, but how you make a positive difference to the world.",
            "author": "Roy T. Bennett"
        },
        {
            "quote": "Believe you can and you're halfway there.",
            "author": "Theodore Roosevelt"
        },
        {
            "quote": "The only place where success comes before work is in the dictionary.",
            "author": "Vidal Sassoon"
        },
        {
            "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
            "author": "Jordan Belfort"
        },
        {
            "quote": "Success usually comes to those who are too busy to be looking for it.",
            "author": "Henry David Thoreau"
        },
        {
            "quote": "Don't be afraid to give up the good to go for the great.",
            "author": "John D. Rockefeller"
        },
        {
            "quote": "Opportunities don't happen. You create them.",
            "author": "Chris Grosser"
        },
        {
            "quote": "Success is not just about making money. It's about making a difference.",
            "author": "Unknown"
        },
        {
            "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            "author": "Albert Schweitzer"
        },
        {
            "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
            "author": "Jordan Belfort"
        },
        {
            "quote": "Don't watch the clock; do what it does. Keep going.",
            "author": "Sam Levenson"
        },
        {
            "quote": "The only way to achieve the impossible is to believe it is possible.",
            "author": "Charles Kingsleigh"
        },
        {
            "quote": "Success is not just about making money. It's about making a difference.",
            "author": "Unknown"
        },
        {
            "quote": "You don't have to be rich to travel well.",
            "author": "Eugene Fodor"
        },
        {
            "quote": "The road to success and the road to failure are almost exactly the same.",
            "author": "Colin R. Davis"
        },
        {
            "quote": "Your time is limited, don't waste it living someone else's life.",
            "author": "Steve Jobs"
        },
        {
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston Churchill"
        },
        {
            "quote": "Hard work beats talent when talent doesn't work hard.",
            "author": "Tim Notke"
        },
        {
            "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
            "author": "Christian D. Larson"
        },
        {
            "quote": "Success is stumbling from failure to failure with no loss of enthusiasm.",
            "author": "Winston S. Churchill"
        },
        {
            "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            "author": "Albert Schweitzer"
        },
        {
            "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
            "author": "Franklin D. Roosevelt"
        },
        {
            "quote": "Success is not just about making money. It's about making a difference.",
            "author": "Unknown"
        },
        {
            "quote": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
            "author": "Brian Tracy"
        },

]
}
