const randomDadJoke = () => {

    const dadContainer = document.querySelector('.dad-joke-content')
    const dadJokeContainer = dadContainer.querySelector('.dad-joke-content__dad-joke')
    const sonContainer = dadContainer.querySelector('.dad-joke-content__son-respons')

    const API_URL = 'https://icanhazdadjoke.com/slack'

    const getDadJoke = async () => {

        const response = await fetch(API_URL)
        const data = await response.json()

        showDadJoke(data.attachments)
    }

    const showDadJoke = (jokes) => {

        jokes.forEach(joke => {
            
            const theDadJoke = joke.text

            dadJokeContainer.append(theDadJoke)
        });

    }
    
    getDadJoke()

    const getSonRespons = () => {
        const sonSay = ["Dad... Stop it...", "Really dad?...", "...", "This is why mom left you...", "Please no more...", "Okej that one was good."];

        const random = Math.floor(Math.random() * sonSay.length);
        sonContainer.append(sonSay[random])
        console.log(random, sonSay[random]);
    }

    getSonRespons()

}

randomDadJoke()