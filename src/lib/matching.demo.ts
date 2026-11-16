
import { User, findMatches } from './matching';

const user1: User = {
  id: 'user1',
  name: 'James',
  age: 25,
  gender: 'male',
  interestedIn: 'female',
  city: 'Lusaka'
};

const user2: User = {
  id: 'user2',
  name: 'Mary',
  age: 23,
  gender: 'female',
  interestedIn: 'male',
  city: 'Lusaka'
};

const users = [user1, user2];

const matches = findMatches(user1, users);

console.log('James matches:', matches);
console.log('Match successful:', matches.length === 1);
