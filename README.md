# aj-limit
去除autojs高版本的主流软件限制
## 关于
这个去除限制代码从哪里来的已经不可考究了，我就顺势开源了吧

侵权即删
## 如何使用
将下列代码直接放到开头即可("ui";或"Nodejs";那一行后面)

``` js
function limit() {
        importClass(com.stardust.autojs.core.accessibility.AccessibilityBridge.WindowFilter);
        let bridge = runtime.accessibilityBridge;
        let bridgeField = runtime.getClass().getDeclaredField("accessibilityBridge");
        let configField = bridgeField.getType().getDeclaredField("mConfig");
        configField.setAccessible(true);
        configField.set(bridge, configField.getType().newInstance());
        bridge.setWindowFilter(new JavaAdapter(AccessibilityBridge$WindowFilter, {
            filter : function (info) {
                return true;
            }
        }))};//去限制代码
limit()
```
