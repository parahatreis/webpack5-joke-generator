import axios from "axios";
const URL = 'https://icanhazdadjoke.com'

const generateJoke = async () => {
  try {
    setLoading(true)
    const config = {
      headers: {
        Accept: 'application/json',
      }
    };
    const res = await axios.get(URL, config);
    setJokeText(res?.data?.joke)
  } catch (error) {
    setJokeText("Error occurred!");
  } finally {
    setLoading(false)
  }
};

const setLoading = (val) => {
  if (val) return setJokeText("Loading...");
}

const setJokeText = (val) => {
  if (val) return document.getElementById('joke').innerText = val;
  return document.getElementById('joke').innerText = "";
}

export default generateJoke;