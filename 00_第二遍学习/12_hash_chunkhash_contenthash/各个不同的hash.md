##### 一、 hash 值的生成和整个项目有关系：

比如我们现在有两个入口 index.js 和 main.js；它们分别会输出到不同的 bundle 文件中，并且在文件名称中我们有使用 hash；
这个时候，如果修改了 index.js 文件中的内容，那么 hash 会发生变化；
那就意味着两个文件的名称都会发生变化；

##### 二、 chunkhash 可以有效的解决上面的问题，它会根据不同的入口进行借来解析来生成 hash 值：

比如我们修改了 index.js，那么 main.js 的 chunkhash 是不会发生改变的；

##### 三、contenthash 表示生成的文件 hash 名称，只和内容有关系：

比如我们的 index.js，引入了一个 style.css，style.css 有被抽取到一个独立的 css 文件中；
这个 css 文件在命名时，如果我们使用的是 chunkhash；
那么当 index.js 文件的内容发生变化时，css 文件的命名也会发生变化；
这个时候我们可以使用 contenthash；
