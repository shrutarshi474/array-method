const scores = [10, 30, 14, 38, 56, 5];

// const newarray = scores.filter((score) => {
//   const store = score > 15;
//   return store;
// });

// console.log(newarray);
const users = [
  { name: "ray", premium: true },
  { name: "rai", premium: false },
  { name: "rraj", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);

console.log(premiumUsers);
