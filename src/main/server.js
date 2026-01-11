// detect_brute_force(logs)  # ["192.168.1.1"]
// logs = [
//     "1.1.1.1 LOGIN_FAIL user=a", 
//     "2.2.2.2 LOGIN_FAIL user=b", 
//     "1.1.1.1 LOGIN_FAIL user=a", 
//     "2.2.2.2 LOGIN_SUCCESS user=b", 
//     "1.1.1.1 LOGIN_FAIL user=a", 
//     "2.2.2.2 LOGIN_FAIL user=b"
// ]

const logs = [
    "192.168.1.1 LOGIN_FAIL user=admin",
    "192.168.1.1 LOGIN_FAIL user=admin",
    "192.168.1.1 LOGIN_FAIL user=root",
    "10.0.0.5 LOGIN_FAIL user=test",
    "10.0.0.5 LOGIN_SUCCESS user=test"
];

// let alter = logs.split(" ");
// let vetAltr = alter.split(" ");

let sumNumber = 0;
let sumOther = 0;
let arrIp = [];
let arrLog = [];

for (let i = 0; i < logs.length; i++) {
    let ip = logs[i].split(" ").slice(0, 1);
    let log = logs[i].split(" ").slice(1, 2);

    let ipStr = ip.toString();
    let logStr = log.toString();

    arrIp.push(ipStr);
    arrLog.push(logStr);
}

for (let i = 0, j = 0; i < arrIp.length, j < arrLog.length; i++, j++) {
    
}

console.log(arrIp);
console.log(arrLog);
// for (let j = 0; j < vet.length; j++) {

// }

// [ '192.168.1.1', '192.168.1.1', '192.168.1.1', '10.0.0.5', '10.0.0.5' ]

