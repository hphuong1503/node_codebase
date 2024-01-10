// Khai bao port va khoi dong server
import app from "./app";
const port = 3000;
const server = app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log("Exit server Express")
    })
})