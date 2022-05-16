import generateJoke from "./generateJoke";
// styles
import './styles/main.scss';
// assets
import laughing from './assets/laugh.jpeg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke()