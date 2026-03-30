// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const categoryCards = document.querySelectorAll('.category-card');
const questionCountSelect = document.getElementById('question-count');
const timePerQuestionSelect = document.getElementById('time-per-question');
const difficultySelect = document.getElementById('difficulty');
const quitBtn = document.getElementById('quit-btn');
const nextBtn = document.getElementById('next-btn');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const currentScoreEl = document.getElementById('current-score');
const timerEl = document.getElementById('timer');
const timerProgress = document.getElementById('timer-progress');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const feedbackContainer = document.getElementById('feedback-container');
const correctAnswerText = document.getElementById('correct-answer-text');
const timeoutAnswerText = document.getElementById('timeout-answer-text');

// Results screen elements
const scorePercent = document.getElementById('score-percent');
const scoreRing = document.getElementById('score-ring');
const correctCount = document.getElementById('correct-count');
const incorrectCount = document.getElementById('incorrect-count');
const timeTaken = document.getElementById('time-taken');
const averageTime = document.getElementById('average-time');
const accuracyRate = document.getElementById('accuracy-rate');
const speedScore = document.getElementById('speed-score');
const quizRank = document.getElementById('quiz-rank');
const reviewList = document.getElementById('review-list');
const playAgainBtn = document.getElementById('play-again-btn');
const newQuizBtn = document.getElementById('new-quiz-btn');

// Audio elements
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const timerSound = document.getElementById('timer-sound');

// Quiz Data
// Quiz Data - COMPLETE WITH 6 CATEGORIES
const quizQuestions = {
    general: [
        {
            question: "What is the capital city of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: 3,
            difficulty: "easy"
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What is the longest river in the world?",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "In which country would you find the Great Barrier Reef?",
            options: ["Brazil", "Australia", "Mexico", "Thailand"],
            correct: 1,
            difficulty: "hard"
        }
    ],
    
    science: [
        {
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
            correct: 0,
            difficulty: "hard"
        },
        {
            question: "What does DNA stand for?",
            options: ["Deoxyribonucleic Acid", "Dinucleic Acid", "Deoxyribose Acid", "Diabetic Acid"],
            correct: 0,
            difficulty: "medium"
        },
        {
            question: "Which gas is most abundant in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What is the smallest unit of matter?",
            options: ["Atom", "Molecule", "Cell", "Electron"],
            correct: 0,
            difficulty: "medium"
        },
        {
            question: "Which planet has the most moons?",
            options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "What is H₂O commonly known as?",
            options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What force pulls objects toward the Earth?",
            options: ["Magnetism", "Gravity", "Friction", "Inertia"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "Which organ pumps blood throughout the body?",
            options: ["Liver", "Lungs", "Heart", "Brain"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What planet is known for its rings?",
            options: ["Jupiter", "Mars", "Saturn", "Venus"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What is the process by which plants make food?",
            options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
            correct: 1,
            difficulty: "medium"
        }
    ],
    
    history: [
        {
            question: "Who was the first president of the United States?",
            options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "In which year did the Titanic sink?",
            options: ["1905", "1912", "1920", "1898"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "Which ancient civilization built the pyramids?",
            options: ["Romans", "Greeks", "Egyptians", "Mayans"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "Who discovered America?",
            options: ["Christopher Columbus", "Vasco da Gama", "Marco Polo", "Ferdinand Magellan"],
            correct: 0,
            difficulty: "medium"
        },
        {
            question: "What year did World War I begin?",
            options: ["1912", "1914", "1916", "1918"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "Which empire was ruled by Julius Caesar?",
            options: ["Greek Empire", "Roman Empire", "Ottoman Empire", "British Empire"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "Who was the first man to walk on the moon?",
            options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "Which wall divided East and West Berlin?",
            options: ["Great Wall", "Berlin Wall", "Iron Wall", "Freedom Wall"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "Who wrote the Declaration of Independence?",
            options: ["Benjamin Franklin", "Thomas Jefferson", "John Adams", "George Washington"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "What was the main cause of the Cold War?",
            options: ["Economic competition", "Territorial disputes", "Ideological differences", "Religious conflicts"],
            correct: 2,
            difficulty: "hard"
        }
    ],
    
    geography: [
        {
            question: "Which country has the largest population?",
            options: ["India", "United States", "China", "Indonesia"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What is the capital of Japan?",
            options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
            correct: 0,
            difficulty: "medium"
        },
        {
            question: "What is the longest river in Africa?",
            options: ["Congo River", "Nile River", "Niger River", "Zambezi River"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "South Korea", "Japan", "Thailand"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Which U.S. state is known as the Sunshine State?",
            options: ["California", "Florida", "Texas", "Hawaii"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Which mountain range separates Europe and Asia?",
            options: ["Alps", "Himalayas", "Ural Mountains", "Andes"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Which African country was never colonized?",
            options: ["Ethiopia", "Egypt", "South Africa", "Kenya"],
            correct: 0,
            difficulty: "hard"
        }
    ],
    
    technology: [
        {
            question: "Who is the founder of Microsoft?",
            options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "What does 'HTTP' stand for?",
            options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Process", "High Text Transfer Process"],
            correct: 0,
            difficulty: "medium"
        },
        {
            question: "Which company developed the Android operating system?",
            options: ["Apple", "Microsoft", "Google", "Samsung"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What year was the first iPhone released?",
            options: ["2005", "2007", "2009", "2011"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "What does 'CPU' stand for?",
            options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
            correct: 0,
            difficulty: "easy"
        },
        {
            question: "Which programming language is known for web development?",
            options: ["Python", "Java", "JavaScript", "C++"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What does 'URL' stand for?",
            options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"],
            correct: 0,
            difficulty: "medium"
        },
        {
            question: "Who invented the World Wide Web?",
            options: ["Steve Jobs", "Bill Gates", "Tim Berners-Lee", "Mark Zuckerberg"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "What is the most popular database language?",
            options: ["Python", "Java", "SQL", "HTML"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Which of these is NOT a programming language?",
            options: ["HTML", "Python", "Java", "C++"],
            correct: 0,
            difficulty: "easy"
        }
    ],
    
    entertainment: [
        {
            question: "Who directed the movie 'Titanic'?",
            options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Peter Jackson"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "Which singer is known as the 'Queen of Pop'?",
            options: ["Beyoncé", "Madonna", "Taylor Swift", "Lady Gaga"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "What is the highest-grossing film of all time?",
            options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "Which TV show features characters named Ross, Rachel, and Monica?",
            options: ["How I Met Your Mother", "The Office", "Friends", "Seinfeld"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "Who wrote the Harry Potter series?",
            options: ["J.R.R. Tolkien", "Stephen King", "J.K. Rowling", "George R.R. Martin"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "Which artist painted 'Starry Night'?",
            options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "What is the name of the fictional continent in Game of Thrones?",
            options: ["Middle-earth", "Narnia", "Westeros", "Hogwarts"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "Which band performed the song 'Bohemian Rhapsody'?",
            options: ["The Beatles", "Led Zeppelin", "Queen", "The Rolling Stones"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Who won the first season of American Idol?",
            options: ["Kelly Clarkson", "Carrie Underwood", "Jennifer Hudson", "Fantasia Barrino"],
            correct: 0,
            difficulty: "hard"
        },
        {
            question: "Which video game features a character named Mario?",
            options: ["Sonic the Hedgehog", "Super Mario Bros", "The Legend of Zelda", "Pokémon"],
            correct: 1,
            difficulty: "easy"
        }
    ]
};

// Quiz State
let currentCategory = 'general';
let selectedCategory = 'general';
let questionCount = 10;
let timePerQuestion = 20;
let currentDifficulty = 'medium';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft;
let questions = [];
let userAnswers = [];
let quizStartTime;
let quizEndTime;

// Initialize
function init() {
    loadHighScore();
    setupEventListeners();
    selectDefaultCategory();
    
    console.log('Quiz App initialized!');
}

// Load high score from localStorage
function loadHighScore() {
    const highScore = localStorage.getItem('quizHighScore') || 0;
    document.getElementById('high-score').textContent = `High Score: ${highScore}`;
}

// Save high score
function saveHighScore(score) {
    const currentHighScore = localStorage.getItem('quizHighScore') || 0;
    if (score > currentHighScore) {
        localStorage.setItem('quizHighScore', score);
        document.getElementById('high-score').textContent = `High Score: ${score}`;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Category selection
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedCategory = card.dataset.category;
        });
    });

    // Start button
    startBtn.addEventListener('click', startQuiz);

    // Settings changes
    questionCountSelect.addEventListener('change', (e) => {
        questionCount = parseInt(e.target.value);
    });

    timePerQuestionSelect.addEventListener('change', (e) => {
        timePerQuestion = parseInt(e.target.value);
    });

    difficultySelect.addEventListener('change', (e) => {
        currentDifficulty = e.target.value;
    });

    // Quiz controls
    nextBtn.addEventListener('click', nextQuestion);
    quitBtn.addEventListener('click', quitQuiz);

    // Results actions
    playAgainBtn.addEventListener('click', playAgain);
    newQuizBtn.addEventListener('click', newQuiz);
}

// Select default category
function selectDefaultCategory() {
    categoryCards.forEach(card => {
        if (card.dataset.category === 'general') {
            card.classList.add('active');
        }
    });
}

// Start quiz
function startQuiz() {
    // Get selected settings
    currentCategory = selectedCategory;
    questionCount = parseInt(questionCountSelect.value);
    timePerQuestion = parseInt(timePerQuestionSelect.value);
    currentDifficulty = difficultySelect.value;

    // Prepare questions
    prepareQuestions();

    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    quizStartTime = Date.now();

    // Update UI
    currentScoreEl.textContent = score;
    totalQuestionsEl.textContent = questionCount;

    // Switch to quiz screen
    switchScreen('quiz');

    // Start first question
    loadQuestion();
}

// Prepare questions based on category and difficulty
function prepareQuestions() {
    const allQuestions = quizQuestions[currentCategory] || quizQuestions.general;
    
    // Filter by difficulty if not "all"
    let filteredQuestions = allQuestions;
    if (currentDifficulty !== 'all') {
        filteredQuestions = allQuestions.filter(q => q.difficulty === currentDifficulty);
    }
    
    // Shuffle questions
    filteredQuestions = shuffleArray(filteredQuestions);
    
    // Take requested number
    questions = filteredQuestions.slice(0, questionCount);
    
    // If not enough questions, add some from general
    if (questions.length < questionCount) {
        const needed = questionCount - questions.length;
        const generalQuestions = quizQuestions.general
            .filter(q => q.difficulty === currentDifficulty || currentDifficulty === 'all')
            .slice(0, needed);
        questions = [...questions, ...generalQuestions];
    }
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Switch between screens
function switchScreen(screenName) {
    // Hide all screens
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');

    // Show selected screen
    switch(screenName) {
        case 'start':
            startScreen.classList.add('active');
            break;
        case 'quiz':
            quizScreen.classList.add('active');
            break;
        case 'results':
            resultsScreen.classList.add('active');
            break;
    }
}

// Initialize the app
init();
// Load current question
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    
    // Update UI
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.question;
    
    // Clear previous options
    optionsGrid.innerHTML = '';
    
    // Create option cards
    question.options.forEach((option, index) => {
        const optionCard = createOptionCard(option, index);
        optionsGrid.appendChild(optionCard);
    });
    
    // Hide feedback
    feedbackContainer.classList.remove('show');
    feedbackContainer.style.display = 'none';
    
    // Reset timer
    startTimer();
    
    // Update progress
    updateProgress();
    
    // Enable next button
    nextBtn.disabled = true;
    nextBtn.textContent = 'Next Question';
}

// Create option card element
function createOptionCard(optionText, index) {
    const template = document.querySelector('.option-card.template');
    const optionCard = template.cloneNode(true);
    optionCard.classList.remove('template');
    optionCard.style.display = 'flex';
    optionCard.dataset.index = index;
    
    // Update content
    const optionLetter = optionCard.querySelector('.option-letter');
    const optionTextEl = optionCard.querySelector('.option-text');
    
    optionLetter.textContent = String.fromCharCode(65 + index); // A, B, C, D
    optionTextEl.textContent = optionText;
    
    // Add click event
    optionCard.addEventListener('click', () => selectOption(optionCard, index));
    
    return optionCard;
}

// Select an option
function selectOption(optionCard, selectedIndex) {
    // Prevent multiple selections
    if (optionCard.classList.contains('disabled')) return;
    
    // Disable all options
    disableAllOptions();
    
    // Stop timer
    stopTimer();
    
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    // Mark selected option
    optionCard.classList.add('selected');
    
    // Mark correct option
    const correctOption = optionsGrid.querySelector(`[data-index="${question.correct}"]`);
    correctOption.classList.add('correct');
    
    // If wrong, mark selected as incorrect
    if (!isCorrect) {
        optionCard.classList.add('incorrect');
    }
    
    // Update score
    if (isCorrect) {
        score += 10;
        currentScoreEl.textContent = score;
        playSound(correctSound);
        showFeedback('correct');
    } else {
        playSound(wrongSound);
        showFeedback('wrong', question.options[question.correct]);
    }
    
    // Store user answer
    userAnswers.push({
        question: question.question,
        selected: selectedIndex,
        correct: question.correct,
        isCorrect: isCorrect,
        options: question.options
    });
    
    // Enable next button
    nextBtn.disabled = false;
}

// Disable all options
function disableAllOptions() {
    const allOptions = optionsGrid.querySelectorAll('.option-card');
    allOptions.forEach(option => {
        option.classList.add('disabled');
        option.style.cursor = 'not-allowed';
    });
}

// Start timer for current question
function startTimer() {
    timeLeft = timePerQuestion;
    timerEl.textContent = timeLeft;
    timerProgress.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        // Update progress bar
        const progressPercent = (timeLeft / timePerQuestion) * 100;
        timerProgress.style.width = `${progressPercent}%`;
        
        // Change color when time is running out
        if (timeLeft <= 5) {
            timerEl.style.color = '#ff4757';
            timerProgress.style.background = 'linear-gradient(to right, #ff4757, #ff3838)';
            
            // Play warning sound
            if (timeLeft === 5) {
                playSound(timerSound);
            }
        }
        
        // Time's up
        if (timeLeft <= 0) {
            timeUp();
        }
    }, 1000);
}

// Stop timer
function stopTimer() {
    clearInterval(timer);
}

// Handle time up
function timeUp() {
    stopTimer();
    disableAllOptions();
    
    const question = questions[currentQuestionIndex];
    const correctOption = optionsGrid.querySelector(`[data-index="${question.correct}"]`);
    correctOption.classList.add('correct');
    
    // Store user answer (timeout)
    userAnswers.push({
        question: question.question,
        selected: null,
        correct: question.correct,
        isCorrect: false,
        options: question.options,
        timeout: true
    });
    
    showFeedback('timeout', question.options[question.correct]);
    playSound(wrongSound);
    
    // Enable next button
    nextBtn.disabled = false;
}

// Show feedback
function showFeedback(type, correctAnswer = '') {
    feedbackContainer.style.display = 'block';
    setTimeout(() => {
        feedbackContainer.classList.add('show');
    }, 10);
    
    // Hide all feedback types
    document.querySelectorAll('.feedback').forEach(fb => {
        fb.style.display = 'none';
    });
    
    // Show correct feedback
    if (type === 'correct') {
        document.querySelector('.correct-feedback').style.display = 'flex';
    }
    // Show wrong feedback
    else if (type === 'wrong') {
        document.querySelector('.wrong-feedback').style.display = 'flex';
        correctAnswerText.textContent = correctAnswer;
    }
    // Show timeout feedback
    else if (type === 'timeout') {
        document.querySelector('.timeout-feedback').style.display = 'flex';
        timeoutAnswerText.textContent = correctAnswer;
    }
}

// Update progress
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
}

// Play sound
function playSound(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play().catch(e => console.log('Audio play failed:', e));
}
// Next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// End quiz and show results
function endQuiz() {
    quizEndTime = Date.now();
    stopTimer();
    
    // Calculate results
    calculateResults();
    
    // Update high score
    saveHighScore(score);
    
    // Switch to results screen
    switchScreen('results');
    
    // Show confetti for good score
    if (score >= 70) {
        showConfetti();
    }
}

// Calculate quiz results
function calculateResults() {
    const totalTime = (quizEndTime - quizStartTime) / 1000; // in seconds
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    const totalQuestions = questions.length;
    const accuracy = (correctAnswers / totalQuestions) * 100;
    const averageTimePerQuestion = totalTime / totalQuestions;
    
    // Update UI
    scorePercent.textContent = `${Math.round(accuracy)}%`;
    correctCount.textContent = correctAnswers;
    incorrectCount.textContent = totalQuestions - correctAnswers;
    
    // Format time
    const minutes = Math.floor(totalTime / 60);
    const seconds = Math.floor(totalTime % 60);
    timeTaken.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    averageTime.textContent = `${Math.round(averageTimePerQuestion)}s`;
    accuracyRate.textContent = `${Math.round(accuracy)}%`;
    
    // Determine speed score
    if (averageTimePerQuestion < 10) {
        speedScore.textContent = "Fast";
    } else if (averageTimePerQuestion < 20) {
        speedScore.textContent = "Good";
    } else {
        speedScore.textContent = "Slow";
    }
    
    // Determine rank
    let rank = "Beginner";
    if (accuracy >= 90) rank = "Expert";
    else if (accuracy >= 70) rank = "Advanced";
    else if (accuracy >= 50) rank = "Intermediate";
    quizRank.textContent = rank;
    
    // Update progress ring
    const circumference = 565.48; // 2 * π * r (r=90)
    const offset = circumference - (accuracy / 100) * circumference;
    scoreRing.style.strokeDashoffset = offset;
    
    // Update results title based on score
    const resultsTitle = document.getElementById('results-title');
    const resultsSubtitle = document.getElementById('results-subtitle');
    const resultsIcon = document.getElementById('results-icon');
    
    if (accuracy >= 90) {
        resultsTitle.textContent = "Outstanding!";
        resultsSubtitle.textContent = "You're a true quiz master!";
        resultsIcon.innerHTML = '<i class="fas fa-crown"></i>';
    } else if (accuracy >= 70) {
        resultsTitle.textContent = "Great Job!";
        resultsSubtitle.textContent = "Impressive knowledge!";
        resultsIcon.innerHTML = '<i class="fas fa-trophy"></i>';
    } else if (accuracy >= 50) {
        resultsTitle.textContent = "Good Effort!";
        resultsSubtitle.textContent = "You did well!";
        resultsIcon.innerHTML = '<i class="fas fa-medal"></i>';
    } else {
        resultsTitle.textContent = "Keep Practicing!";
        resultsSubtitle.textContent = "Try again to improve your score!";
        resultsIcon.innerHTML = '<i class="fas fa-redo"></i>';
    }
    
    // Populate review list
    populateReviewList();
}

// Populate review list
function populateReviewList() {
    reviewList.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const reviewItem = createReviewItem(answer, index);
        reviewList.appendChild(reviewItem);
    });
}

// Create review item
function createReviewItem(answer, questionIndex) {
    const reviewItem = document.createElement('div');
    
    let statusClass = '';
    let statusText = '';
    let answerClass = '';
    
    if (answer.timeout) {
        statusClass = 'timeout';
        statusText = 'Time\'s Up';
        answerClass = 'incorrect';
    } else if (answer.isCorrect) {
        statusClass = 'correct';
        statusText = 'Correct';
        answerClass = 'correct';
    } else {
        statusClass = 'incorrect';
        statusText = 'Incorrect';
        answerClass = 'incorrect';
    }
    
    reviewItem.className = `review-item ${statusClass}`;
    reviewItem.innerHTML = `
        <div class="review-header">
            <div class="review-question">${questionIndex + 1}. ${answer.question}</div>
            <div class="review-status ${statusClass}">${statusText}</div>
        </div>
        <div class="review-details">
            <div>
                Your answer: <span class="review-answer ${answerClass}">
                    ${answer.selected !== null ? answer.options[answer.selected] : 'No answer'}
                </span>
            </div>
            <div>
                Correct answer: <span class="review-answer correct">${answer.options[answer.correct]}</span>
            </div>
        </div>
    `;
    
    return reviewItem;
}

// Quit quiz
function quitQuiz() {
    if (confirm('Are you sure you want to quit the quiz? Your progress will be lost.')) {
        switchScreen('start');
        stopTimer();
    }
}

// Play again (same settings)
function playAgain() {
    // Reset and start again with same settings
    startQuiz();
}

// New quiz (go back to start)
function newQuiz() {
    switchScreen('start');
}

// Show confetti animation
function showConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// Get random color for confetti
function getRandomColor() {
    const colors = ['#6c63ff', '#36d1dc', '#ffd700', '#ff4757', '#2ecc71', '#ff8c00'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add confetti CSS
const confettiCSS = `
.confetti {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #f00;
    top: -20px;
    opacity: 0.8;
    animation: fall linear forwards;
}

@keyframes fall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = confettiCSS;
document.head.appendChild(style);
// Add this function after line 350 (after loadQuestion function)
function debugShowOptions() {
    const question = questions[currentQuestionIndex];
    if (!question) return;
    
    console.log("DEBUG - Question:", question);
    console.log("DEBUG - Options:", question.options);
    
    // Manually create options if grid is empty
    if (optionsGrid.innerHTML.trim() === '') {
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option-card';
            div.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            `;
            div.addEventListener('click', () => selectOption(div, index));
            optionsGrid.appendChild(div);
        });
        console.log("DEBUG - Options manually created");
    }
}

// Call it after loadQuestion
// In loadQuestion function, add this at the end:
setTimeout(debugShowOptions, 100);
// Replace loadQuestion function with this:
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    
    // Update UI
    currentQuestionEl.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.question;
    
    // Clear previous options
    optionsGrid.innerHTML = '';
    
    // Create option cards - SIMPLIFIED VERSION
    question.options.forEach((option, index) => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.dataset.index = index;
        
        optionCard.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option}</div>
        `;
        
        optionCard.addEventListener('click', () => selectOption(optionCard, index));
        optionsGrid.appendChild(optionCard);
    });
    
    // Hide feedback
    feedbackContainer.classList.remove('show');
    feedbackContainer.style.display = 'none';
    
    // Reset timer
    startTimer();
    
    // Update progress
    updateProgress();
    
    // Enable next button
    nextBtn.disabled = true;
    nextBtn.textContent = 'Next Question';
    
    // Debug
    console.log("Question loaded:", question.question);
    console.log("Options:", question.options);
}