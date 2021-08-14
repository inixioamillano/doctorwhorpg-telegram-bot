const TelegramBot = require('node-telegram-bot-api');
var pjson = require('./package.json');

require('dotenv').config();

const enemies = require('./enemies').enemies;

console.log(`Booting up ${pjson.name} - v${pjson.version}`);

const bot = new TelegramBot(process.env.TOKEN, {polling: true});

const commands = [
    {
        command: '/rolldice',
        description: 'Roll the dice'
    },
    {
        command: '/successorfail',
        description: '<attribute> <skills> <goal>'
    },
    {
        command: '/randomgame',
        description: 'Generate a random game'
    },
    {
        command: '/enemies',
        description: 'Get a list of your enemies'
    },
    {
        command: '/commands',
        description: 'Get commands list'
    },
    {
        command: '/help',
        description: 'I give you basic info about me'
    }
];

if (process.env.PAYMENT_TOKEN) {
    commands.push({
        command: '/contribute',
        description: 'Contribute to this project with a small contribution'
    });
}

bot.setMyCommands(commands);

const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}

bot.onText(/\/rolldice/, (msg, match) => {
    const dice1 = rollDice();
    const dice2 = rollDice();
    bot.sendMessage(msg.chat.id, `Dice 1: ${dice1}\nDice 2: ${dice2}\nTotal: ${dice1 + dice2}`);
})

bot.onText(/\/randomgame/, (msg, match) => {
    
    const locations = ['Earth', 'Deep Space', 'Alien World', 'In the Vortex', 'Space Station', 'Another Earth'];
    const location = locations[rollDice() - 1];

    const enemies = ['Rival Time Traveller', 'Cyberman', 'Undiscovered Species', 'Human Villain', 'Sontaran', 'Daleks'];
    const enemy = enemies[rollDice() - 1];
    
    /* const locations = ['Earth', 'Deep Space', 'Alien World', 'In the Vortex', 'Space Station', 'Another Earth'];
    const location = locations[rollDice() - 1];
    
    const locations = ['Earth', 'Deep Space', 'Alien World', 'In the Vortex', 'Space Station', 'Another Earth'];
    const location = locations[rollDice() - 1];
    
    const locations = ['Earth', 'Deep Space', 'Alien World', 'In the Vortex', 'Space Station', 'Another Earth'];
    const location = locations[rollDice() - 1];
    
    const locations = ['Earth', 'Deep Space', 'Alien World', 'In the Vortex', 'Space Station', 'Another Earth'];
    const location = locations[rollDice() - 1];*/

    bot.sendMessage(msg.chat.id, `Location: ${location}\nEnemy: ${enemy}`)

})

bot.onText(/\/successorfail/, (msg, match) => {
    const params = msg.text.split(' ');
    console.log(params.length)
    if (params.length !== 4) {
        bot.sendMessage(msg.chat.id, 'Please, use /successorfail <attribute> <skill> <goal>')
    } else {
        try {
            const attribute = parseFloat(params[1]);
            const skill = parseFloat(params[2]);
            const goal = parseFloat(params[3]);

            if (isNaN(attribute) || isNaN(skill) || isNaN(goal)) {
                bot.sendMessage(msg.chat.id, 'Parameters must be numbers');
            } else {
                const dice1 = rollDice();
                const dice2 = rollDice();
                const result = attribute + skill + dice1 + dice2;
                let effect = '';
                if (result >= goal) {
                    if (dice1 === 6 || dice2 === 6) {
                        effect = 'Brilliant!\n\nYes, and... Something unexpected happened as a result of the outstanding ' +
                        'success. You not only achieve what you wanted, but something extra happens that ' +
                        'you decide, with the Gamemaster’s approval.\n' +
                        'Damage: If attacking someone or something, the damage is multiplied by 1.5.'
                    } else {
                        if (dice1 === 1 || dice2 === 1) {
                            effect = 'Barely\n\nYes, but... It may not have gone as well as the character had hoped, or something ' +
                            'unexpected has occurred. The roll was still successful, but only just. It was a close ' +
                            'call, but they managed to scrape through. The Gamemaster adds some sort of ' +
                            'complication or secondary problem.\n' +
                            'Damage: If attacking, the weapon only inflicts half of the damage. ' +
                            'You still hit the target, but only just.';
                        } else {
                            effect = 'Success\n\nYes... You have managed to do what you wanted and pretty well.\n' +
                            'Damage: If attacking, the weapon’s damage is unmodified.'
                        }
                    }
                } else {
                    if (dice1 === 6 || dice2 === 6) {
                        effect = 'Almost...\n\nNo, but... It could have been much worse. You didn’t manage to achieve what ' +
                        'you’d hoped, but it wasn’t a horrible failure. The Gamemaster allows something ' +
                        'advantageous out of the attempt, but it may not be what ' +
                        'they’d expected.\n' +
                        'Damage: If receiving damage from an injury or attack, the character is harmed but ' +
                        'only sustains half of the damage.';
                    } else {
                        if (dice1 === 1 || dice2 === 1) {
                            effect = 'Disastrous\n\nNo, and... Something else has gone wrong. Not only was failure bad enough, but ' +
                            'there may be additional consequences. ' +
                            '\nDamage: When taking damage, the character sustains one and a half times the ' +
                            'amount of damage (× 1.5).';
                        } else {
                            effect = 'Failure\n\nNo... You have certainly failed at the task, but it wasn’t a total disaster.' +
                            '\nDamage: If taking damage, the character sustains the normal, unmodified amount.'
                        }
                    }
                }
                bot.sendMessage(msg.chat.id, `Atribute: ${attribute}\nSkill: ${skill}\nDice 1: ${dice1}\nDice 2: ${dice2}\nTotal: ${attribute}+${skill}+${dice1}+${dice2}=${result}\nGoal: ${goal}\n\nEffect:\n${effect}`);
            }
        } catch(e) {
            bot.sendMessage(msg.chat.id, 'Parameters must be numbers');
        }
    }
})

bot.onText(/\/help/, async (msg, match) => {
    let text = `${pjson.actualName} - v${pjson.version}\n` 
        + `Hi! I'm a retired Kerb!am man. I live in a RaspberryPi and I try to help roleplayers during the game.`;
    if (process.env.PAYMENT_TOKEN) {
        text = text + `\n\nSupport this project with /support`;
    }
    bot.sendMessage(msg.chat.id, text,
    {
        parse_mode: 'HTML'
    });
});


bot.onText(/\/commands/, (msg, match) => {
    let text = `Available commands (v${pjson.version})\n\n`;
    commands.forEach(c => {
        text = text + `${c.command} - ${c.description}\n\n`
    })
    bot.sendMessage(msg.chat.id, text);
})

bot.onText(/\/contribute/, (msg, match) => {
    if (!process.env.PAYMENT_TOKEN) return;
    bot.sendInvoice(msg.chat.id, 'Support this project', 'Help to keep this project alive with a small contribution', pjson.name, process.env.PAYMENT_TOKEN, null, 'EUR', [{
        label: 'Contribution',
        amount: 100 //Cents
    }])
})

/*const enemies = [
    {
        name: 'Ice Warrior',
        cmd: /\/icewarrior/,
        cmdText: '/icewarrior',
        concept: 'Martian Warrior',
        focus: 'Honour',
        awareness: 2,
        coordination: 1,
        ingenuity: 2,
        presance: 2,
        resolve: 3,
        strength: 7,
        skills: [{key: 'Conflict', value: 4}, {key: 'Survival', value: 3}, {key: 'Technology', value: 3}],
        distinction: ' Ice Warrior — Encased in'
            + ' tough bioarmour that reduces damage'
            + ' taken by 10, but leaves them slow and'
            + ' uncoordinated (Attributes reflect this).'
            + ' They are weakened by the heat and suffer'
            + ' a –2 penalty on all actions when subjected'
            + ' to temperatures over 32°, taking damage'
            + ' as the temperature rises higher.',
        weapons: ' Sonic Gun (4/L/L) — Attached to the gauntlet of their armour',
        techLevvel: 5,
        storyPoints: 4
    },
];*/

bot.onText(/\/enemies/, (msg, match) => {
    let text = `Available enemies:\n\n`;
    enemies.forEach(e => {
        text = text + e.cmdText + '\n\n';
    })
    bot.sendMessage(msg.chat.id, text);
})

enemies.forEach(e => {
    bot.onText(e.cmd, (msg, match) => {
        bot.sendMessage(msg.chat.id, 
            `${e.name}\n\n` +
            `Concept: ${e.concept}\n\n` +
            `Focus: ${e.focus}\n\n` +
            `Awareness: ${e.awareness}\n` +
            `Coordination: ${e.coordination}\n` +
            `Ingenuity: ${e.ingenuity}\n` +
            `Presence: ${e.presance}\n` +
            `Resolve: ${e.resolve}\n` +
            `Strength: ${e.strength}\n\n` +
            `Skills:\n` +
            e.skills.map(s => `\t· ${s.key}: ${s.value}`).join('\n') +
            `\n\nDistinction: ${e.distinction}\n\n` +
            `Weapons: ${e.weapons}\n\n` +
            `Gadgets: ${e.gadget || '-'}` +
            `Tech Level: ${e.techLevvel}\n\n` +
            `Story Points: ${e.storyPoints}`
        )
    })
})


bot.on('polling_error', (e) => console.log(e))