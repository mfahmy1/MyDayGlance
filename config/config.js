let config = {
	address: "localhost",
	port: 8080,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Upcoming Events",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/family13755863557482630872%40group.calendar.google.com/private-91b94aaab0b664d41a6fbc86926164de/basic.ics"
					}
				],
				maximumEntries: 10,
				displaySymbol: true,
				defaultSymbol: "calendar",
				maxTitleLength: 25,
				fetchInterval: 300000,
				fadePoint: 0.25
			}
		},
		{
			module: "calendar_monthly",
			position: "middle_center",
			config: {
				// Schedule update timing
				updateDelay: 5,
				// Months you want in your calendar view
				showMonth: 0, // -1 = previous month, 0 = current month, 1 = next month
				// Show how many months ahead
				monthCount: 1,
				// Show week numbers
				showWeekNumbers: false,
				// Highlight today
				highlightToday: true
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 48.137154,
				lon: 11.576124
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 48.137154,
				lon: 11.576124
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
