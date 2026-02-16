/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demoapp/demo/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
