;(function () {
	htmx.defineExtension("noCache", {
		onEvent: function (name, evt) {
			if (name === "htmx:configRequest") {
				var xhr = evt.detail.xhr
				var url = new URL(xhr.openArgs[1], window.location.origin)
				url.searchParams.append("_", new Date().getTime())
				xhr.openArgs[1] = url.href
				xhr.setRequestHeader("hx-no-cache", true)
			}
		},
	})
})()
