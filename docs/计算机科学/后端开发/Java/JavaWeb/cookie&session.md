# Cookie & Session

## 会话技术

什么是会话：

- 用户点开一个页面；
- 点击多个超链接，访问服务器资源；
- 关闭页面；
- 上面的整个过程，称之为会话；

会话技术解决什么问题：

- 每个用户在使用浏览器与服务器进行会话的过程中；
- 不可避免的会产生一些数据；
- 程序需要有办法保存下这些数据；
- 也就是一种保存客户端对服务器的访问状态的机制；
- 会话技术就是用来做这个的；

ServletContext 域存在的问题：

- 前面说过 ServletContext 域也可以存取每次请求相关的数据；
- 服务器提供服务时，ServletContext 域一直存在，它的生命周期比较长；
- 它会在整个服务器关闭的时候销毁；
- 当其接收到多个客户端发过来的请求时，会把各自的信息都存下来；
- 这容易造成各个客户端之间的数据混淆；
- 浪费服务器储存空间；

![2020-2-3-22-25-6.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-3-22-25-6.png)

## Cookie

### 什么是 Cookie

- cookie 是客户端请求服务器时；
- 服务端记录的用户信息，并响应回来，存储在客户端；
- 下一次客户端发送请求时会将 cookie 一起发送；
- 具体过程：
  - 客户端第一次访问服务器的时候, 不携带 cookie；
  - 服务器接到请求后, 会记录用户的信息, 然后在响应头中设置 `set-cookie` 头部. 客户端收到后进行储存；
  - 下一次再请求服务器时请求头中会加上 `cookie` 这一项；
  - 服务器通过 `cookie` 判断客户端是否曾经访问过该网站。
- cookie 是有时限的。称为持久化时间：
  - 通过属性 `maxAge` 可以设置 cookie 的存储时间，超过时间后 cookie 会被删除；
  - 如果不设置持久化时间，cookie 存在浏览器内存中，在会话结束后（页面关闭）cookie 就会被销毁；
  - 持久化后，cookie 存在计算机磁盘文件中；

### 在 Java 中使用 Cookie

**创建 cookie**：

- `Cookie c = new Cookie("key", "value")`

**设置持久化时间**：

- `cookie.setMaxAge(int second)`;
- 设置的时间单位为秒；

**响应给浏览器**：

- `response.addCookie(cookie)`

![2020-2-4-0-52-39.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-0-52-39.png)

![2020-2-4-0-20-7.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-0-20-7.png)

**设置 Cookie 的携带路径**：

- 对于不需要 cookie 信息的资源访问，携带 cookie 会造成数据传输量的加大，降低效率和速度；
- 默认情况下，会在访问与创建 cookie 的 Web 资源有相同路径的资源时，都携带 cookie 信息；
  - 🌰 例如：创建 cookie 的 Servlet 地址是 `http://localhost:8080/xxx/CookieServlet`;
  - 那么只要访问的资源，前面路径是 `http://localhost:8080/xxx/` 那么都会携带上 cookie 信息；
  - 比方说 `http://localhost:8080/xxx/LoginServlet` 就会有 cookie 信息；
  - 但是 `http://localhost:8080/xxx/product/BuyServlet` 就没有；
- 设置携带路径：
  - `cookie.setPath(String path)`；
    - `cookie.setPath("/CookiePro/cookieServlet")`：只有访问 cookieServlet 才携带 cookie 信息；
    - `cookie.setPath("/CookiePro")`：访问指定的工程时，都会携带 cookie 信息；
    - `cookie.setPath("/")`：访问服务器下部署的所有工程时，都会携带 cookie 信息；

**删除 Cookie**：

- 把同名，同路径的 Cookie 的持久化时间设置为 0；
- `cookie.setMaxAge(0)`；

**在服务器获取客户端携带的 Cookie**：

- 通过 Request 对象的 `getCookies()` 方法获取所有的 cookie；
- 通过遍历，找出自己想要的那一个；

![2020-2-4-0-57-45.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-0-57-45.png)

## Session

### 什么是 Session

- session 和 cookie 的作用是一样的，也是存储用户信息。但是 session 是存储在服务器端的；
- session 还需借助 cookie 将唯一标识 sessionID 存到客户端；
- 当客户端访问服务器时，会生成一个全局唯一标识 sessionID；
- 然后服务器会记录用户的信息然后存储到服务器 session 中，并将 id 响应给客户端；
- 服务器使用一种类似于散列表的结构来保存信息, 当程序需要为某个客户端的请求创建一个 session 时：
  - 服务器首先检查这个客户端的请求里是否已包含了一个 session 标识 (session id)；
    - 如果已包含则说明以前已经为此客户端创建过 session，服务器就按照 session id 把对应的 session 检索出来；
    - 如果检索不到，会新建一个；
  - 如果客户端请求不包含 session id；
    - 则为此客户端创建一个 session 并且生成一个与此 session 相关联的 session id；
    - 然后在本次响应中返回给客户端保存；

### 在 Java 中使用 Session

**获取 Session 对象**：

- `HttpSession s = request.getSession()` 获取当前会话的 Session 对象；
  - 如果服务器没有当前会话的 Session 对象，那么就创建一个新的返回；
  - 如果已经有了属于该会话的 Session 就直接返回；
  - 本质就是根据 Session Id 来判断是否服务器已经有 Session 了；

**用 Session 存取数据**：

- `session.setAttribute(String name, Object obj)` 保存
- `session.getAttribute(String name)` 读取
- `session.removeAttribute(String name)` 删除

![2020-2-4-1-15-57.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-1-15-57.png)

**Session 生命周期**：

- 创建：第一次执行 `request.getSession()` 时创建；
- 销毁：
  - 服务器关闭时销毁；
  - 默认 30 分钟也销毁。在 web.xml 中，可以修改这个时间：
    - ![2020-2-4-1-18-34.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-1-18-34.png)
  - 手动销毁：`session.invalidate()` 方法主动销毁；
- 作用范围：默认在一次会话中，所有资源共用一个 session 对象；
- JsessionID 的持久化：
  - 当服务器把 session id 发给浏览器时，浏览器把 id 储存为 cookie，然后下次请求的时候再发给服务器；
  - 但是，如果把浏览器关掉，断开会话；
  - 默认 cookie 就被销毁了；
  - 所以需要设置 cookie 持久化时间；
    ![2020-2-4-19-4-13.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-4-19-4-13.png)
