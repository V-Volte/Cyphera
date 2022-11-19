// import { fibEncrypt } from "./fibencrypt.js";
let sentences = [
    "Missile launch will occur exactly at noon on the next saturday.",
    "Rations have been shipped to the front lines.",
    "Several incoming planes detected into the western front.",
    "Eastern front cryptographic integrity compromised.",
    "It appears that our enemies have managed to decipher our communications.",
    "New encryption system will be used from midnight. Details will be sent via encrypted post."
]

let demos = [
    "Missiles launched from the north front.",
    "Movement detected within the old forest.",
    "A brown fox has been observed querying a jumping lazy dog.",
    "Testing encryption systems. Do not respond."
]

let encryptedDemos = [fibEncrypt(demos[0]), fibEncrypt(demos[1]), fibEncrypt(demos[2]), fibEncrypt(demos[3])];

// for (let i = 0; i < 4; ++i) {
//     encryptedDemos.push(fibEncrypt(demos[i]));
// }