const params = new URLSearchParams(window.location.search);
const title = params.get("title");

const storyData = {
    "The Jungle Adventure": [
    "Arjun was a brave and curious boy who loved exploring nature. One morning, he decided to walk into the nearby jungle with his small backpack. The tall trees looked mysterious, and sunlight danced through the leaves. Arjun felt excited but stayed alert as he moved forward carefully.\n\nAs he walked deeper, colorful birds flew above him and seemed to guide his way. Suddenly, Arjun heard a soft cry and found a young deer trapped in a hunter’s net. The deer looked scared and helpless. Arjun gently calmed the deer and promised to help.\n\nUsing a small knife from his bag, Arjun slowly cut the net and freed the deer. The deer jumped happily and bowed its head as if saying thank you. It then led Arjun to a beautiful hidden waterfall surrounded by flowers and shining stones. Arjun felt peaceful and proud.\n\nNear the waterfall, Arjun discovered glowing fruits hanging from the trees. When he touched one, he felt warmth and happiness in his heart. The jungle seemed alive and grateful for his kindness. Arjun realized that helping others brings true joy.\n\nAs the sun began to set, the jungle paths opened safely for Arjun. He returned home with a smile and shared his adventure with his family. Arjun learned that courage, kindness, and honesty are the greatest treasures of all."
 ],
   "The Honest Rabbit": [
    "Once upon a time, a small and gentle rabbit lived near a green farm. One morning, while hopping through the fields, he found a shiny golden carrot lying on the ground. The rabbit was very hungry, but he knew the carrot did not belong to him.\n\nInstead of keeping it, the rabbit decided to return the carrot to the farmer. On his way, other animals laughed and told him to keep it, but the rabbit stayed honest. He believed that doing the right thing was more important than being greedy.\n\nWhen the farmer saw the rabbit returning the carrot, he was surprised and happy. He thanked the rabbit and promised to protect him from danger. From that day on, the rabbit lived safely and was respected by all the animals.\n\nThe rabbit learned that honesty brings trust and happiness. Even small good actions can make a big difference. Truth always finds a way to reward those who follow it."
],
"The Laughing Monkey": [
    "In a lively jungle, there lived a monkey who loved telling jokes and making everyone laugh. From morning to evening, he jumped from tree to tree, spreading joy with his funny stories and playful tricks. Even the birds seemed to chirp happily around him.\n\nOne day, the jungle animals were worried because problems and arguments had made everyone sad. The laughing monkey decided to help. He gathered the animals and began telling jokes and acting silly until smiles slowly returned.\n\nEven the grumpy lion, who never smiled, started laughing loudly. The animals forgot their worries and began helping each other again. Laughter filled the jungle like magic.\n\nThe animals realized that happiness can solve many problems. From that day on, the laughing monkey became a symbol of joy, teaching everyone that laughter is the best medicine."
],

    "Midnight Train": [
    "Every night at exactly twelve o’clock, a train arrived at the old station with no passengers inside. The doors opened silently, and the lights flickered like they were alive. No one dared to step inside, but everyone wondered where the train came from.\n\nOne night, a young man gathered courage and entered the train. Inside, he found a dusty diary left on a seat. As he read it, the pages revealed a hidden crime that had happened years ago. The walls seemed to whisper secrets, and shadows moved when no one was there.\n\nThe train carried memories of the past, refusing to rest until the truth was known. As dawn approached, the train slowly disappeared, taking the shadows with it.\n\nFrom that day, the station was silent again. The mystery of the midnight train taught that secrets never stay hidden forever, and truth always finds its way to the light."
],
"Family and Friends": [
    "Riya lived in a small, happy town where family and friends were everything. Every evening, her parents, grandparents, and little brother sat together to share stories about their day. Laughter filled the house, making it warm and peaceful.\n\nAt school, Riya had a close group of friends who always supported each other. They studied together, played games, and helped one another during difficult times. When someone felt sad, the others listened and gave comfort.\n\nOne day, Riya faced a problem she could not solve alone. Her family encouraged her with kind words, while her friends helped her find a solution. She realized how strong she felt with their support.\n\nThrough every success and failure, family gave love and guidance, and friends gave understanding and joy. Riya learned that life becomes easier and happier when shared with the people who truly care. Family and friends are the greatest gifts of all."
],
"Beyond the Mountain": [
    "Arjun had always dreamed of crossing the mountain that stood like a wall beyond his village. Unlike childhood adventures, this journey was filled with uncertainty and fear. As he climbed higher, the air grew thinner and memories of past failures weighed heavily on him. Each step forward felt like a test of his patience, courage, and belief in himself.",
    "When Arjun finally reached the summit, he realized the mountain was never the real challenge. The true battle was overcoming doubt and fear within himself. Looking down at the long path he had traveled, he understood that growth comes from facing discomfort. He returned home stronger, knowing that real adventure changes a person from the inside."
],
"The Price of Truth": [
    "Meera worked in a company where shortcuts were common and honesty was rare. One day, she discovered an error that could bring her quick success if she stayed silent. The temptation was strong, and fear of losing her job kept her awake at night. Silence seemed easier than truth.",
    "Choosing integrity over comfort, Meera revealed the mistake despite the consequences. Though she faced criticism at first, her honesty earned lasting respect. Over time, her courage changed the work culture around her. She learned that truth may cost something in the moment, but it rewards a lifetime of peace."
],
"Still There for Each Other": [
    "As life grew busier, Rohan slowly drifted away from his family and childhood friends. Work deadlines replaced dinner conversations, and messages went unanswered. He believed success required distance, even if it meant loneliness.",
    "When a personal loss brought everyone back together, Rohan realized what he had been missing. Family and friends stood by him without questions or conditions. In that moment, he understood that achievements feel empty without people to share them with. True strength lies in staying connected, no matter how far life takes you."
],
"The Serious Meeting": [
    "The office meeting was meant to be serious, but nothing went as planned. Coffee spilled, presentations froze, and the boss accidentally joined with a funny filter on his face. Everyone tried to stay professional, hiding their laughter behind notebooks.",
    "Eventually, laughter took over the room, breaking weeks of stress and tension. The meeting ended with smiles instead of frustration. The team realized that sometimes, a little humour can bring people closer and make even the hardest days easier to handle."
],
"The Choice That Matters": [
    "Anil stood at a crossroads when he was offered success through unfair means. Many around him accepted such paths, calling it practical and necessary. Doubt and pressure pushed him toward an easy decision, even though his conscience warned him otherwise.",
    "Choosing honesty, Anil walked away from the opportunity and faced short-term loss. Over time, his integrity earned trust, respect, and lasting success. He learned that moral choices define who we become. Doing the right thing may be hard today, but it builds a stronger tomorrow."
],
"Whispers in the Hall": [
    "The college hall was always silent after sunset, but that night felt different. As Ananya walked through the long corridor, faint whispers followed her footsteps. She turned back, but the hall was empty, echoing only her own breath. The walls seemed to remember secrets they were never meant to share.",
    "The whispers grew louder near the old notice board, revealing stories of forgotten incidents and hidden truths. Ananya realized the hall was not haunted by ghosts, but by unresolved memories. When morning came, the whispers faded, leaving behind a warning — the past never truly disappears."
]
};

let page = 0;

const titleEl = document.getElementById("storyTitle");
const textEl = document.getElementById("storyText");

titleEl.innerText = title;

function render() {
    if (!storyData[title]) {
        textEl.innerText = "Story not found 😢";
        return;
    }
    textEl.innerText = storyData[title][page];
}

function nextPage() {
    if (page < storyData[title].length - 1) {
        page++;
        render();
    }
}

function prevPage() {
    if (page > 0) {
        page--;
        render();
    }
}

function readPage() {
    const speech = new SpeechSynthesisUtterance(textEl.innerText);
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
}
function goHome() {
    window.location.href = "index.html";
}


render();
