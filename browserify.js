var browserify = require('browserify'),
	fs = require('fs'),
	b = browserify();

b.add('./src/index.js');
b.bundle().pipe(process.stdout);
