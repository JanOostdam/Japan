// Game data
const gameData = {
    memory: [
        { term: 'Aardkorst', definition: 'De buitenste laag van de aarde, opgebouwd uit platen.' },
        { term: 'Tektonische platen', definition: 'Grote stukken aardkorst die langzaam bewegen.' },
        { term: 'Midoceanische rug', definition: 'Een langgerekte bergketen op de oceaanbodem waar platen uit elkaar bewegen.' },
        { term: 'Subductie', definition: 'Het naar beneden duiken van een oceanische plaat onder een continentale plaat.' },
        { term: 'Aardbeving', definition: 'Trilling van de aarde door plotselinge verschuivingen in de aardkorst.' },
        { term: 'Epicentrum', definition: 'Punt op het aardoppervlak recht boven de plek waar een aardbeving ontstaat.' },
        { term: 'Magma', definition: 'Gesmolten gesteente in de aardmantel.' },
        { term: 'Lava', definition: 'Magma dat uit een vulkaan komt.' }
    ],
    quiz: [
        {
            question: 'Waarom heeft Japan veel aardbevingen?',
            options: [
                'Omdat het op het kruispunt van vier tektonische platen ligt',
                'Omdat het een eiland is',
                'Omdat het in de Grote Oceaan ligt',
                'Omdat het een vulkanisch eiland is'
            ],
            correct: 0,
            hint: 'Denk aan de beweging van de platen en waar Japan precies ligt op de wereldkaart.'
        },
        {
            question: 'Wat is de Ring van Vuur?',
            options: [
                'Een vulkaan in Japan',
                'Een gebied rondom de Grote Oceaan met veel aardbevingen en vulkanen',
                'Een bergketen in Japan',
                'Een tsunami-waarschuwingssysteem'
            ],
            correct: 1,
            hint: 'Dit gebied vormt een cirkel rondom de Grote Oceaan en is bekend om zijn vulkanische activiteit.'
        },
        {
            question: 'Wat is het verschil tussen magma en lava?',
            options: [
                'Er is geen verschil',
                'Magma is vloeibaar, lava is vast',
                'Magma zit in de aarde, lava komt uit een vulkaan',
                'Lava is heter dan magma'
            ],
            correct: 2,
            hint: 'Denk aan waar je magma en lava kunt vinden. Waar zie je lava meestal?'
        },
        {
            question: 'Wat is een seismoloog?',
            options: [
                'Een vulkaanonderzoeker',
                'Een wetenschapper die aardbevingen bestudeert',
                'Een tsunami-expert',
                'Een geoloog die gesteenten onderzoekt'
            ],
            correct: 1,
            hint: 'Het woord "seismo" komt uit het Grieks en betekent "trilling" of "schok".'
        },
        {
            question: 'Wat is het epicentrum van een aardbeving?',
            options: [
                'De plek waar de aardbeving het sterkst is',
                'Het punt op het aardoppervlak boven de aardbeving',
                'De diepte waar de aardbeving ontstaat',
                'De plek waar de meeste schade is'
            ],
            correct: 1,
            hint: 'Het woord "epi" betekent "boven" of "op". Waar zou het epicentrum dan moeten zijn?'
        },
        {
            question: 'Wat is een tsunami?',
            options: [
                'Een grote golf veroorzaakt door een aardbeving onder zee',
                'Een vulkaanuitbarsting onder water',
                'Een storm op zee',
                'Een onderzeese aardverschuiving'
            ],
            correct: 0,
            hint: 'Tsunami\'s ontstaan vaak na een grote beweging onder water. Wat voor beweging zou dat kunnen zijn?'
        },
        {
            question: 'Wat is subductie?',
            options: [
                'Het uitbarsten van een vulkaan',
                'Het naar beneden duiken van een oceanische plaat',
                'Het omhoog komen van magma',
                'Het ontstaan van een aardbeving'
            ],
            correct: 1,
            hint: 'Het woord "sub" betekent "onder". Wat zou er dan onder iets anders duiken?'
        },
        {
            question: 'Wat is de functie van een seismograaf?',
            options: [
                'Het meten van vulkanische activiteit',
                'Het registreren van aardbevingen',
                'Het voorspellen van tsunami\'s',
                'Het meten van de temperatuur van lava'
            ],
            correct: 1,
            hint: 'Een seismograaf meet trillingen. Wat voor trillingen zouden dat kunnen zijn?'
        }
    ],
    truefalse: [
        {
            statement: 'Japan heeft strenge bouwvoorschriften voor aardbevingsbestendige gebouwen.',
            correct: true
        },
        {
            statement: 'Een tsunami wordt altijd veroorzaakt door een vulkaanuitbarsting.',
            correct: false
        },
        {
            statement: 'Japan ligt in de Ring van Vuur.',
            correct: true
        },
        {
            statement: 'Endogene krachten komen van buiten de aarde.',
            correct: false
        }
    ],
    plates: {
        plates: [
            { name: 'Euraziatische plaat', color: '#FF6B6B' },
            { name: 'Noord-Amerikaanse plaat', color: '#4ECDC4' },
            { name: 'Filipijnse plaat', color: '#FFE66D' },
            { name: 'Pacifische plaat', color: '#95A5A6' }
        ],
        positions: [
            { plate: 0, x: 40, y: 30 }, // Euraziatische plaat
            { plate: 1, x: 60, y: 30 }, // Noord-Amerikaanse plaat
            { plate: 2, x: 40, y: 50 }, // Filipijnse plaat
            { plate: 3, x: 60, y: 50 }  // Pacifische plaat
        ]
    },
    volcano: {
        types: [
            {
                name: "Schildvulkaan",
                features: ["Een brede, platte vulkaan met zachte hellingen", "Dunne, vloeibare lava die ver kan stromen", "Vredige uitbarstingen met weinig explosiviteit", "Fumarolen"]
            },
            {
                name: "Stratovulkaan",
                features: ["Een steile, kegelvormige vulkaan met explosieve uitbarstingen", "Dikke, stroperige lava die niet ver stroomt", "Explosieve uitbarstingen met veel as en puimsteen", "Asregens"]
            }
        ],
        allFeatures: [
            "Een brede, platte vulkaan met zachte hellingen",
            "Een steile, kegelvormige vulkaan met explosieve uitbarstingen",
            "Dikke, stroperige lava die niet ver stroomt",
            "Dunne, vloeibare lava die ver kan stromen",
            "Vredige uitbarstingen met weinig explosiviteit",
            "Explosieve uitbarstingen met veel as en puimsteen",
            "Fumarolen",
            "Asregens"
        ]
    },
    richter: {
        magnitudes: [
            { value: 5, description: "Magnitude 5 - Lichte schade" },
            { value: 6, description: "Magnitude 6 - Matige schade" },
            { value: 7, description: "Magnitude 7 - Ernstige schade" },
            { value: 8, description: "Magnitude 8 - Zware schade" },
            { value: 9, description: "Magnitude 9 - Catastrofale schade" }
        ],
        scenarios: [
            {
                text: "Een aardbeving waarbij muren scheuren",
                magnitude: 5
            },
            {
                text: "Een aardbeving waarbij meubels omvallen en ramen breken",
                magnitude: 6
            },
            {
                text: "Een aardbeving waarbij gebouwen instorten",
                magnitude: 7
            },
            {
                text: "Een aardbeving waarbij bruggen verwoest worden",
                magnitude: 8
            },
            {
                text: "Een aardbeving waarbij hele steden verwoest worden",
                magnitude: 9
            }
        ]
    },
    forces: [
        {
            name: "Aardbeving",
            type: "endogeen",
            description: "Kracht van binnenuit de aarde"
        },
        {
            name: "Vulkanisme",
            type: "endogeen",
            description: "Kracht van binnenuit de aarde"
        },
        {
            name: "Plooiing",
            type: "endogeen",
            description: "Kracht van binnenuit de aarde"
        },
        {
            name: "Verwering",
            type: "exogeen",
            description: "Kracht van buitenaf"
        },
        {
            name: "Erosie",
            type: "exogeen",
            description: "Kracht van buitenaf"
        },
        {
            name: "Breukvorming",
            type: "endogeen",
            description: "Kracht van binnenuit de aarde"
        }
    ]
};

let currentGame = null;
let score = 0;
let totalQuestions = 0;
let selectedVolcanoType = null;
let selectedFeatures = [];
let wrongQuestions = [];
let quizAnswers = [];

// Progress tracking
let gameProgress = {
    memory: false,
    quiz: false,
    plates: false,
    volcano: false,
    richter: false,
    forces: false
};

// Load progress from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedProgress = localStorage.getItem('gameProgress');
    if (savedProgress) {
        gameProgress = JSON.parse(savedProgress);
        updateGameButtons();
    }
    
    // Add the persistent menu button
    addPersistentMenuButton();
});

function updateGameButtons() {
    const gameOptions = document.querySelectorAll('.game-option');
    gameOptions.forEach(option => {
        const gameType = option.getAttribute('onclick').match(/'([^']+)'/)[1];
        if (gameProgress[gameType]) {
            option.classList.add('completed');
            const emoji = option.querySelector('.emoji').textContent;
            const title = option.querySelector('.game-title').textContent;
            option.innerHTML = `
                <span class="emoji">✅</span>
                <span class="game-title">${title}</span>
            `;
        }
    });
}

function markGameCompleted(gameType) {
    gameProgress[gameType] = true;
    localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
    updateGameButtons();
    
    // Check if all games are completed
    const allCompleted = Object.values(gameProgress).every(completed => completed);
    if (allCompleted) {
        showCompletionMessage();
    }
}

function showCompletionMessage() {
    const gameMenu = document.querySelector('.game-menu');
    const completionMessage = document.createElement('div');
    completionMessage.className = 'completion-message';
    completionMessage.innerHTML = `
        <h2>🎉 Gefeliciteerd! 🎉</h2>
        <p>Alle opdrachten zijn succesvol afgerond!</p>
        <p>Je bent een echte expert in tektonische platen en vulkanen!</p>
    `;
    gameMenu.insertBefore(completionMessage, gameMenu.firstChild);
}

// Game initialization
function startGame(gameType) {
    // Reset game state
    currentGame = gameType;
    score = 0;
    totalQuestions = 0;
    selectedVolcanoType = null;
    selectedFeatures = [];
    
    // Hide menu and show game container
    const gameMenu = document.querySelector('.game-menu');
    const gameContainer = document.getElementById('game-container');
    const scoreContainer = document.getElementById('score-container');
    
    // Clear any existing content
    gameContainer.innerHTML = '';
    
    // Show/hide appropriate containers
    gameMenu.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    scoreContainer.classList.add('hidden');
    
    // Initialize specific game
    switch(gameType) {
        case 'memory':
            initMemoryGame();
            break;
        case 'quiz':
            initQuiz();
            break;
        case 'truefalse':
            initTrueFalse();
            break;
        case 'plates':
            initPlatesGame();
            break;
        case 'volcano':
            initVolcanoBuilder();
            break;
        case 'richter':
            initRichterScale();
            break;
        case 'forces':
            initForcesMatch();
            break;
    }
}

// Memory Game
function initMemoryGame() {
    const container = document.getElementById('game-container');
    
    // Create pairs of cards
    const cards = [];
    gameData.memory.forEach((item, index) => {
        // Add term card
        cards.push({
            index: index,
            content: item.term,
            isTerm: true
        });
        // Add definition card
        cards.push({
            index: index,
            content: item.definition,
            isTerm: false
        });
    });
    
    // Shuffle the cards
    cards.sort(() => Math.random() - 0.5);
    
    let html = '<div class="memory-grid">';
    cards.forEach((card, displayIndex) => {
        html += `
            <div class="memory-card" data-index="${card.index}" data-is-term="${card.isTerm}" onclick="flipCard(this)">
                <div class="card-front">?</div>
                <div class="card-back hidden">${card.content}</div>
            </div>
        `;
    });
    html += '</div>';
    
    container.innerHTML = html;
}

let flippedCards = [];
let matchedPairs = 0;

function flipCard(cardElement) {
    if (flippedCards.length === 2 || cardElement.classList.contains('matched')) return;
    
    cardElement.classList.add('flipped');
    flippedCards.push({ element: cardElement });
    
    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const card1Index = card1.element.dataset.index;
    const card2Index = card2.element.dataset.index;
    const card1IsTerm = card1.element.dataset.isTerm === 'true';
    const card2IsTerm = card2.element.dataset.isTerm === 'true';
    
    const isMatch = card1Index === card2Index && card1IsTerm !== card2IsTerm;
    
    if (isMatch) {
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');
        matchedPairs++;
        
        if (matchedPairs === gameData.memory.length) {
            setTimeout(() => {
                alert('Gefeliciteerd! Je hebt alle begrippen gevonden!');
                markGameCompleted('memory');
                returnToMenu();
            }, 500);
        }
    } else {
        card1.element.classList.remove('flipped');
        card2.element.classList.remove('flipped');
    }
    
    flippedCards = [];
}

// Quiz Game
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initQuiz() {
    const gameContainer = document.getElementById('game-container');
    const currentQuestion = gameData.quiz[totalQuestions];
    
    // Create a copy of the options and shuffle them
    const shuffledOptions = [...currentQuestion.options];
    shuffleArray(shuffledOptions);
    
    // Find the new index of the correct answer
    const newCorrectIndex = shuffledOptions.indexOf(currentQuestion.options[currentQuestion.correct]);
    
    gameContainer.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-question">
                <h2>Vraag ${totalQuestions + 1} van ${gameData.quiz.length}</h2>
                <p>${currentQuestion.question}</p>
                <div class="quiz-options">
                    ${shuffledOptions.map((option, index) => `
                        <button onclick="checkQuizAnswer(${index}, ${newCorrectIndex})" class="quiz-option">${option}</button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function checkQuizAnswer(selectedIndex, correctIndex) {
    const currentQuestion = gameData.quiz[totalQuestions];
    const isCorrect = selectedIndex === correctIndex;
    
    // Store the answer
    quizAnswers.push({
        questionIndex: totalQuestions,
        selected: selectedIndex,
        correct: currentQuestion.correct,
        isCorrect: isCorrect
    });
    
    if (!isCorrect) {
        wrongQuestions.push(totalQuestions);
    }
    
    if (selectedIndex === correctIndex) {
        score++;
    }
    
    totalQuestions++;
    
    if (totalQuestions < gameData.quiz.length) {
        initQuiz();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const gameContainer = document.getElementById('game-container');
    let html = `
        <div class="quiz-result">
            <h2>Quiz afgerond!</h2>
            <p>Je hebt ${score} van de ${gameData.quiz.length} vragen goed!</p>
    `;
    
    if (wrongQuestions.length > 0) {
        html += `
            <div class="wrong-questions">
                <h3>Deze vragen waren niet correct:</h3>
                <ul>
                    ${wrongQuestions.map(index => `
                        <li>
                            <p>${gameData.quiz[index].question}</p>
                            <p>Jouw antwoord: ${gameData.quiz[index].options[quizAnswers[index].selected]}</p>
                            <p class="hint">💡 Hint: ${gameData.quiz[index].hint}</p>
                        </li>
                    `).join('')}
                </ul>
                <button onclick="restartQuiz()" class="retry-button">Maak de quiz opnieuw</button>
            </div>
        `;
    } else {
        markGameCompleted('quiz');
        html += `
            <div class="success-message">
                <h3>Gefeliciteerd! Je hebt alle vragen goed!</h3>
                <p>Je kunt nu terug naar het menu gaan.</p>
            </div>
        `;
    }
    
    html += `
        <button onclick="returnToMenu()">Terug naar menu</button>
        </div>
    `;
    
    gameContainer.innerHTML = html;
}

function restartQuiz() {
    // Reset all quiz variables
    score = 0;
    totalQuestions = 0;
    quizAnswers = [];
    wrongQuestions = [];
    
    // Shuffle the entire quiz array
    shuffleArray(gameData.quiz);
    
    // Start the quiz again
    initQuiz();
}

// True/False Game
function initTrueFalse() {
    const container = document.getElementById('game-container');
    const currentQuestion = gameData.truefalse[totalQuestions];
    
    let html = `
        <div class="quiz-container">
            <div class="quiz-question">
                <h3>Vraag ${totalQuestions + 1}/${gameData.truefalse.length}</h3>
                <p>${currentQuestion.statement}</p>
            </div>
            <div class="quiz-options">
                <div class="quiz-option" onclick="checkTrueFalseAnswer(true)">Waar</div>
                <div class="quiz-option" onclick="checkTrueFalseAnswer(false)">Niet Waar</div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

function checkTrueFalseAnswer(isTrue) {
    const currentQuestion = gameData.truefalse[totalQuestions];
    const isCorrect = isTrue === currentQuestion.correct;
    
    if (isCorrect) {
        score++;
    }
    
    totalQuestions++;
    
    if (totalQuestions < gameData.truefalse.length) {
        initTrueFalse();
    } else {
        showTrueFalseResults();
    }
}

function showTrueFalseResults() {
    const quizContainer = document.getElementById('quiz-container');
    let html = `
        <div class="quiz-result">
            <h2>Quiz afgerond!</h2>
            <p>Je hebt ${score} van de ${gameData.truefalse.length} vragen goed!</p>
    `;
    
    if (score === gameData.truefalse.length) {
        markGameCompleted('truefalse');
        html += `
            <div class="success-message">
                <h3>Gefeliciteerd! Je hebt alle vragen goed!</h3>
                <p>Je kunt nu terug naar het menu gaan.</p>
            </div>
        `;
    } else {
        html += `
            <div class="wrong-questions">
                <h3>Deze vragen waren niet correct:</h3>
                <ul>
                    ${wrongQuestions.map(index => `
                        <li>
                            <p>${gameData.truefalse[index].statement}</p>
                            <p>Jouw antwoord: ${gameData.truefalse[index].correct ? 'Waar' : 'Niet Waar'}</p>
                        </li>
                    `).join('')}
                </ul>
                <button onclick="restartTrueFalse()" class="retry-button">Maak de quiz opnieuw</button>
            </div>
        `;
    }
    
    html += `
        <button onclick="returnToMenu()">Terug naar menu</button>
        </div>
    `;
    
    quizContainer.innerHTML = html;
}

function restartTrueFalse() {
    // Reset all true/false variables
    score = 0;
    totalQuestions = 0;
    wrongQuestions = [];
    
    // Start the quiz again
    initTrueFalse();
}

// Plates Game
function initPlatesGame() {
    const container = document.getElementById('game-container');
    const plates = gameData.plates.plates;
    const positions = gameData.plates.positions;
    
    let html = `
        <div class="plates-container">
            <h3>Plaats de tektonische platen rondom Japan</h3>
            <p>Sleep de platen naar de juiste positie op de kaart</p>
            <div class="plates-map">
                <div class="japan-marker">🗾</div>
            </div>
            <div class="plates-legend">
                ${plates.map((plate, index) => `
                    <div class="plate-item" draggable="true" 
                         style="background-color: ${plate.color}"
                         data-plate="${index}"
                         ondragstart="dragPlate(event)">
                        ${plate.name}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Add drop zones
    const map = container.querySelector('.plates-map');
    positions.forEach((pos, index) => {
        const dropZone = document.createElement('div');
        dropZone.className = 'plate-drop-zone';
        dropZone.style.left = `${pos.x}%`;
        dropZone.style.top = `${pos.y}%`;
        dropZone.ondragover = (e) => e.preventDefault();
        dropZone.ondrop = (e) => dropPlate(e, index);
        map.appendChild(dropZone);
    });
}

function dragPlate(event) {
    event.dataTransfer.setData("text", event.target.dataset.plate);
}

function dropPlate(event, positionIndex) {
    event.preventDefault();
    const plateIndex = event.dataTransfer.getData("text");
    const plate = gameData.plates.plates[plateIndex];
    const correctPosition = gameData.plates.positions[positionIndex];
    
    if (parseInt(plateIndex) === correctPosition.plate) {
        const dropZone = event.target;
        dropZone.style.backgroundColor = plate.color;
        dropZone.style.border = 'none';
        dropZone.innerHTML = plate.name;
        
        const allPlaced = document.querySelectorAll('.plate-drop-zone').length === 
                         document.querySelectorAll('.plate-drop-zone[style*="background-color"]').length;
        
        if (allPlaced) {
            setTimeout(() => {
                alert('Gefeliciteerd! Je hebt alle platen correct geplaatst!');
                markGameCompleted('plates');
                returnToMenu();
            }, 500);
        }
    } else {
        alert('Dit is niet de juiste positie voor deze plaat. Probeer het opnieuw!');
    }
}

// Return to Menu
function returnToMenu() {
    // Reset game state
    currentGame = null;
    score = 0;
    totalQuestions = 0;
    selectedVolcanoType = null;
    selectedFeatures = [];
    
    // Hide game container and show menu
    const gameContainer = document.getElementById('game-container');
    const gameMenu = document.querySelector('.game-menu');
    const scoreContainer = document.getElementById('score-container');
    
    // Clear all content from game container
    gameContainer.innerHTML = '';
    
    // Reset classes
    gameContainer.classList.add('hidden');
    scoreContainer.classList.add('hidden');
    gameMenu.classList.remove('hidden');
    
    // Update game buttons to show completed status
    updateGameButtons();
}

function resetProgress() {
    if (confirm('Weet je zeker dat je wilt resetten? Al je voortgang zal verloren raken.')) {
        // Reset progress in memory
        gameProgress = {
            memory: false,
            quiz: false,
            plates: false,
            volcano: false,
            richter: false,
            forces: false
        };
        
        // Remove from localStorage
        localStorage.removeItem('gameProgress');
        
        // Remove completion message if it exists
        const completionMessage = document.querySelector('.completion-message');
        if (completionMessage) {
            completionMessage.remove();
        }
        
        // Reset UI
        const gameOptions = document.querySelectorAll('.game-option');
        gameOptions.forEach(option => {
            option.classList.remove('completed');
            const emoji = option.querySelector('.emoji').textContent;
            const title = option.querySelector('.game-title').textContent;
            option.innerHTML = `
                <span class="emoji">${emoji}</span>
                <span class="game-title">${title}</span>
            `;
        });
    }
}

// Add new game functions
function initVolcanoBuilder() {
    const gameContainer = document.getElementById('game-container');
    
    // Shuffle all features
    const shuffledFeatures = shuffleArray([...gameData.volcano.allFeatures]);
    
    gameContainer.innerHTML = `
        <div class="volcano-builder">
            <h2>Bouw je eigen vulkaan</h2>
            <p class="game-instructions">Kies een type vulkaan en selecteer 4 eigenschappen die bij dat type horen.</p>
            <div class="volcano-options">
                <div class="volcano-type">
                    <h3>Kies het type vulkaan:</h3>
                    ${gameData.volcano.types.map(type => `
                        <button onclick="selectVolcanoType('${type.name}')" class="volcano-option">${type.name}</button>
                    `).join('')}
                </div>
                <div class="volcano-features">
                    <h3>Kies 4 eigenschappen:</h3>
                    ${shuffledFeatures.map(feature => `
                        <button onclick="selectFeature('${feature}')" class="volcano-option" data-feature="${feature}">${feature}</button>
                    `).join('')}
                </div>
            </div>
            <button onclick="checkVolcano()" class="check-button">Controleer je vulkaan</button>
        </div>
    `;
}

function selectVolcanoType(type) {
    selectedVolcanoType = type;
    
    // Update button styles
    document.querySelectorAll('.volcano-option').forEach(button => {
        if (button.textContent === type) {
            button.classList.add('selected');
        } else if (button.closest('.volcano-type')) {
            button.classList.remove('selected');
        }
    });
    
    // Reset feature buttons to grey
    document.querySelectorAll('.volcano-option[data-feature]').forEach(button => {
        button.classList.remove('selected', 'optional');
    });
    
    selectedFeatures = [];
}

function selectFeature(feature) {
    if (!selectedVolcanoType) {
        alert('Kies eerst een type vulkaan!');
        return;
    }
    
    const type = gameData.volcano.types.find(t => t.name === selectedVolcanoType);
    const button = document.querySelector(`[data-feature="${feature}"]`);
    
    if (selectedFeatures.includes(feature)) {
        selectedFeatures = selectedFeatures.filter(f => f !== feature);
        button.classList.remove('selected', 'optional');
    } else if (selectedFeatures.length < 4) {
        selectedFeatures.push(feature);
        if (type.features.includes(feature)) {
            button.classList.add('selected');
        } else {
            button.classList.add('optional');
        }
    } else {
        alert('Je kunt maximaal 4 eigenschappen kiezen!');
    }
}

function checkVolcano() {
    if (!selectedVolcanoType) {
        alert('Kies eerst een type vulkaan!');
        return;
    }
    
    if (selectedFeatures.length !== 4) {
        alert('Kies precies 4 eigenschappen!');
        return;
    }
    
    const type = gameData.volcano.types.find(t => t.name === selectedVolcanoType);
    const correctFeatures = type.features;
    
    // Check if all selected features are correct
    const allCorrect = selectedFeatures.every(feature => correctFeatures.includes(feature));
    
    if (allCorrect) {
        markGameCompleted('volcano');
        showVolcanoResults(true);
    } else {
        showVolcanoResults(false);
    }
}

function showVolcanoResults(success) {
    const gameContainer = document.getElementById('game-container');
    let html = `
        <div class="quiz-result">
            <h2>${success ? 'Gefeliciteerd!' : 'Niet helemaal correct'}</h2>
    `;
    
    if (success) {
        html += `
            <div class="success-message">
                <h3>Je hebt een correcte vulkaan gebouwd!</h3>
                <p>Je kunt nu terug naar het menu gaan.</p>
            </div>
        `;
    } else {
        html += `
            <div class="wrong-questions">
                <h3>Probeer het opnieuw!</h3>
                <p>Controleer of je de juiste eigenschappen hebt gekozen voor je type vulkaan.</p>
                <button onclick="restartVolcano()" class="retry-button">Bouw opnieuw</button>
            </div>
        `;
    }
    
    html += `
        <button onclick="returnToMenu()">Terug naar menu</button>
        </div>
    `;
    
    gameContainer.innerHTML = html;
}

function restartVolcano() {
    selectedVolcanoType = null;
    selectedFeatures = [];
    initVolcanoBuilder();
}

function initRichterScale() {
    const gameContainer = document.getElementById('game-container');
    const shuffledScenarios = shuffleArray([...gameData.richter.scenarios]);
    
    gameContainer.innerHTML = `
        <div class="richter-scale">
            <h2>Aardbevingsmeter</h2>
            <p>Sleep de scenario's naar de juiste magnitude op de Schaal van Richter:</p>
            <div class="richter-container">
                <div class="richter-scenarios">
                    <h3>Scenario's</h3>
                    <div class="scenarios-list">
                        ${shuffledScenarios.map((scenario, index) => `
                            <div class="scenario-item" draggable="true" 
                                 ondragstart="drag(event)" 
                                 data-scenario="${scenario.magnitude}">
                                ${scenario.text}
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="richter-magnitudes">
                    <h3>Schaal van Richter</h3>
                    ${gameData.richter.magnitudes.map(magnitude => `
                        <div class="magnitude-dropzone" 
                             ondrop="drop(event)" 
                             ondragover="allowDrop(event)"
                             data-magnitude="${magnitude.value}">
                            <div class="magnitude-header">${magnitude.description}</div>
                            <div class="magnitude-content"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.dataset.scenario);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const scenarioMagnitude = parseInt(event.dataTransfer.getData("text"));
    const dropZone = event.target.closest('.magnitude-dropzone');
    const dropZoneMagnitude = parseInt(dropZone.dataset.magnitude);
    const scenarioElement = document.querySelector(`[data-scenario="${scenarioMagnitude}"]`);
    
    // Check if scenario is already placed
    if (scenarioElement.parentElement.classList.contains('magnitude-content')) {
        return;
    }
    
    // Check if the magnitude matches
    if (scenarioMagnitude === dropZoneMagnitude) {
        const contentDiv = dropZone.querySelector('.magnitude-content');
        contentDiv.appendChild(scenarioElement);
        
        // Check if all scenarios are placed
        const remainingScenarios = document.querySelectorAll('.scenarios-list .scenario-item').length;
        if (remainingScenarios === 0) {
            markGameCompleted('richter');
            setTimeout(() => {
                showRichterResults();
            }, 1000);
        }
    } else {
        alert('Dit scenario hoort niet bij deze magnitude. Probeer het opnieuw!');
        // Return the scenario to its original position in the list
        const scenariosList = document.querySelector('.scenarios-list');
        scenariosList.appendChild(scenarioElement);
    }
}

function showRichterResults() {
    const gameContainer = document.getElementById('game-container');
    let html = `
        <div class="quiz-result">
            <h2>Gefeliciteerd! 🎉</h2>
            <div class="success-message">
                <h3>Je hebt alle scenario's correct gekoppeld!</h3>
                <p>Je kent nu de verschillende krachten op de Schaal van Richter.</p>
                <p>Je kunt nu terug naar het menu gaan.</p>
            </div>
            <button onclick="returnToMenu()" class="menu-button">Terug naar menu</button>
        </div>
    `;
    
    gameContainer.innerHTML = html;
}

function initForcesMatch() {
    const gameContainer = document.getElementById('game-container');
    const shuffledForces = shuffleArray([...gameData.forces]);
    
    gameContainer.innerHTML = `
        <div class="forces-match">
            <h2>Match de krachten</h2>
            <p>Sleep de krachten naar de juiste categorie:</p>
            <div class="forces-container">
                <div class="forces-column">
                    <h3>Endogene Krachten</h3>
                    <div class="forces-dropzone" ondrop="dropForce(event)" ondragover="allowDrop(event)" data-type="endogeen"></div>
                </div>
                <div class="forces-column">
                    <h3>Exogene Krachten</h3>
                    <div class="forces-dropzone" ondrop="dropForce(event)" ondragover="allowDrop(event)" data-type="exogeen"></div>
                </div>
            </div>
            <div class="forces-items">
                ${shuffledForces.map(force => `
                    <div class="force-item" draggable="true" ondragstart="dragForce(event)" data-name="${force.name}">
                        ${force.name}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function dragForce(event) {
    event.dataTransfer.setData("text", event.target.dataset.name);
}

function dropForce(event) {
    event.preventDefault();
    const forceName = event.dataTransfer.getData("text");
    const dropZone = event.target.closest('.forces-dropzone');
    const forceType = dropZone.dataset.type;
    const force = gameData.forces.find(f => f.name === forceName);
    
    // Check if force is already placed
    const forceElement = document.querySelector(`[data-name="${forceName}"]`);
    if (forceElement.classList.contains('placed')) {
        return;
    }
    
    // Check if the type matches
    if (force.type === forceType) {
        dropZone.appendChild(forceElement);
        forceElement.classList.add('placed');
        
        // Check if all forces are placed
        const allPlaced = document.querySelectorAll('.force-item.placed').length === gameData.forces.length;
        if (allPlaced) {
            markGameCompleted('forces');
            setTimeout(() => {
                showForcesResults();
            }, 1000);
        }
    } else {
        alert('Dit is niet de juiste categorie voor deze kracht. Probeer het opnieuw!');
        // Return the force to its original position
        const forcesItems = document.querySelector('.forces-items');
        forcesItems.appendChild(forceElement);
    }
}

function showForcesResults() {
    const gameContainer = document.getElementById('game-container');
    let html = `
        <div class="quiz-result">
            <h2>Gefeliciteerd! 🎉</h2>
            <div class="success-message">
                <h3>Je hebt alle krachten correct gekoppeld!</h3>
                <p>Je kent nu het verschil tussen endogene en exogene krachten.</p>
                <p>Je kunt nu terug naar het menu gaan.</p>
            </div>
            <button onclick="returnToMenu()" class="menu-button">Terug naar menu</button>
        </div>
    `;
    
    gameContainer.innerHTML = html;
}

// Add persistent menu button
function addPersistentMenuButton() {
    const button = document.createElement('button');
    button.className = 'persistent-menu-button';
    button.textContent = 'Terug naar menu';
    button.onclick = returnToMenu;
    document.body.appendChild(button);
} 