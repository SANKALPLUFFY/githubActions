const http = require('http');

	const server = http.createServer((req, res) => {
	    if (req.url === '/') {
	        res.end('<h1>Hello, World</h1>');
	    }
	});

