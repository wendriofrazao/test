// detect_brute_force(logs)  # ["192.168.1.1"]

const logs = [
    "192.168.1.1 LOGIN_FAIL user=admin",
    "192.168.1.1 LOGIN_FAIL user=admin",
    "192.168.1.1 LOGIN_FAIL user=root",
    "10.0.0.5 LOGIN_FAIL user=test",
    "10.0.0.5 LOGIN_SUCCESS user=test"
];

let alter = logs.join("");
let vetAltr = alter.split(" ");

console.log(alter);
console.log(vetAltr);
let sum = 0;
for (let i = 0; i < vetAltr.length; i++) {
    if (vetAltr[i] === "LOGIN_FAIL") {
        sum++
    }
}
console.log(sum);
