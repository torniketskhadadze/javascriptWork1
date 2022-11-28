
const users = [
    {name:'Temo', age:25},
    {name:'Lasha', age:21},
    {name:'Ana', age:28}
]

function compareAges(users) {
  let minAge= users[0].age
  let name
  for (const item of users) {
    if(minAge>item.age) {
        minAge=item.age
        name=item.name
    }
  }
  return name
}
console.log(compareAges(users))

 


const user = {
    name:'Tornike',
    lastName:'Tskhadadze',
    age: 19
}

const changeObject= function (user){
    const newUser=user
    return newUser
}

const newObject = changeObject(user)
console.log(newObject)



while (true) {
  const firstplayer = parseInt(Math.random() * 10 -3);
  const secondplayer = parseInt(Math.random() * 10 -3);

  if (firstplayer === 3 && secondplayer === 3) {
    console.log('Draw');
    break
    
  } else if (firstplayer === 3) {
    console.log('FirstPlayer  won the game');
    break
    
  } else if (secondplayer === 3) {
    console.log('SecondPlayer won the game');
    break

  }
}



