const enemies = [
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
        skills: [
            {key: 'Conflict', value: 4}, 
            {key: 'Survival', value: 3}, 
            {key: 'Technology', value: 3}
        ],
        distinction: 'Ice Warrior — Encased in'
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
    {
        name: 'The Empress of the Racnoss',
        cmd: /\/empressracnoss/,
        cmdText: '/empressracnoss',
        concept: 'Alien Queen',
        focus: 'Brood',
        awareness: 3,
        coordination: 4,
        ingenuity: 4,
        presance: 3,
        resolve: 5,
        strength: 9,
        skills: [
            {key: 'Athletics', value: 5},
            {key: 'Conflict', value: 2},
            {key: 'Craft', value: 2},
            {key: 'Knowledge', value: 2}, 
            {key: 'Technology', value: 2},
            {key: 'Transport', value: 4}
        ],
        distinction: 'Racnoss — Tough and'
            + ' deadly, +2 damage in close combat from'
            + ' bite or stab, her tough skin reduces any'
            + ' damage taken by 2. Can produce web' 
            + ' to hang from or trap victims (Strength 5,'
            + ' support over 1000kgs)',
        weapons: '-',
        techLevvel: 7,
        storyPoints: 8
    },
    {
        name: 'The Master',
        cmd: /\/master/,
        cmdText: '/master',
        concept: 'Obsessive Time Lord Nemesis',
        focus: 'The Doctor',
        awareness: 4,
        coordination: 3,
        ingenuity: 10,
        presance: 5,
        resolve: 5,
        strength: 3,
        skills: [
            {key: 'Athletics', value: 1},
            {key: 'Conflict', value: 3},
            {key: 'Convince', value: 5},
            {key: 'Convince (Hypnosis)', value: 7},
            {key: 'Craft', value: 1},
            {key: 'Intuition', value: 3},
            {key: 'Knowledge', value: 6},
            {key: 'Survival', value: 5}, 
            {key: 'Technology', value: 5},
            {key: 'Transport', value: 4},
            {key: 'Transport (TARDIS)', value: 6}
        ],
        distinction: 'Time Lord Experienced',
        weapons: '-',
        gadget: 'Tissue Compression Eliminator'
            + ' — Distinction: Molecular Shrinking —'
            + ' On organic matter (4/L/L) and non organic'
            + ' matter (shrinking the item or object'
            + ' to a fraction of its size). Also has some'
            + ' communications capabilities. Story'
            + ' Points: 4',
        techLevvel: 10,
        storyPoints: 6
    },
    {
        name: 'Dalek',
        cmd: /\/dalek/,
        cmdText: '/dalek',
        concept: 'Armoured Mutant Soldier',
        focus: 'Superiority',
        awareness: 3,
        coordination: 2,
        ingenuity: 4,
        presance: 4,
        resolve: 4,
        strength: 7,
        skills: [
            {key: 'Conflict', value: 4},
            {key: 'Convince', value: 3},
            {key: 'Medicine', value: 3},
            {key: 'Science', value: 8},
            {key: 'Survival', value: 4}, 
            {key: 'Technology', value: 8},
        ],
        distinction: 'Dalek — Its mutated body is'
            + ' housed in Dalekanium, reducing damage'
            + ' by 10, and protected by a forcefield that'
            + ' reduces the effects of projectile weapons'
            + ' by two stages (those shooting at it will'
            + ' have their result reduced from Success to'
            + ' Almost, or Almost to Disastrous). It can fly,'
            + ' hover, and survive in space or underwater.'
            + ' It can also interface with technology, and,'
            + ' if necessary, self-destruct (3/6/9 damage'
            + ' in a 10m radius). As a last resort, higher'
            + ' ranking Daleks can ‘emergency temporal'
            + ' shift’ and throw themselves into the Vortex'
            + ' to escape. ',
        weapons: 'Exterminator (4/L/L) — The'
            + ' legendary Dalek weapon usually kills with'
            + ' a single shot',
        techLevvel: 9,
        storyPoints: 7
    },
    {
        name: 'Cyberman',
        cmd: /\/cyberman/,
        cmdText: '/cyberman',
        concept: 'Upgraded Humanoid Cyborg',
        focus: 'Conversion',
        awareness: 2,
        coordination: 2,
        ingenuity: 2,
        presance: 3,
        resolve: 3,
        strength: 7,
        skills: [
            {key: 'Conflict', value: 3},
            {key: 'Convince', value: 2},
            {key: 'Medicine', value: 1},
            {key: 'Science', value: 1}, 
            {key: 'Technology', value: 4},
        ],
        distinction: 'Cyberman - Their heavily'
            + ' armoured body reduces damage by'
            + ' 10, but they are susceptible to strong'
            + ' magnetic fields, and exposure to gold can'
            + ' be lethal (Mondas Cybermen only). Some'
            + ' modern Cybermen have the ability to fly,'
            + ' and can discharge an electric blast from'
            + ' their grip (4/9/13).',
        weapons: 'Particle Beam (4/L/L) —'
            + ' Cybermen have an arm mounted'
            + ' weapon that is usually fatal.',
        techLevvel: 9,
        storyPoints: 7
    },
];

exports.enemies = enemies;