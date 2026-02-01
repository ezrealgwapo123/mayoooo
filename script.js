// Get all elements
const flowerPage = document.getElementById('flowerPage');
const choicePage = document.getElementById('choicePage');
const homePage = document.getElementById('homePage');
const letterPage = document.getElementById('letterPage');
const dateQuestionSection = document.getElementById('dateQuestionSection');
const calendarSection = document.getElementById('calendarSection');
const messageFormSection = document.getElementById('messageFormSection');

// Buttons
const acceptBtn = document.getElementById('acceptBtn');
const declineBtn = document.getElementById('declineBtn');
const readLetterBtn = document.getElementById('readLetterBtn');
const proposeDateBtn = document.getElementById('proposeDateBtn');
const letterEnvelope = document.getElementById('letterEnvelope');
const closeButton = document.getElementById('closeButton');
const dateYesBtn = document.getElementById('dateYesBtn');
const dateNoBtn = document.getElementById('dateNoBtn');
const calendarClose = document.getElementById('calendarClose');
const messageForm = document.getElementById('messageForm');
const submitMessageBtn = document.getElementById('submitMessageBtn');

// Back buttons
const backToChoice1 = document.getElementById('backToChoice1');
const backToChoice2 = document.getElementById('backToChoice2');
const backToDateQuestion = document.getElementById('backToDateQuestion');
const backToCalendar = document.getElementById('backToCalendar');

// Other elements
const audioPlayer = document.getElementById('audioPlayer');
const musicIndicator = document.getElementById('musicIndicator');
const messageTextarea = document.getElementById('messageTextarea');
const selectedDateDisplay = document.getElementById('selectedDateDisplay');
const messageStatus = document.getElementById('messageStatus');
const dateCells = document.querySelectorAll('.date-cell');

let selectedDate = null;

// ========== FLOWER PAGE ==========
// Accept flowers - show choice page
acceptBtn.addEventListener('click', function() {
    flowerPage.classList.add('hidden');
    
    setTimeout(() => {
        choicePage.classList.add('active');
    }, 800);
});

// Decline flowers - dodging effect
let declineAttempts = 0;

declineBtn.addEventListener('mouseenter', function() {
    dodgeDeclineButton();
});

declineBtn.addEventListener('click', function(e) {
    e.preventDefault();
    dodgeDeclineButton();
    
    declineAttempts++;
    if (declineAttempts >= 3) {
        showDeclineSillyMessage();
    }
});

function dodgeDeclineButton() {
    const button = declineBtn;
    const directions = [-1, 1];
    const dir = directions[Math.floor(Math.random() * directions.length)];
    
    button.style.setProperty('--dodge-dir', dir);
    button.classList.add('dodging');
    
    setTimeout(() => {
        button.classList.remove('dodging');
    }, 500);
}

function showDeclineSillyMessage() {
    const messages = [
        "huhu muhilak ko ronnn 🥺",
        "baka naman cjjj hahaha 🌸",
        "Just accept them cej, please? 💐",
        "bisag si chuchay og howie nihilak... 😢"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    declineBtn.textContent = randomMessage;
    
    setTimeout(() => {
        declineBtn.textContent = "Not this year :'<<";
    }, 2500);
}

// ========== CHOICE PAGE ==========
// Read Letter - go to home page
readLetterBtn.addEventListener('click', function() {
    choicePage.classList.remove('active');
    
    setTimeout(() => {
        homePage.classList.add('active');
    }, 600);
});

// Propose Date - go to date question
proposeDateBtn.addEventListener('click', function() {
    choicePage.classList.remove('active');
    
    setTimeout(() => {
        dateQuestionSection.classList.add('active');
    }, 600);
});

// ========== HOME PAGE ==========
// Open envelope - show letter and play music
letterEnvelope.addEventListener('click', function() {
    homePage.classList.add('hidden');
    
    setTimeout(() => {
        letterPage.classList.add('active');
        musicIndicator.classList.add('active');
        
        // Play Work Song by Hozier
        audioPlayer.play().then(() => {
            console.log('Music playing');
        }).catch(error => {
            console.log('Autoplay prevented. Click music indicator to play.');
        });
    }, 600);
});

// Back to choice from home
backToChoice1.addEventListener('click', function() {
    homePage.classList.remove('active');
    homePage.classList.add('hidden');
    
    setTimeout(() => {
        choicePage.classList.add('active');
    }, 600);
});

// ========== LETTER PAGE ==========
// Close letter - back to home
closeButton.addEventListener('click', function() {
    letterPage.classList.remove('active');
    musicIndicator.classList.remove('active');
    audioPlayer.pause();
    
    setTimeout(() => {
        homePage.classList.remove('hidden');
        homePage.classList.add('active');
    }, 600);
});

// Music indicator toggle
musicIndicator.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        musicIndicator.classList.remove('paused');
        musicIndicator.querySelector('.music-label').textContent = 'Playing';
    } else {
        audioPlayer.pause();
        musicIndicator.classList.add('paused');
        musicIndicator.querySelector('.music-label').textContent = 'Paused';
    }
});

// ========== DATE QUESTION ==========
// Yes button - show calendar
dateYesBtn.addEventListener('click', function() {
    dateQuestionSection.classList.remove('active');
    
    setTimeout(() => {
        calendarSection.classList.add('active');
    }, 500);
});

// No button - DODGING EFFECT
let noAttempts = 0;

dateNoBtn.addEventListener('mouseenter', function() {
    dodgeDateNoButton();
});

dateNoBtn.addEventListener('click', function(e) {
    e.preventDefault();
    dodgeDateNoButton();
    
    noAttempts++;
    if (noAttempts >= 5) {
        showDateNoSillyMessage();
    }
});

function dodgeDateNoButton() {
    const button = dateNoBtn;
    const directions = [-1, 1];
    const dir = directions[Math.floor(Math.random() * directions.length)];
    
    button.style.setProperty('--dodge-dir', dir);
    button.classList.add('dodging');
    
    setTimeout(() => {
        button.classList.remove('dodging');
    }, 500);
}

function showDateNoSillyMessage() {
    const messages = [
        "Nope! Can't catch me cej! 🏃",
        "Too slow cjj! e try ang YES button! 😝",
        "I'm allergic to NO! 🤧",
        "You'll never click me cej! 😎",
        "The YES button is much nicer cjj! 💕",
        "Come on cej, just say yes! 🥺",
        "I believe you meant YES cej! ✨"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    dateNoBtn.textContent = randomMessage;
    
    setTimeout(() => {
        dateNoBtn.textContent = "Not now";
    }, 2000);
}

// Back to choice from date question
backToChoice2.addEventListener('click', function() {
    dateQuestionSection.classList.remove('active');
    noAttempts = 0;
    dateNoBtn.textContent = "Not now";
    
    setTimeout(() => {
        choicePage.classList.add('active');
    }, 600);
});

// ========== CALENDAR ==========
// Date selection
dateCells.forEach(cell => {
    cell.addEventListener('click', function() {
        const td = this.parentElement;
        
        // Remove previous selection
        document.querySelectorAll('.calendar-table td').forEach(c => c.classList.remove('selected'));
        
        // Add selection
        td.classList.add('selected');
        selectedDate = this.dataset.date;
        selectedDateDisplay.textContent = `Date: February ${selectedDate}, 2025`;
        
        // Show message form after short delay
        setTimeout(() => {
            calendarSection.classList.remove('active');
            setTimeout(() => {
                messageFormSection.classList.add('active');
            }, 300);
        }, 500);
    });
});

// Calendar continue without selection
calendarClose.addEventListener('click', function() {
    if (!selectedDate) {
        alert('Please select a date first! 📅');
        return;
    }
    
    calendarSection.classList.remove('active');
    setTimeout(() => {
        messageFormSection.classList.add('active');
    }, 300);
});

// Back to date question from calendar
backToDateQuestion.addEventListener('click', function() {
    calendarSection.classList.remove('active');
    
    setTimeout(() => {
        dateQuestionSection.classList.add('active');
    }, 600);
});

// ========== MESSAGE FORM ==========
// Submit message
messageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const message = messageTextarea.value.trim();
    
    if (!message) {
        messageStatus.innerHTML = '<span style="color: #c2185b;">Please share your thoughts before sending. 💭</span>';
        return;
    }
    
    if (!selectedDate) {
        messageStatus.innerHTML = '<span style="color: #c2185b;">Please select a date first. 📅</span>';
        return;
    }
    
    submitMessageBtn.disabled = true;
    submitMessageBtn.textContent = 'Sending... ✉️';
    
    // Simulate sending
    setTimeout(() => {
        messageStatus.innerHTML = '<span style="color: #4caf50;">Your thoughts have been whispered to me. Thank you! 💌</span>';
        messageTextarea.value = '';
        submitMessageBtn.textContent = 'Sent! ✓';
        submitMessageBtn.disabled = false;
        
        setTimeout(() => {
            messageFormSection.classList.remove('active');
            setTimeout(() => {
                choicePage.classList.add('active');
                // Reset
                messageStatus.innerHTML = '';
                submitMessageBtn.textContent = 'Send to Me 🌹';
                selectedDate = null;
                selectedDateDisplay.textContent = 'Date: December XX, 2025';
                document.querySelectorAll('.calendar-table td').forEach(c => c.classList.remove('selected'));
            }, 600);
        }, 2500);
    }, 1500);
});

// Back to calendar from message
backToCalendar.addEventListener('click', function() {
    messageFormSection.classList.remove('active');
    
    setTimeout(() => {
        calendarSection.classList.add('active');
    }, 600);
});

console.log('Letter application loaded successfully! 🌸');