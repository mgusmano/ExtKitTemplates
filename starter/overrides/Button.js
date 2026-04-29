Ext.define("Ext.overrides.Button", {
  override: "Ext.Button",

  initialize: function () {
    var me = this;
    var el = me.el;
    //me.callParent();
    let attrs = me.getAriaAttributes();
    if (attrs !== null) {
      attrs["aria-invalid"] = false;
      attrs["aria-disabled"] = false;
      attrs["role"] = "button";
      let ariaElement = me.ariaEl;
      ariaElement.set(attrs);
    }

    // The menu config is lazy
    if (me.getConfig("menu", true)) {
      me.addCls(me.hasMenuCls);
    }

    el.on({
      scope: me,
      touchstart: "onPress",
    });

    el.addClsOnOver(me.hoveredCls, me.isEnabled, me);
  }
});
