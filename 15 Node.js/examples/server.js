// import module: require(module_name)

const http = require('http');

const ip = "127.0.0.1"; // localhost
const port = 3344; // 0...1024-65XXX

const server = http.createServer((request, response) => {

    // request  - contains client request data
    // response - return result data to the client
    console.log("Got a reguest from client!");

    // const os = request.headers['sec-ch-ua-platform'];
    // console.log("Client OS:", os);

    switch (request.method) {
        case "GET":
            if (request.url == "/user") {
                let user = {
                    id: 1033,
                    login: "super",
                    email: "ex@gmail.com"
                }
                response.setHeader('Content-Type', 'application/json');
                response.end(JSON.stringify(user));
            }
            else {
                response.statusCode = 200; // OK
                response.setHeader('Content-Type', 'text/html');
                response.end("<h1>Hello from GET case!</h1>");
            }
            break;

        case "POST":
            response.statusCode = 200; // OK
            response.setHeader('Content-Type', 'text/plain');
            response.end("Hello from POST case!");
            break;
        default:
            response.setHeader('Content-Type', 'text/plain');
            response.end("Not Found!");
            break;
    }
});

// start server
server.listen(port, ip, () => {
    console.log(`Server is listening: http://${ip}:${port}`);
});
