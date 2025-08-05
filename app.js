let btn = document.querySelector("button");

function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

const quotes = [
  "Ab mujhe uski yaad nahi aati, ab woh mujhe yaad ho chuki hai.",
  "Kya sitam hai ki uski surat ab gaur karne par yaad aati hai.",
  "Zindagi mein kuch haasil nahi kar sakta, main kabhi aaraam nahi paa sakta.",
  "Nafrat bhi kyun karein unse, itna bhi vaasta kyun rakhein unse?",
  "Ki ab hum bichhde toh shayad khwabon mein milein, jaise sukhe hue phool kitaabon mein milein.",
  "Usse kaho bohot jald milne aaye humein, kahin akele rehne ki aadat hi na pad jaaye humein.",
  "Apne maiyyar se neeche toh main aane se raha, sher bhooka hi sahi, ghaas toh khaane se raha.",
  "Aap apne baal baandh lo, main baar-baar apni baat bhool raha hoon.",
  "Ab nikal aao apne andar se, ghar mein samaan ki zaroorat hai.",
  "Woh kehti hai, 'Safed kapdon mein bade acche lagte ho Asif.' Aaj kafan mein lipta hoon toh woh roti kyun hai?",
  "Aere gaire ko theherne ki ijaazat nahi di, dil ko dil rakha hai, bazaar nahi hone diya.",
  "Hum bhi gaon mein kabhi shaam ko baitha karte the, humko bhi haalaaton ne baahar bheja hai.",
  "Tera chup rehna mere zehan mein kya baith gaya, itni awaazein tujhe di ki gala baith gaya.",
  "Raat ke dariya ka kinara bhi kabhi aayega, waqt ka kya hai, humara bhi kabhi aayega, ek accha din aaya tha zindagi mein kabhi, poochhna tha: dobara bhi kabhi aayega?",
  "Guftagu humse aur khayalon mein koi aur, haal aapka bhi hamare namaazon jaisa hai.",
  "Aur phir ek sawaari kya utri, main bhari gaadi mein akela reh gaya.",
  "Haqeeqat jaan lunga toh sab paraaye ho jaayenge, humein is bharam mein rehne do ki sab apne hain.",
  "Mujhe mehenge-mehenge tohfe bohot pasand hain, jaise waqt, aitbaar, izzat, aur chai.",
  "Intezaar itna karo ki Khuda bhi kahe, le le, haq hai tera.",
  "Hazaar gham hain, khulaasa kaun kare? Muskura dete hain, ab tamaasha kaun kare?"
];

const audioMap = {
    0: ["yaadE", "yaadK"], 
    1: ["sitamE", "sitamK"], 
    2: ["aaramEE", "aaramKK"], 
    3: ["nafratE", "nafratK"], 
    4: ["phoolE", "phoolK"], 
    5: ["akeleE", "akeleK"], 
    6: ["maiyyarE", "maiyyarK"], 
    7: ["baalE", "baalK"], 
    8: ["samaanE", "samaanK"],
    9: ["kafanE"],
    10: ["bazaarE"],
    11: ["haalatonE"],
    12: ["AwaazE"],
    13: ["RaatE"],
    14: ["NamazK"],
    15: ["SawaariK"],
    16: ["ParayeK"],
    17: ["ChaiK"],
    18: ["HaqK"],
    19: ["TamashaK"]
};

function changeText(button) {
    button.innerText = "Mehfil-E-Dard Mai Swagat Hai!";
}

function updateContent() {
    let h3 = document.querySelector("h3");
    let quoteSpan = document.getElementById("quote-text");
    let randomColor = getRandomColor();
    h3.innerText = "Draw me in colors, you made me see.";
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quoteSpan.innerText = quotes[randomIndex];
    quoteSpan.style.backgroundColor = randomColor;
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    if (audioMap[randomIndex]) {
        let audios = audioMap[randomIndex];
        let randomAudioId = audios[Math.floor(Math.random() * audios.length)];
        let audioElement = document.getElementById(randomAudioId);
        if (audioElement) {
            audioElement.play();
        }
    }
}

btn.addEventListener("click", updateContent);
document.addEventListener("keydown", updateContent);

