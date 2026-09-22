const express = require('express');
  const app = express();
  const { exec } = require('child_process');
  
  app.get('/exec', (req, res) => {
    const userInput = req.query.cmd;
    // eval REMOVED — is finding ko fix kar diya
    exec("ls " + userInput, (err, stdout) => {
      res.send(stdout);
    });
  });
  
  app.get('/redirect', (req, res) => {
    res.redirect(req.query.url);
  });
  
  // NEW vulnerability — path traversal (sirf main pe)
  app.get('/file', (req, res) => {
    const fs = require('fs');
    const filename = req.query.name;
    fs.readFile('/data/' + filename, (err, data) => {
      res.send(data);
    });
  });
  
  app.listen(3000);
