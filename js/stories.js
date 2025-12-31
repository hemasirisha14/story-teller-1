console.log("stories.js loaded");
document.addEventListener("DOMContentLoaded", () => {
const stories = [
    {
        age: "kids",
        category: "adventure",
        title: "The Jungle Adventure",
        content: `Once upon a time, a brave little boy named Arjun entered a mysterious jungle.
        The trees whispered secrets and colorful birds guided his way.
        He helped animals in trouble and learned the value of kindness.
        At sunset, the jungle rewarded him with magical fruits.
        Arjun returned home a hero, filled with courage and joy.`
    },
    {
        age: "kids",
        category: "moral",
        title: "The Honest Rabbit", 
        content: `A small rabbit found a golden carrot in the forest.
        Though hungry, he returned it to the farmer.
        The farmer rewarded him with friendship and safety.
        Honesty made the rabbit respected by all.
        Truth always brings happiness.`
    },
    {
        age: "adults",
        category: "thriller",
        title: "Midnight Train",
        content: `The train arrived with no passengers.
        Each station echoed forgotten screams.
        A diary revealed a crime buried in time.
        Shadows moved where no one stood.
        Dawn revealed the truth — the train carried memories.`
    },
    {
        age: "adults",
        category: "horror",
        title:"Whispers in the Hall",
    content: "A chilling story about secrets hidden within silent corridors."
    },
    {
        age: "kids",
        category: "humorous",
        title: "The Laughing Monkey",
        content: `A monkey loved telling jokes.
        Even the grumpy lion laughed.
        Laughter solved every problem.
        The jungle became joyful again.
        Smiles are the best magic.`
    },
    {
    age: "kids",
    category: "family and friends",
    title: "Family and Friends",
    content: "A heartwarming story about love, support, and togetherness."
},
{
    age: "adults",
    category: "adventure",
    title: "Beyond the Mountain",
    content: "An inner journey of courage and self-discovery."
},
{
    age: "adults",
    category: "moral",
    title: "The Price of Truth",
    content: "A powerful story about honesty, courage, and choosing integrity over comfort."
}
];

// READ URL PARAMS
const params = new URLSearchParams(window.location.search);
const age = params.get("age");
const category = params.get("category");

const container = document.getElementById("storyContainer");

const filteredStories = stories.filter(
    s => s.age === age && s.category === category
);

if (filteredStories.length === 0) {
    container.innerHTML = `<p class="text-center">No stories found 😢</p>`;
}

filteredStories.forEach(story => {
    const div = document.createElement("div");
    div.className = "col-md-6";

    div.innerHTML = `
        <div class="story-card">
            <h3>${story.title}</h3>
            <p>${story.content}</p>
            <button class="btn btn-light read-btn"
onclick="window.location.href='story.html?title=${encodeURIComponent(story.title)}'">
📖 Read Story
</button>

        </div>
    `;
    container.appendChild(div);
});

// TEXT TO SPEECH
function readStory(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.9;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
function openStory(title) {
    window.location.href = `story.html?title=${encodeURIComponent(title)}`;
}
});
let stories = [];

fetch("stories.json")
  .then(response => response.json())
  .then(data => {
    stories = data;
  })
  .catch(error => console.error("Error loading stories:", error));

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const age = params.get("age");
    const category = params.get("category");

    console.log("Age:", age);
    console.log("Category:", category);

    const container = document.getElementById("storyContainer");

    if (!container) {
        console.error("storyContainer not found");
        return;
    }

    const filteredStories = stories.filter(
        s => s.age === age && s.category === category
    );

    console.log("Filtered:", filteredStories);

    if (filteredStories.length === 0) {
        container.innerHTML = "<p>No stories found 😢</p>";
        return;
    }

    filteredStories.forEach(story => {
        const div = document.createElement("div");
        div.className = "col-md-6";
        div.innerHTML = `
            <div class="story-card">
                <h3>${story.title}</h3>
                <p>${story.content}</p>
            </div>
        `;
        container.appendChild(div);
    });

});
