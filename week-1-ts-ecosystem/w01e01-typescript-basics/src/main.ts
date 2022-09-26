/**
 * Zasady co do pliku:
 *
 * Możesz dowolnie modyfikować zawartość tego pliku,
 * całość programu musi jednak działać tak jak do tej pory !
 *
 * */
import {User} from "./types/user";

const user = new User({
  name: 'Andy',
  age: 30,
  email: 'andy@mail-me-tommorow.com',
  address: {
    street: 'Strange Alley',
    no: 23,
  },
})

console.log(`User ${user.name} is ${user.hasGivenAge(18) ? 'adult' : 'minor'}`)
console.log(`and has${user.hasAddress() ? '' : ' no'} address`)
