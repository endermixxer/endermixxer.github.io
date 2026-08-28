const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

const VALID_COMMANDS = {
    "ssh bandit0@bandit.labs.overthewire.org -p 2220": "levels/level0.html",
    "ssh bandit1@bandit.labs.overthewire.org -p 2220": "levels/level1-2.html",
    "ssh bandit2@bandit.labs.overthewire.org -p 2220": "levels/level2-3.html",
    "ssh bandit3@bandit.labs.overthewire.org -p 2220": "levels/level3-4.html",
    "ssh bandit4@bandit.labs.overthewire.org -p 2220": "levels/level4-5.html",
    "ssh bandit5@bandit.labs.overthewire.org -p 2220": "levels/level5-6.html",
    "ssh bandit6@bandit.labs.overthewire.org -p 2220": "levels/level6-7.html",
    "ssh bandit7@bandit.labs.overthewire.org -p 2220": "levels/level7-8.html",
    "ssh bandit8@bandit.labs.overthewire.org -p 2220": "levels/level8-9.html",
    "ssh bandit9@bandit.labs.overthewire.org -p 2220": "levels/level9-10.html",
    "ssh bandit10@bandit.labs.overthewire.org -p 2220": "levels/level10-11.html",
    "ssh bandit11@bandit.labs.overthewire.org -p 2220": "levels/level11-12.html",
    "ssh bandit12@bandit.labs.overthewire.org -p 2220": "levels/level12-13.html",
    "ssh bandit13@bandit.labs.overthewire.org -p 2220": "levels/level13-14.html",
    "ssh bandit14@bandit.labs.overthewire.org -p 2220": "levels/level14-15.html",
    "ssh bandit15@bandit.labs.overthewire.org -p 2220": "levels/level5-16.html",
    "ssh bandit16@bandit.labs.overthewire.org -p 2220": "levels/level6-17.html",
    "ssh bandit17@bandit.labs.overthewire.org -p 2220": "levels/level17-18.html",
    "ssh bandit18@bandit.labs.overthewire.org -p 2220": "levels/level18-19.html",
    "ssh bandit19@bandit.labs.overthewire.org -p 2220": "levels/level19-20.html",
    "ssh bandit20@bandit.labs.overthewire.org -p 2220": "levels/level20-21.html",
    "ssh bandit21@bandit.labs.overthewire.org -p 2220": "levels/level21-22.html",
    "ssh bandit22@bandit.labs.overthewire.org -p 2220": "levels/level22-23.html",
    
};

function print(text) {
    output.innerHTML += text + "\n";
}

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const command = input.value.trim();
        print("> " + command);

        if (VALID_COMMANDS[command]) {
            print("Connecting...");
            setTimeout(() => {
                window.location.href = VALID_COMMANDS[command];
            }, 800);
        } else {
            print("Invalid command.");
        }

        input.value = "";
    }
});

// Optional banner
print(`
 _                     _ _ _
| |__   __ _ _ __   __| (_) |_
| '_ \\ / _\` | '_ \\ / _\` | | __|
| |_) | (_| | | | | (_| | | |_
|_.__/ \\__,_|_| |_|\\__,_|_|\\__|

This is an OverTheWire game server.
More information: https://overthewire.org/wargames

Type your SSH command to continue.
`);

