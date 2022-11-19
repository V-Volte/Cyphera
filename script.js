// import { fibEncrypt } from "./fibencrypt.js";
let sentences = [
    "Missile launch will occur exactly at noon on the next saturday.",
    "Rations have been shipped to the front lines.",
    "Several incoming planes detected into the western front.",
    "Eastern front cryptographic integrity compromised.",
    "It appears that our enemies have managed to decipher our communications.",
    "New encryption system will be used from midnight. Details will be sent via encrypted post."
]

let htext = "Please attempt to decipher the following communications: "

let demos = [
    "Missiles launched from the north front.",
    "Movement detected within the old forest.",
    "A brown fox has been observed querying a jumping lazy dog.",
    "Testing encryption systems. Do not respond."
]

let encryptedDemos = [fibEncrypt(demos[0]), fibEncrypt(demos[1]), fibEncrypt(demos[2]), fibEncrypt(demos[3])];
let msgcont = document.getElementById('msgcont');
for (let i = 0; i < encryptedDemos.length; ++i) {

    let row = document.createElement("div");
    row.classList.add('row');
    row.id = `row${i}`;

    let pt = document.createElement("div");
    pt.classList += "plain";
    pt.id = `pt${i}`;
    pt.innerText = demos[i];

    let ct = document.createElement("div");
    ct.classList += "cipher";
    ct.id = `ct${i}`;
    ct.innerText = encryptedDemos[i];

    row.appendChild(ct);
    row.appendChild(pt);

    msgcont.appendChild(row);
}

let qcont = document.getElementById('qcont');
for (let i = 0; i < sentences.length; ++i) {

    let row = document.createElement("div");
    row.classList.add('row');
    row.id = `row${i}`;

    let pt = document.createElement("input");
    pt.type = "text"
    pt.classList += "plaintext";
    pt.id = `a${i}`;
    pt.placeholder = 'Enter deciphered message';

    let ct = document.createElement("div");
    ct.classList += "cipher";
    ct.id = `q${i}`;
    ct.innerText = fibEncrypt(sentences[i]);

    row.appendChild(ct);
    row.appendChild(pt);

    qcont.appendChild(row);
}

let maxpoints = 0;
for (let i = 0; i < sentences.length; ++i) maxpoints += sentences[i].length;


function verifyCorrectness() {
    let points = 0;
    for (let i = 0; i < sentences.length; ++i) {
        let text = document.getElementById(`a${i}`).value;
        let dist = levenshtein(sentences[i], text);

        points += sentences[i].length - dist;

        if (dist < sentences[i].length / 2) document.getElementById(`a${i}`).classList.add('correct');
        else document.getElementById(`a${i}`).classList.add('wrong');
    }
    return points;
}

document.getElementById('verify').addEventListener("click", () => {
    let points = verifyCorrectness();
    document.getElementById('h').innerText = `${htext} (Current points: ${points} / ${maxpoints})`
})

// for (let i = 0; i < 4; ++i) {
//     encryptedDemos.push(fibEncrypt(demos[i]));
// }