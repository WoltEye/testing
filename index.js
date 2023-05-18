const ranMessage = () => {
    const randomGen = (item) => {
        return Math.floor(Math.random() * item.length);
      }
    const messageCompontents = 
  {
    greetings:  
    [
     'Hi',
     'Hello',
     'Wassup', 
     'Yo',
     'Hello there'
    ],
    sentences: 
    [
    'how are you doing today?',
    'what is your favorite game?',
    'have you ever tried sushi?',
    'do you want to play with me?',
    'How is your day going?'
   ],
   endings: 
    [
     'I also think you are really good at video games',
     'Im really enjoying talking to you',
     'You are looking fine today',
     'My name is James',
     'I like it'
    ]
}; 
    return `${messageCompontents.greetings[randomGen(messageCompontents.greetings)]} ${messageCompontents.sentences[randomGen(messageCompontents.sentences)]} ${messageCompontents.endings[randomGen(messageCompontents.endings)]}`;
}

console.log(ranMessage());