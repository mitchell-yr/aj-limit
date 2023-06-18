# aj-limit
去除autojs高版本的主流软件限制

###提示 由于最近aj对国内版禁止了某些功能，导致此代码用不了，代码是没问题的。

## 警告
资源来源于网络，仅供学习交流使用，禁止用于其他一切用途，造成后果自负

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
