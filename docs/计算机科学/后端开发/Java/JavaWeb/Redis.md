# Redis

- Redis 是完全开源免费的，遵守 BSD 协议，是一个高性能的 key-value 非关系型数据库。
- Redis 不仅仅支持简单的 key-value 类型的数据，同时还提供 list，set，zset，hash 等数据结构的存储
- Redis 的所有操作都是原子性的，意思就是要么成功执行要么失败完全不执行
- Redis 与其他 key-value 存储有什么不同:
  - Redis 有着更为复杂的数据结构并且提供对他们的原子性操作
  - Redis 运行在内存中但是可以持久化到磁盘，所以在对不同数据集进行高速读写时需要权衡内存，因为数据量不能大于硬件内存
  - 相比在磁盘上相同的复杂的数据结构，在内存中操作起来非常简单，这样 Redis 可以做很多内部复杂性很强的事情

## 数据类型

- Redis 支持五种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及 zset(sorted set：有序集合)。

String:

- string 类型是 Redis 最基本的数据类型
- string 类型是二进制安全的。意思是 redis 的 string 可以包含任何数据。比如 jpg 图片或者序列化的对象
- string 类型的值最大能存储 512MB
- ![2020-2-8-20-50-0.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-20-50-0.png)
- 以上实例中我们使用了 Redis 的 `SET` 和 `GET` 命令。键为 `myName`，对应的值为 `"Garrik"`。

Hash：

- hash 是一个 String 类型的键值对 (key => value) 集合
- hash 特别适合用于存储对象
- 每个 hash 可以存储 $2^{32} - 1$ 键值对（40 多亿）
- ![2020-2-8-20-54-48.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-20-54-48.png)
- 以上代码中，先用 `DEL` 命令删除之前 `myName` 的值；
- `HMSET` 命令设置了两个键值对；
- `HGET` 命令获取目标 Field 对应的 Value；

List：

- 列表是简单的字符串列表，按照插入顺序排序
- 你可以添加一个元素到列表的头部（左边）或者尾部（右边）
- 每个 List 可以存储 $2^{32} - 1$ 个元素（40 多亿）
- ![2020-2-8-21-0-47.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-0-47.png)
- `lpush` 添加元素到列表头部；
- `rpush` 添加元素到列表尾部；
- `lrange` 打印出列表，后面两个数字表示开始/结束的下标;

Set：

- Set 是 string 类型的无序集合
- 在集合中元素具有唯一性，不能重复；
- ![2020-2-8-21-3-29.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-3-29.png)
- 用 `sadd` 命令添加元素；成功了返回 1，如果元素在 Set 中已经存在，就添加失败，返回 0；
- 用 `smembers` 打印集合；

Zset（Sorted Set）：

- zset 和 set 一样也是 string 类型元素的集合,且不允许重复的成员；
- zset 每个元素都会关联一个 double 类型的分数。redis 通过分数来为集合中的成员进行从小到大的排序
- ![2020-2-8-21-8-8.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-8-8.png)
- 通过 `zadd` 命令添加元素，第三个参数是 score 分数；
- `ZRANGEBYSCORE` 命令按照分数范围，来打印 zset；

## 发布订阅

- Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息
- Redis 客户端可以订阅任意数量的频道
- 通过 SUBSCRIBE 命令来让客户端订阅一个频道；
- 当有新消息通过 PUBLISH 命令发送给频道时， 这个消息就会被发送给订阅它的客户端；
- ![2020-2-8-21-16-17.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-16-17.png)
- ![2020-2-8-21-20-5.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-20-5.png)

## 事务

- Redis 事务可以一次执行多个命令
- 一个事务从开始到执行会经历以下三个阶段：
  - 开始事务。
  - 命令入队。
  - 执行事务。
- 以 MULTI 开始一个事务， 然后将多个命令入队到事务中；
- 由 EXEC 命令触发事务， 一并执行事务中的所有命令；
- ![2020-2-8-21-25-4.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-25-4.png)
- 单个 Redis 命令的执行是原子性的，但 Redis 没有在事务上增加任何维持原子性的机制，所以 Redis 事务的执行并不是原子性的；
- 中间某条指令的失败不会导致前面已做指令的回滚，也不会造成后续的指令不做

## Jedis

- 在 Java 中我们用 Jedis 来连接 Redis;

基本使用：

```java
public void test1() {
  // 获取连接
  Jedis jedis = new Jedis("localhost");
  // 执行操作
  jedis.set("myName", "Garrik Liu");
  // 关闭连接
  jedis.close();
}
```

![2020-2-8-22-21-23.png](https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-22-21-23.png)

#### 连接池使用

- 在构建连接池对象的时候，需要提供池对象的配置对象
- 可以通过这个配置对象对连接池进行相关参数的配置
- 使用 Jedis 连接池之后，在每次用完连接对象后一定要记得把连接归还给连接池。
- Jedis 对 close 方法进行了改造，如果是连接池中的连接对象，调用 close 方法将会是把连接对象返回到对象池

```java
// 创建配置对象
JedisPoolConfig config = new JedisPoolConfig();
config.setMaxIdle(8);
config.setMaxTotal(18);
// 创建连接池
JedisPool pool = new JedisPool(config, "127.0.0.1", 6379, 2000, "password");
// 获取 jedis 连接对象
Jedis jedis = pool.getResource();
String value = jedis.get("key");
  ......
// 关闭连接
jedis.close();
pool.close();
```
