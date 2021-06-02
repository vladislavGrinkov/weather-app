// eslint-disable-next-line @typescript-eslint/no-var-requires
const app = require('express')();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bodyParser = require('body-parser');

const user = {
  username: 'admin',
  password: 'admin',
};

app.use(bodyParser.json());

app.post('/api/v1/login', (req, res) => {
  const { username, password } = req.body;
  console.dir(req.body);
  if (username === user.username && password === user.password) {
    res.json({
      isAuth: true,
      isError: false,
    });
  } else {
    res.status(401).json({
      isAuth: false,
      isError: true,
    });
  }
});

app.listen(8089, () => console.log('STARTED 4000'));