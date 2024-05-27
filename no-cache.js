;(function () {
	htmx.defineExtension("no-cache", {
		onEvent: function (name, evt) {
			if (name === "htmx:configRequest") {
				var url = new URL(evt.detail.path, window.location.origin)
				url.searchParams.append("_", new Date().getTime())
				evt.detail.headers["hx-no-cache"] = true
			}
		},
	})
})()
