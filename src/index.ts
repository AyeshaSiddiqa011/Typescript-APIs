interface User {
    name: string;
    age: number;
    id: number;
    email: string;
};

type UpddateProps = Pick<User, 'name' | 'age' | 'email'>

function updateUser(updatedProps: UpddateProps) {
    console.log(`Name: ${updatedProps.name}`)
}

// function sumOfAge(user1: User, user2: User):number{
//     return user1.age + user2.age;
// };

// const ans = sumOfAge({name: "iqq", age:10}, {name: "akmk", age: 30})
// console.log(ans);