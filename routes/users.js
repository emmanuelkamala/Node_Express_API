import express from 'express';
import { v4 as uuidv4} from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
  console.log(users);
  res.send(users);
})

router.post('/', (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database`);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
})


router.delete('/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} has been deleted successfully`);

})


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (user) user.firstName = firstName;
  if (user) user.lastName = lastName;
  if (user) user.age = age;

  res.send(`User with the id ${id} has been updated successfully`);
})


export default router;
