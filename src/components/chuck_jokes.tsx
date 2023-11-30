import ChuckJoke from "./chuck_joke";
import Joke from "../joke";

interface ChuckJokesProps {
  jokes: Array<Joke>;
}

const ChuckJokes: React.FC<ChuckJokesProps> = ({ jokes }) => {
  return (
    <>
      {jokes.map((joke) => (
        <ChuckJoke key={joke.id} joke={joke.joke} />
      ))}
    </>
  );
};

export default ChuckJokes;
