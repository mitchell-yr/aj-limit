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
