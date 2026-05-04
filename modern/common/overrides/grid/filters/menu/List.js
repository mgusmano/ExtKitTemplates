Ext.define("Ext.overrides.grid.filters.menu.List", {
  override: "Ext.grid.filters.menu.List",

  onInputChange: function (field, value) {
    var me = this;
    me.combobox.operator = me.combobox.getMultiSelect() ? "in" : "==";
  },
});
