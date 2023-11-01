import {
  Character,
  King,
  Fighter,
  Adviser,
  Squire,
} from '../../model/character';
import { List } from '../list/list';

export function App() {
  const charactersData: (Character | King | Fighter | Adviser | Squire)[] = [
    {
      isAlive: true,
      message: "You're all to die!",
      name: 'Joffrey',
      family: 'Baratheon',
      age: 18,
      reignYears: 1,
      category: 'king',
    },
    {
      isAlive: true,
      message: 'I hit first and ask later',
      name: 'Jaime',
      family: 'Lannister',
      age: 33,
      weapon: 'sword',
      skillLevel: 10,
      category: 'fighter',
    },
    {
      isAlive: true,
      message: 'I hit first and ask later',
      name: 'Daenerys',
      family: 'Targaryen',
      age: 18,
      weapon: 'dragons',
      skillLevel: 8,
      category: 'fighter',
    },
    {
      isAlive: true,
      message: 'I dunno know why, but I believe I am gonna die soon',
      name: 'Tyrion',
      family: 'Lannister',
      age: 40,
      adviseTo: {
        isAlive: true,
        message: 'I hit first and ask later',
        name: 'Daenerys',
        family: 'Targaryen',
        age: 18,
        weapon: 'dragons',
        skillLevel: 8,
      },
      category: 'adviser',
    },
    {
      isAlive: true,
      message: 'I am a real loser',
      name: 'Bronn',
      family: 'Nieve',
      age: 35,
      serveLevel: 5,
      servesTo: {
        isAlive: true,
        message: 'I hit first and ask later',
        name: 'Jamie',
        family: 'Lannister',
        age: 33,
        weapon: 'sword',
        skillLevel: 10,
      },
      category: 'squire',
    },
  ];

  return (
    <div>
      <List characters={charactersData}></List>
    </div>
  );
}
