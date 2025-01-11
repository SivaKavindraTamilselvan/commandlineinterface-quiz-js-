let readlineSync = require("readline-sync");
let a = 0;
const database = {
    data: [
        {
            questions: "Name the national bird of India.",
            options: {
                a: "Peacock",
                b: "Crow",
                c: "Pigeon",
                d: "Sparrow"
            },
            correctAnswer: "a"
        },
        {
            questions: "What is the capital of India?",
            options: {
                a: "Mumbai",
                b: "Delhi",
                c: "Kolkata",
                d: "Chennai"
            },
            correctAnswer: "b"
        },
        {
            questions: "Which planet is known as the Red Planet?",
            options: {
                a: "Earth",
                b: "Venus",
                c: "Mars",
                d: "Jupiter"
            },
            correctAnswer: "c"
        },
        {
            questions: "What is the largest mammal in the world?",
            options: {
                a: "Elephant",
                b: "Blue Whale",
                c: "Giraffe",
                d: "Shark"
            },
            correctAnswer: "b"
        },
        {
            questions: "Which is the smallest continent by land area?",
            options: {
                a: "Europe",
                b: "Australia",
                c: "Antarctica",
                d: "South America"
            },
            correctAnswer: "b"
        },
        {
            questions: "Who wrote the national anthem of India?",
            options: {
                a: "Rabindranath Tagore",
                b: "Bankim Chandra Chatterjee",
                c: "Subhas Chandra Bose",
                d: "Mahatma Gandhi"
            },
            correctAnswer: "a"
        },
        {
            questions: "Which gas do plants absorb from the atmosphere?",
            options: {
                a: "Oxygen",
                b: "Nitrogen",
                c: "Carbon Dioxide",
                d: "Hydrogen"
            },
            correctAnswer: "c"
        },
        {
            questions: "What is the boiling point of water at sea level?",
            options: {
                a: "100°C",
                b: "90°C",
                c: "120°C",
                d: "80°C"
            },
            correctAnswer: "a"
        },
        {
            questions: "Which is the tallest mountain in the world?",
            options: {
                a: "K2",
                b: "Mount Everest",
                c: "Kangchenjunga",
                d: "Makalu"
            },
            correctAnswer: "b"
        },
        {
            questions: "Which is the fastest land animal?",
            options: {
                a: "Cheetah",
                b: "Lion",
                c: "Horse",
                d: "Leopard"
            },
            correctAnswer: "a"
        }
    ]
};

function show() {
    for (let i = 0; i < database.data.length; i++) {
        console.log(database.data[i].questions);
        for (let key in database.data[i].options) {
            console.log(`${key} - ${database.data[i].options[key]}`);
        }
        let selectedanswer = readlineSync.question('Enter your answer\n');
        while (selectedanswer != 'a' && selectedanswer != 'b' && selectedanswer != 'c' && selectedanswer != 'd') {
            console.log('Enter the options [a/b/c/d]');
            selectedanswer = readlineSync.question('Enter your answer\n');
        }
        console.log(`You have selecetd the option ${selectedanswer} - ${database.data[i].options[selectedanswer]}`);
        if (selectedanswer === database.data[i].correctAnswer) {
            a = a + 5;
            console.log('Congratulations ! Your answer is correct.')
        }
        else {
            a = a - 2;
            console.log('Oops ! Your option is wrong');
            console.log(`Correct answer is ${database.data[i].correctAnswer} - ${database.data[i].options[database.data[i].correctAnswer]}`);
        }
        console.log('\n\n');
    }
}
show();
console.log(`Your score for the quiz is ${a} / ${database.data.length * 5}`);
