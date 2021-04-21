//Generate Random number
let randomRoll = (num) => {
    return Math.floor(Math.random() * num)
};

// String values to be pulled from
let storyGenerator = {
character: ['Bard', 'Dwarven Soldier', 'Human', 'Pirate'],
weapon: ['Sword', 'Battleaxe', 'Hunter\'s bow', 'Ukulele'],
enemy: ['Zombie', 'Hydra', 'Dragon', 'Necromancer']
};

//store the 'story' in an array
let passage = [];

//iterate over storyGenerator
for(let story in storyGenerator) {
    let generateIndex = randomRoll(storyGenerator[story].length)

    //switch in properties to make the story
    switch(story) {
        case 'character':
            passage.push(`You are a ${storyGenerator[story][generateIndex]} `)
            break;
        
        case 'weapon':
            passage.push(`weilding a ${storyGenerator[story][generateIndex]}, `)
            break;
    
        case 'enemy':
            passage.push(`a ${storyGenerator[story][generateIndex]} stands in your way.`)
            break;
        
        default:
            passage.push(`You slept through your alarm and forgot to adventure today.`)
    }
};

//format the story
let formatPassage = (passages) => {
    const formatted = passage.join('\n')
    console.log(formatted)
};

formatPassage(passage);