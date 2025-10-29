sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"flightlk/test/integration/pages/FlightLKList",
	"flightlk/test/integration/pages/FlightLKObjectPage",
	"flightlk/test/integration/pages/FlightDetailsLORObjectPage"
], function (JourneyRunner, FlightLKList, FlightLKObjectPage, FlightDetailsLORObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('flightlk') + '/test/flp.html#app-preview',
        pages: {
			onTheFlightLKList: FlightLKList,
			onTheFlightLKObjectPage: FlightLKObjectPage,
			onTheFlightDetailsLORObjectPage: FlightDetailsLORObjectPage
        },
        async: true
    });

    return runner;
});

