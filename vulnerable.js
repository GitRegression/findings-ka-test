const express = require('express');
  const app = express();
  const { exec } = require('child_process');
  
  app.get('/exec', (req, res) => {
    const userInput = req.query.cmd;
    eval(userInput);
    exec("ls " + userInput, (err, stdout) => {
      res.send(stdout);
    });
  });
  
  app.get('/redirect', (req, res) => {
    res.redirect(req.query.url);
  });
  
  app.get('/sql', (req, res) => {
    const query = "SELECT * FROM users WHERE id = " + req.query.id;
    res.send(query);
  });
  
  app.listen(3000);
