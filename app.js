const questionList = [
    {
        question: "What's Your Typical Breakfast?",
        optionA: "eggs & bacon",
        optionB: "pancakes",
        optionC: "fruit & yogurt",
        optionD: "black coffee",
        retrieverOption: "optionB",
        pomeranianOption: "optionC",
        bulldogOption: "optionA",
        catOption: "optionD"
    },

    {
        question: "What Will You Be Doing This Weekend?",
        optionA: "working out",
        optionB: "going shopping",
        optionC: "hanging out with friends",
        optionD: "staying home",
        retrieverOption: "optionC",
        pomeranianOption: "optionB",
        bulldogOption: "optionA",
        catOption: "optionD"
    },

    {
        question: "Party Just Started - Where Are You Headed?",
        optionA: "straight to the dance floor",
        optionB: "grabbing a drink",
        optionC: "I'm still 30mins away",
        optionD: "I'm not going",
        retrieverOption: "optionA",
        pomeranianOption: "optionC",
        bulldogOption: "optionB",
        catOption: "optionD"
    },

    {
        question: "Spending Sunday on the Couch - What Are You Watching?",
        optionA: "the game is on",
        optionB: "Too Hot to Handle",
        optionC: "re-watching Friends",
        optionD: "a horror movie",
        retrieverOption: "optionC",
        pomeranianOption: "optionB",
        bulldogOption: "optionA",
        catOption: "optionD"
    },

    {
        question: "What's Your Starbucks Order?",
        optionA: "Pumpkin Spice Latte",
        optionB: "Double Double",
        optionC: "Frappuccino",
        optionD: "Americano",
        retrieverOption: "optionC",
        pomeranianOption: "optionA",
        bulldogOption: "optionB",
        catOption: "optionD"
    },

    {
        question: "How Would Your Friends Describe You?",
        optionA: "an introvert",
        optionB: "strong",
        optionC: "stylish",
        optionD: "an extrovert",
        retrieverOption: "optionD",
        pomeranianOption: "optionC",
        bulldogOption: "optionB",
        catOption: "optionA"
    },

    {
        question: "What Are You Ordering At The Bar?",
        optionA: "a beer",
        optionB: "the signature cocktail",
        optionC: "sangria",
        optionD: "whiskey",
        retrieverOption: "optionB",
        pomeranianOption: "optionC",
        bulldogOption: "optionA",
        catOption: "optionD"
    },

    {
        question: "Which is Your Favourite Holiday?",
        optionA: "Christmas",
        optionB: "Valentine's Day",
        optionC: "New Years Eve",
        optionD: "Halloween",
        retrieverOption: "optionA",
        pomeranianOption: "optionB",
        bulldogOption: "optionC",
        catOption: "optionD"
    },

    {
        question: "What's Your Favourite Fruit?",
        optionA: "grapefruit",
        optionB: "açaí",
        optionC: "cherries",
        optionD: "apples",
        retrieverOption: "optionC",
        pomeranianOption: "optionB",
        bulldogOption: "optionD",
        catOption: "optionA"
    },

    {
        question: "Who's Your Favourite Cartoon Dog?",
        optionA: "Mr. Peanut Butter",
        optionB: "Lady",
        optionC: "Clifford",
        optionD: "Scooby Doo",
        retrieverOption: "optionC",
        pomeranianOption: "optionB",
        bulldogOption: "optionD",
        catOption: "optionA"
    },

    {
        question: "What's Your Favourite Winter Olympic Sport?",
        optionA: "figure skating",
        optionB: "hockey",
        optionC: "snowboarding",
        optionD: "freestyle skiing",
        retrieverOption: "optionC",
        pomeranianOption: "optionA",
        bulldogOption: "optionB",
        catOption: "optionD"
    },

    {
        question: "What's Your Favourite Summer Olympic Sport?",
        optionA: "basketball",
        optionB: "archery",
        optionC: "gymnastics",
        optionD: "skateboarding",
        retrieverOption: "optionD",
        pomeranianOption: "optionC",
        bulldogOption: "optionA",
        catOption: "optionB"
    },


    {
        question: "What Superpower Would You Want to Have?",
        optionA: "flying",
        optionB: "invisibility",
        optionC: "super strength",
        optionD: "teleportation",
        retrieverOption: "optionA",
        pomeranianOption: "optionD",
        bulldogOption: "optionC",
        catOption: "optionB"
    },

]

// establish variables
let indexNumber = -1;
let questionNumber = 0;
let currentAnswer;
let retrieverScore = 0;
let pomeranianScore = 0;
let bulldogScore = 0;
let catScore = 0;

const $options = $("input.option");

// have 10 shuffled questions in the quiz
let shuffledQuestions = [] 

function shuffleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questionList[Math.floor(Math.random() * questionList.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

// display questions to the dom
function nextQuestion() {
    const currentQuestion = shuffledQuestions[indexNumber];
    $("#questionNumber").html(questionNumber)
    $("#question").html(currentQuestion.question)
    $("#optionALabel").html(currentQuestion.optionA)
    $("#optionBLabel").html(currentQuestion.optionB)
    $("#optionCLabel").html(currentQuestion.optionC)
    $("#optionDLabel").html(currentQuestion.optionD) 
};

// update quiz
function loadNewQuestion() {
    if(indexNumber <= shuffledQuestions.length -1 ) {
        nextQuestion();
        return true;
    } 
    else if (indexNumber = shuffledQuestions.length) {
        return false;
    }
}

// find users answer -> then check the answer
function selectedAnswer() {
    for(let i = 0; i < $options.length; i++) {
        const currentOption = $options[i];
        if (currentOption.checked === true) {
            let currentAnswer = currentOption.value
            console.log(currentAnswer);
        }
    }
};

function checkAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber];
    const currentRetAnswer = currentQuestion.retrieverOption;
    const currentPomAnswer = currentQuestion.pomeranianOption;
    const currentBulAnswer = currentQuestion.bulldogOption;
    const currentCatAnswer = currentQuestion.catOption;
    for(let i = 0; i < $options.length; i++) {
        const currentOption = $options[i];
        if (currentOption.checked === true) {
            let currentAnswer = currentOption.value;
            if (currentAnswer === currentRetAnswer) {
                retrieverScore++;
            } else if (currentAnswer === currentPomAnswer) {
                pomeranianScore++;
            } else if (currentAnswer === currentBulAnswer) {
                bulldogScore++;
            } else if (currentAnswer === currentCatAnswer) {
                catScore++;
            }
        };
    };
};

function resetOptionBackground() {
    for(let i = 0; i < $options.length; i++) {
        const currentOption = $options[i];
        currentOption.checked = false;
    };
}

function hideStart() {
    $(".quizStartPage").hide();
    $(".quizMain").css("display", "flex");
}

function hideQuiz() {
    $(".quizMain").hide();
    $(".quizEndPage").css("display", "flex");
}

function restartQuiz() {
    $(".quizEndPage").hide();
    $(".quizStartPage").css("display", "flex");
}

// display users final results!
function showScore() {
    if (retrieverScore >= bulldogScore && retrieverScore >= pomeranianScore && retrieverScore >= catScore) {
        $('.resultsH1').html("You're a Golden Retriever!");
    } else if (bulldogScore >= retrieverScore && bulldogScore >= pomeranianScore && bulldogScore >= catScore) {
        $('.resultsH1').html("You're a French Bulldog!");
    } else if (pomeranianScore >= bulldogScore && pomeranianScore >= retrieverScore && pomeranianScore >= catScore) {
        $('.resultsH1').html("You're a Pomeranian!");
    } else if (catScore >= bulldogScore && catScore >= pomeranianScore && catScore >= retrieverScore) {
        $('.resultsH1').html("You're Not a Dog...<br>You're a Cat!");
    }
}

// bringing it together
function nextButton() {
    checkAnswer()
    resetOptionBackground()
    indexNumber++;
    questionNumber++;
        if (loadNewQuestion()) {
        } else {
            showScore();
            hideQuiz();
        }

}

// actionable code on the page:
$(function() {
	
    shuffleQuestions();

    // make keyboard accessible
    $("label.option").on("keypress", function(){
        let radioElement = this.previousElementSibling;
        radioElement.checked = true;
    });

    // event handler for Start button
    $(".quizStart").on("click", function(){
        indexNumber++;
        questionNumber++;
        setTimeout(() => {
            loadNewQuestion();
            $('.questionNumber').html(questionNumber);
            hideStart();
        }, 200);
    });

    // event handler for Next button
    $(".nextQuestion").on("click", function(){
        setTimeout(() => {
            nextButton();
            $('.questionNumber').html(questionNumber);
        }, 200);
    })
    // event handler for Restart button
    $(".restartButton").on("click", function(){
        indexNumber = -1;
        questionNumber = 0;
        retrieverScore = 0;
        pomeranianScore = 0;
        bulldogScore = 0;
        catScore = 0;
        shuffledQuestions = [];
        setTimeout(() => {
            shuffleQuestions();
            restartQuiz();
        }, 500);
    }) 

});