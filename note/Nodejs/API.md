# API

Node.js 提供了很多内置的 API 来帮助开发者创建和管理网络应用。这些 API 大都是以模块的形式存在，你可以直接在你的应用中引入并使用它们。下面是一些常用的 Node.js API：

## HTTP 模块

1. **HTTP 模块**：这个模块提供了创建 HTTP 服务器的工具，你可以使用它来创建你的 web 应用。

```javascript
// 创建一个简单的 HTTP 服务器
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
```

## File System（fs）模块

2. **File System（fs）模块**：这个模块提供了操作文件系统的 API，例如读取文件、写入文件、删除文件等。

```javascript
// 读取一个文件
const fs = require("fs");

fs.readFile("/path/to/file", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

## Path 模块

3. **Path 模块**：这个模块提供了处理和转换文件路径的工具。

```javascript
// 解析一个文件路径
const path = require("path");

const filePath = "/path/to/file.txt";
console.log(path.basename(filePath)); // 输出：file.txt
```

## URL 模块

4. **URL 模块**：这个模块提供了处理和解析 URL 的工具。

```javascript
// 解析一个 URL
const url = require("url");

const myURL = url.parse("http://example.com/path?name=test", true);
console.log(myURL.host); // 输出：example.com
console.log(myURL.query); // 输出：{ name: 'test' }
```

## Stream 模块

5. **Stream 模块**：这个模块提供了处理流数据的 API，例如读取大文件或网络数据。

```javascript
// 读取一个大文件
const fs = require("fs");

const readStream = fs.createReadStream("/path/to/bigfile");

readStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readStream.on("end", () => {
  console.log("There will be no more data.");
});
```

## Events 模块

6. **Events 模块**：这个模块提供了创建、触发和监听自定义事件的工具。

```javascript
// 创建和触发自定义事件
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log("an event occurred!");
});

myEmitter.emit("event");
```

## Buffer 模块

7. **Buffer 模块**：这个模块提供了处理二进制数据的工具。

```javascript
// 创建一个 Buffer，并写入数据
const buf = Buffer.from("hello world", "utf8");

console.log(buf.toString()); // 输出：hello world
```

## Crypto 模块

8. **Crypto 模块**：这个模块提供了加密和哈希功能。

```javascript
// 创建一个子进程，执行一个 shell 命令
const crypto = require("crypto");
const hash = crypto.createHash("sha256");

hash.update("some data to hash");

console.log(hash.digest("hex"));
```

## Child Processes 模块

9. **Child Processes 模块**：这个模块可以创建和管理子进程。

```javascript
// 创建一个子进程，执行一个 shell 命令
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```

## Cluster 模块

10. **Cluster 模块**：这个模块可以创建多个子进程，从而充分利用多核 CPU。

```javascript
// 创建一个子进程集群，每个子进程监听同一个端口
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```

以上只是 Node.js 提供的一部分 API，实际上还有更多。你可以在 Node.js 的官方文档中查看完整的 API 列表和详细的使用说明。
