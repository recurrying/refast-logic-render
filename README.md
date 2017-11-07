# LogicRender
LogicRender 是配合 Refast 逻辑组件，具有如下强大功能：

- 集成了通用视图处理逻辑，提升开发效率
- 可根据条件自动执行脚本，减少逻辑处理


## 文档示例

文档请查阅 [doc.refast.cn](http://doc.refast.cn/LogicRender.html)。

示例 [Demo](https://github.com/recore/refast-demo) 请看 [demo.refast.cn](http://demo.refast.cn)。

## 安装
#### 通过 npm 安装
Refast 可以通过 npm 安装到项目中： 
`npm install refast-logic-render --save`

#### 通过 CDN 引用

Refast 可以通过 CDN 引入到项目中。
* 每次均引入最新版本：
https://unpkg.com/refast-logic-render/dist/index.js

* 引入指定版本。用版本号替换 `[version]` 部分的内容即可：
https://unpkg.com/refast-logic-render@[version]/dist/index.js

## 初始化
在 2.x 版本之前， LogicRender 是集成到 Refast 中的，不需要特意初始化，可以直接使用。在 2.x 及以后的版本中，如果你要在使用了 Refast 的组件及其子组件中使用，需要对手动绑定：

- 如果你使用了 Decorators
```javascript
import { Component } from 'refast';
import LogicRender, { connect } from 'refast-logic-render';

@connect
class Foo extends Component {
}

export default Foo;
```

- 如果没有使用 Decorators
```javascript
import { Component } from 'refast';
import LogicRender, { connect } from 'refast-logic-render';

class Foo extends Component {
}

export default connect(Foo);
```

## 开源协议

refast-logic-render 采用 MIT 协议开源。
