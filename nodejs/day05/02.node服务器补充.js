const http = require("http");
const qs = require("querystring");
const server = http.createServer((req, res) => {
    if (res.url === 'favicon.ico') return res.end();
    // console.log(req.url);
    // console.log(req.method);
    /* const resulte = req.url.split("?")[1]?.split("&").reduce((p, c) => {
        const [key, value] = c.split("=");
        p[key] = value;
        return p;
    }, {});
    console.log(resulte); */
    const re = qs.parse(req.url.split("?")[1]);
    console.log(re);
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.end("<h1>湖人总冠军</h1>");
});
const port = 3000;
const host = "localhost";
server.listen(port, host, (err) => {
    if (err) return console.log("启动服务失败" + err);
    console.log(`http://${host}:${port}`);
});