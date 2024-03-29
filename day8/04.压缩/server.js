const express = require("express");
const eTag = require("etag");
const zlib = require("zlib");
const open = require("./util/open");
const { promisify } = require("util");
const { resolve } = require("path");
const fs = require("fs");
const app = express();
app.get("/", (req, res) => {
    const filePath = resolve(__dirname, "./public/index.html");
    const rs = fs.createReadStream(filePath);
    res.set("Content-Type", "text/html;charset=utf-8");
    rs.pipe(res);
});
app.get("/js/index.js", (req, res) => {
    const filePath = resolve(__dirname, "./public/js/index.js");
    const rs = fs.createReadStream(filePath);
    const acceptEncoding = req.headers['accept-encoding'];
    console.log(acceptEncoding);
    res.set("cache-control", "max-age=10");
    res.set("expires", new Date(Date.now() + 1000 * 3600).toGMTString());
    res.set("Content-Type", "application/javascript;charset=utf-8");
    if (acceptEncoding.includes("gzip")) {
        const fileGzip = rs.pipe(zlib.createGzip());
        res.set("Content-Encoding", "gzip");
        fileGzip.pipe(res);
        return;
    }
    if (acceptEncoding.includes("deflate")) {
        const fileDeflate = rs.pipe(zlib.createDeflate());
        res.set("Content-Encoding", "deflate");
        fileDeflate.pipe(res);
        return;
    }
    if (acceptEncoding.includes("br")) {
        const fileBr = rs.pipe(zlib.createBrotliCompress());
        res.set("Content-Encoding", "br");
        fileBr.pipe(res);
        return;
    }
    rs.pipe(res);
});
app.get("/css/index.css", async (req, res) => {
    const filePath = resolve(__dirname, "./public/css/index.css");
    const stat = promisify(fs.stat);
    const fileStat = await stat(filePath);
    const ifNoneMatch = req.headers["if-none-match"];
    const ifModifiedSince = req.headers["if-modified-since"];
    const lastModified = new Date(fileStat.mtime).toGMTString();
    const fileEtag = eTag(fileStat);
    if (ifNoneMatch === fileEtag && ifModifiedSince === lastModified) {
        res.status(304).end();
        return;
    }
    res.set("eTag", fileEtag);
    res.set("last-modified", lastModified);
    const rs = fs.createReadStream(filePath);
    res.set("Content-Type", "text/css;charset=utf-8");
    rs.pipe(res);
});
app.listen(3000, (err) => {
    if (err) return console.log("服务器启动错误" + err);
    console.log("http://127.0.0.1:3000");
    open("http://127.0.0.1:3000");
});