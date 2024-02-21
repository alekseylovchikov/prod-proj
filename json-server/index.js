const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const userdb = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'users.json'), 'UTF-8'));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

function findUser({ username, password }) {
  return userdb.users.find((user) => user.username === username && user.password === password);
}

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });

  next();
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Access denied' });
  }

  next();
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = findUser({ username, password });

  if (user) return res.json(user);

  return res.status(403).json({ message: 'Access denied' });
});

server.use(router);

server.listen(8000, () => {
  console.log('JSON Server is running');
});
