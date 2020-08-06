(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{529:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),a("ul",[a("li",[s._v("Redis 是完全开源免费的，遵守 BSD 协议，是一个高性能的 key-value 非关系型数据库。")]),s._v(" "),a("li",[s._v("Redis 不仅仅支持简单的 key-value 类型的数据，同时还提供 list，set，zset，hash 等数据结构的存储")]),s._v(" "),a("li",[s._v("Redis 的所有操作都是原子性的，意思就是要么成功执行要么失败完全不执行")]),s._v(" "),a("li",[s._v("Redis 与其他 key-value 存储有什么不同:\n"),a("ul",[a("li",[s._v("Redis 有着更为复杂的数据结构并且提供对他们的原子性操作")]),s._v(" "),a("li",[s._v("Redis 运行在内存中但是可以持久化到磁盘，所以在对不同数据集进行高速读写时需要权衡内存，因为数据量不能大于硬件内存")]),s._v(" "),a("li",[s._v("相比在磁盘上相同的复杂的数据结构，在内存中操作起来非常简单，这样 Redis 可以做很多内部复杂性很强的事情")])])])]),s._v(" "),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[s._v("#")]),s._v(" 数据类型")]),s._v(" "),a("ul",[a("li",[s._v("Redis 支持五种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及 zset(sorted set：有序集合)。")])]),s._v(" "),a("p",[s._v("String:")]),s._v(" "),a("ul",[a("li",[s._v("string 类型是 Redis 最基本的数据类型")]),s._v(" "),a("li",[s._v("string 类型是二进制安全的。意思是 redis 的 string 可以包含任何数据。比如 jpg 图片或者序列化的对象")]),s._v(" "),a("li",[s._v("string 类型的值最大能存储 512MB")]),s._v(" "),a("li",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-20-50-0.png",alt:"2020-2-8-20-50-0.png"}})]),s._v(" "),a("li",[s._v("以上实例中我们使用了 Redis 的 "),a("code",[s._v("SET")]),s._v(" 和 "),a("code",[s._v("GET")]),s._v(" 命令。键为 "),a("code",[s._v("myName")]),s._v("，对应的值为 "),a("code",[s._v('"Garrik"')]),s._v("。")])]),s._v(" "),a("p",[s._v("Hash：")]),s._v(" "),a("ul",[a("li",[s._v("hash 是一个 String 类型的键值对 (key => value) 集合")]),s._v(" "),a("li",[s._v("hash 特别适合用于存储对象")]),s._v(" "),a("li",[s._v("每个 hash 可以存储 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("32")])],1),a("mo",[s._v("−")]),a("mn",[s._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("2^{32} - 1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.897438em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[s._v("2")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[s._v("3")]),a("span",{staticClass:"mord mtight"},[s._v("2")])])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[s._v("1")])])])])]),s._v(" 键值对（40 多亿）")],1),s._v(" "),a("li",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-20-54-48.png",alt:"2020-2-8-20-54-48.png"}})]),s._v(" "),a("li",[s._v("以上代码中，先用 "),a("code",[s._v("DEL")]),s._v(" 命令删除之前 "),a("code",[s._v("myName")]),s._v(" 的值；")]),s._v(" "),a("li",[a("code",[s._v("HMSET")]),s._v(" 命令设置了两个键值对；")]),s._v(" "),a("li",[a("code",[s._v("HGET")]),s._v(" 命令获取目标 Field 对应的 Value；")])]),s._v(" "),a("p",[s._v("List：")]),s._v(" "),a("ul",[a("li",[s._v("列表是简单的字符串列表，按照插入顺序排序")]),s._v(" "),a("li",[s._v("你可以添加一个元素到列表的头部（左边）或者尾部（右边）")]),s._v(" "),a("li",[s._v("每个 List 可以存储 "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mn",[s._v("2")]),a("mn",[s._v("32")])],1),a("mo",[s._v("−")]),a("mn",[s._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("2^{32} - 1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.897438em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[s._v("2")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[s._v("3")]),a("span",{staticClass:"mord mtight"},[s._v("2")])])])])])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[s._v("1")])])])])]),s._v(" 个元素（40 多亿）")],1),s._v(" "),a("li",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-0-47.png",alt:"2020-2-8-21-0-47.png"}})]),s._v(" "),a("li",[a("code",[s._v("lpush")]),s._v(" 添加元素到列表头部；")]),s._v(" "),a("li",[a("code",[s._v("rpush")]),s._v(" 添加元素到列表尾部；")]),s._v(" "),a("li",[a("code",[s._v("lrange")]),s._v(" 打印出列表，后面两个数字表示开始/结束的下标;")])]),s._v(" "),a("p",[s._v("Set：")]),s._v(" "),a("ul",[a("li",[s._v("Set 是 string 类型的无序集合")]),s._v(" "),a("li",[s._v("在集合中元素具有唯一性，不能重复；")]),s._v(" "),a("li",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-3-29.png",alt:"2020-2-8-21-3-29.png"}})]),s._v(" "),a("li",[s._v("用 "),a("code",[s._v("sadd")]),s._v(" 命令添加元素；成功了返回 1，如果元素在 Set 中已经存在，就添加失败，返回 0；")]),s._v(" "),a("li",[s._v("用 "),a("code",[s._v("smembers")]),s._v(" 打印集合；")])]),s._v(" "),a("p",[s._v("Zset（Sorted Set）：")]),s._v(" "),a("ul",[a("li",[s._v("zset 和 set 一样也是 string 类型元素的集合,且不允许重复的成员；")]),s._v(" "),a("li",[s._v("zset 每个元素都会关联一个 double 类型的分数。redis 通过分数来为集合中的成员进行从小到大的排序")]),s._v(" "),a("li",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-8-8.png",alt:"2020-2-8-21-8-8.png"}})]),s._v(" "),a("li",[s._v("通过 "),a("code",[s._v("zadd")]),s._v(" 命令添加元素，第三个参数是 score 分数；")]),s._v(" "),a("li",[a("code",[s._v("ZRANGEBYSCORE")]),s._v(" 命令按照分数范围，来打印 zset；")])]),s._v(" "),a("h2",{attrs:{id:"发布订阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅"}},[s._v("#")]),s._v(" 发布订阅")]),s._v(" "),a("ul",[a("li",[s._v("Redis 发布订阅 (pub/sub) 是一种消息通信模式：发送者 (pub) 发送消息，订阅者 (sub) 接收消息")]),s._v(" "),a("li",[s._v("Redis 客户端可以订阅任意数量的频道")]),s._v(" "),a("li",[s._v("通过 SUBSCRIBE 命令来让客户端订阅一个频道；")]),s._v(" "),a("li",[s._v("当有新消息通过 PUBLISH 命令发送给频道时， 这个消息就会被发送给订阅它的客户端；")]),s._v(" "),a("li",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-16-17.png",alt:"2020-2-8-21-16-17.png"}})]),s._v(" "),a("li",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-20-5.png",alt:"2020-2-8-21-20-5.png"}})])]),s._v(" "),a("h2",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[s._v("#")]),s._v(" 事务")]),s._v(" "),a("ul",[a("li",[s._v("Redis 事务可以一次执行多个命令")]),s._v(" "),a("li",[s._v("一个事务从开始到执行会经历以下三个阶段：\n"),a("ul",[a("li",[s._v("开始事务。")]),s._v(" "),a("li",[s._v("命令入队。")]),s._v(" "),a("li",[s._v("执行事务。")])])]),s._v(" "),a("li",[s._v("以 MULTI 开始一个事务， 然后将多个命令入队到事务中；")]),s._v(" "),a("li",[s._v("由 EXEC 命令触发事务， 一并执行事务中的所有命令；")]),s._v(" "),a("li",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-21-25-4.png",alt:"2020-2-8-21-25-4.png"}})]),s._v(" "),a("li",[s._v("单个 Redis 命令的执行是原子性的，但 Redis 没有在事务上增加任何维持原子性的机制，所以 Redis 事务的执行并不是原子性的；")]),s._v(" "),a("li",[s._v("中间某条指令的失败不会导致前面已做指令的回滚，也不会造成后续的指令不做")])]),s._v(" "),a("h2",{attrs:{id:"jedis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jedis"}},[s._v("#")]),s._v(" Jedis")]),s._v(" "),a("ul",[a("li",[s._v("在 Java 中我们用 Jedis 来连接 Redis;")])]),s._v(" "),a("p",[s._v("基本使用：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取连接")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Jedis")]),s._v(" jedis "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Jedis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行操作")]),s._v("\n  jedis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Garrik Liu"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭连接")]),s._v("\n  jedis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://garrik-default-imgs.oss-accelerate.aliyuncs.com/imgs/2020-2-8-22-21-23.png",alt:"2020-2-8-22-21-23.png"}})]),s._v(" "),a("h4",{attrs:{id:"连接池使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接池使用"}},[s._v("#")]),s._v(" 连接池使用")]),s._v(" "),a("ul",[a("li",[s._v("在构建连接池对象的时候，需要提供池对象的配置对象")]),s._v(" "),a("li",[s._v("可以通过这个配置对象对连接池进行相关参数的配置")]),s._v(" "),a("li",[s._v("使用 Jedis 连接池之后，在每次用完连接对象后一定要记得把连接归还给连接池。")]),s._v(" "),a("li",[s._v("Jedis 对 close 方法进行了改造，如果是连接池中的连接对象，调用 close 方法将会是把连接对象返回到对象池")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建配置对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JedisPoolConfig")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JedisPoolConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMaxIdle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setMaxTotal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建连接池")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JedisPool")]),s._v(" pool "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JedisPool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取 jedis 连接对象")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Jedis")]),s._v(" jedis "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getResource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" jedis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭连接")]),s._v("\njedis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\npool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);