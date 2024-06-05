const stories = [
    [
        "Welcome to the beginning of Story 1",
        "Story 0 Chapter 1 The hilt felt foreign in Kara's calloused hands as she unsheathed the ancient sword...",
        "Story 0 Chapter 2 Kara's heart raced as she studied the intricate designs etched into the crossguard...",
        "Story 0 Chapter 3 The forest was a blur as Kara ran, the Forgotten Blade clutched tightly in her hand...",
        "End of Story 1"
    ],
    [
        "Welcome to the beginning of Story 2",
        "Story 1 Chapter 1 Ember's fingers trembled as she traced the weathered pages of the ancient tome...",
        "Story 1 Chapter 2 The war camp was in chaos as the enemy's forces closed in, but Ember remained focused, her eyes fixed on the glowing runes scrawled across the parchment...",
        "Story 1 Chapter 3 The ground trembled beneath their feet, and the enemy's ranks wavered as a crimson wave of energy swept across the battlefield...",
        "End of Story 2"
    ],
    [
        "Welcome to the beginning of Story 3",
        "Story 2 Chapter 1 Mara stood at the edge of the shimmering lake, the warm breeze ruffling her auburn hair...",
        "Story 2 Chapter 2 The boat rocked gently as Mara drifted across the lake, her eyes fixed on the distant outline of Avalon...",
        "Story 2 Chapter 3 The path through the dense foliage was treacherous, but Mara pressed on, driven by a sense of purpose that she couldn't quite explain...",
        "End of Story 3"
    ],
    [
        "Welcome to the beginning of Story 4",
        "Story 3 Chapter 1 Ren's fingers trembled as he traced the intricate carvings on the ancient stone tablet...",
        "Story 3 Chapter 2 The wind howled through the narrow passages of the abandoned temple, sending a shower of dust and debris cascading around Ren as he pressed forward...",
        "Story 3 Chapter 3 The ground shook beneath Ren's feet as he activated the mechanism on the plinth, his heart pounding in his chest...",
        "End of Story 4"
    ]
];

let currentStoryIndex = null;
let currentChapter = 0;

function startStory(storyIndex) {
    if (currentStoryIndex === null) {
        currentStoryIndex = storyIndex;
        document.getElementById('stories').style.display = 'none';
        document.getElementById('story').style.display = 'block';
        updateStory();
    }
}

function nextChapter() {
    if (currentChapter < stories[currentStoryIndex].length - 1) {
        currentChapter++;
        updateStory();
    } else {
        document.getElementById('story').innerHTML = "<p>End of story. Thanks for playing!</p>";
    }
}

function previousChapter() {
    if (currentChapter > 0) {
        currentChapter--;
        updateStory();
    }
}


function backToHomePage() {
    currentStoryIndex = null;
    currentChapter = 0;
    document.getElementById('stories').style.display = 'inline-block';
    document.getElementById('stories').style.marginBottom = '2vh';
    document.getElementById('story').style.display = 'none';
    document.querySelector('footer').classList.remove('footer-fixed');
}

function updateStory() {
    const storyElement = document.getElementById('story');
    storyElement.innerHTML = `<p>${stories[currentStoryIndex][currentChapter]}</p>`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    if (currentChapter > 0) {
        const prevButton = document.createElement('button');
        prevButton.classList.add('story-button');
        prevButton.onclick = previousChapter;
        prevButton.textContent = 'Go Back';
        buttonContainer.appendChild(prevButton);
    }

    if (currentChapter < stories[currentStoryIndex].length - 1) {
        const nextButton = document.createElement('button');
        nextButton.classList.add('story-button');
        nextButton.onclick = nextChapter;
        nextButton.textContent = 'Continue';
        buttonContainer.appendChild(nextButton);
    }

    const backButton = document.createElement('button');
    backButton.classList.add('story-button', 'back-button');
    backButton.onclick = backToHomePage;
    backButton.textContent = 'Back to Home Page';
    buttonContainer.appendChild(backButton);

    storyElement.appendChild(buttonContainer);
}
function displayEmoji() {
    const emojis = ["😀", "😍", "😊", "😎", "🤩", "😜", "🎉", "❤️"]; 
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const emojiElement = document.createElement('span');
    emojiElement.textContent = randomEmoji;
    emojiElement.classList.add('floating-emoji');
    document.getElementById('story').appendChild(emojiElement);
    setTimeout(() => {
        emojiElement.remove(); 
    }, 5000); 
}
let storyInput = "";

function submitStoryInput() {
    storyInput = document.getElementById("story-input").value.trim();
    if (storyInput) {
        stories[currentStoryIndex].push(storyInput);
        document.getElementById("story-input").value = "";
        updateStory();
    }
}

function handleAudioInput() {
    const audioInput = document.getElementById("audio-input");
    if (audioInput.files.length > 0) {
        const audioFile = audioInput.files[0];
       
        console.log("Audio file received:", audioFile);
       
        nextChapter();
    }
}

function writeyourpov() {
    
    const audioContainer = document.createElement("div");
    audioContainer.classList.add("audio-container");
    const audioLabel = document.createElement("label");
    audioLabel.htmlFor = "audio-input";
    audioLabel.textContent = "Use your voice to continue the story:";
    const audioInput = document.createElement("input");
    audioInput.type = "file";
    audioInput.id = "audio-input";
    audioInput.accept = "audio/*";
    audioInput.onchange = handleAudioInput;
    audioContainer.appendChild(audioLabel);
    audioContainer.appendChild(audioInput);
    storyElement.appendChild(audioContainer);
}
function startStory(storyIndex) {
    if (currentStoryIndex === null) {
        currentStoryIndex = storyIndex;
        document.getElementById('stories').style.display = 'none';
        document.getElementById('story').style.display = 'block';
        document.querySelector('footer').classList.add('footer-fixed');
        updateStory();
    }
}
function backToHomePage() {
    currentStoryIndex = null;
    currentChapter = 0;
    document.getElementById('stories').style.display = 'inline-block';
    document.getElementById('stories').style.marginBottom = '2vh';
    document.getElementById('story').style.display = 'none';
    document.querySelector('footer').classList.remove('footer-fixed');
}
