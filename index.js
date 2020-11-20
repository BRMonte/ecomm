const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email"/>
        <input name="password" placeholder="password"/>
        <input name="passwordConfirmation" placeholder="password confirmaion"/>
        <button>SIgn Up</button>
      </form>
    </div>
  `);
});

app.post('/', (req, res) => {
  res.send('Account created!!!');
});

app.listen(3000, () => {
  console.log('Listening');
});

