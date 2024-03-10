function showQuiz(quizId) {
    // Hide all quiz elements
    var quizzes = document.querySelectorAll('.quiz');
    quizzes.forEach(function(quiz) {
        quiz.style.display = 'none';
    });

    // Show the selected quiz
    var selectedQuiz = document.getElementById(quizId);
    if (selectedQuiz) {
        selectedQuiz.style.display = 'block';
    }
}

function analyzeADHD() {
    var q1 = parseInt(document.getElementById('q1').value);
    // Add more questions' values and scoring logic here

    // Calculate total score
    var totalScore = q1;
    // Add scores from other questions

    var resultText = '';

    if (totalScore <= 5) {
        resultText = "Your responses suggest that you may not be experiencing significant symptoms of ADHD. It's always good to stay mindful of your mental health.";
    } else if (totalScore <= 10) {
        resultText = "Your responses indicate mild symptoms of ADHD. Consider speaking with a healthcare professional for further evaluation and support.";
    } else if (totalScore <= 15) {
        resultText = "Your responses suggest moderate symptoms of ADHD. It's advisable to consult with a healthcare professional for a comprehensive assessment and guidance.";
    } else {
        resultText = "Your responses indicate significant symptoms of ADHD. Seeking professional help and support is highly recommended. You're not alone in this journey.";
    }

    document.getElementById('adhd-result').innerText = resultText;
}