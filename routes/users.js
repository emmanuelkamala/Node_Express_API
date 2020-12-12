import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: "Emmanuel",
    lastName: "Kamala",
    age: 34
  },

  {
    firstName: "Angelina",
    lastName: "Nyamwihula",
    age: 31
  }
]

router.get('/', (req, res) => {
  console.log(users);
  res.send(users);
})

router.post('/', (req, res) => {
  const user = req.body;

  users.push(user);

  res.send(`User with the name ${user.firstName} added to the database`);
})

export default router;