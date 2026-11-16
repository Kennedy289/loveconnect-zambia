export type User = {
  id: string;
  name: string;
  age: number;
  gender: string;
  interestedIn: string;
  city: string;
};

export function findMatches(
  currentUser: User,
  users: User[]
): User[] {
  return users.filter(user =>
    user.id !== currentUser.id &&
    user.age >= 18 &&
    currentUser.age >= 18 &&
    user.interestedIn === currentUser.gender &&
    currentUser.interestedIn === user.gender &&
    user.city === currentUser.city
  );
}