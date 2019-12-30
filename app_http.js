const http = require('http');

const server = http.createServer((req, res) => {
  console.log('INCOMING REQUEST');
  console.log(req.method, req.url);

  if (req.method === 'POST') {
    let body = '';
    req.on('end', () => {
      console.log(body);
      const [, userName] = body.split('=');
      res.end(`<h1>${userName}</h1>`);
    });
    req.on('data', chunk => {
      body += chunk;
    });
  } else {
    //   res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    res.end(`<form method="POST">
          <input type="text" name="username" />
          <button type="submit">Create User</button>
        </form>`);
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server listening to PORT: ${PORT}`);
});
