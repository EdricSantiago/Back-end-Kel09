const server = require('./server');

const port = process.env.PORT || 3000;
const app = server.listen(port, (err) => {
    if (err) {
    console.error('Failed to start the server.', err);
    process.exit(1);
    } else {
    console.log(`Server runs at port ${port} 🚀`);
    }
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught exception.');

    app.close(() => process.exit(1));

    setTimeout(() => process.abort(), 1000).unref();
    process.exit(1);
});