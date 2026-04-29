Ext.define("Ext.overrides.event.publisher.Dom", {
  override: "Ext.event.publisher.Dom",

  addDirectListener: function (eventName, element, capture) {
    var me = this;
    if (eventName !== "unload") {
      element.dom.addEventListener(
        eventName,
        capture ? me.onDirectCaptureEvent : me.onDirectEvent,
        capture ? me.captureOptions : me.listenerOptions,
      );
    }
  },
});
