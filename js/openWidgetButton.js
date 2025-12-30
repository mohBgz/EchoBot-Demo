// Script for enabling communication between the website's iframe and the app's content

(function () {
	let iframe = null;

	window.addEventListener("iframe:created", (e) => {
		
		iframe = e.detail.iframe;
	});

	const openPanelbuttons = document.getElementsByClassName("openPanelbtn");

	Array.from(openPanelbuttons).forEach((button) => {
		button.addEventListener("click", () => {
			iframe.contentWindow.postMessage(
				{ type: "TOGGLE_CHAT_OVERLAY", isOpen: true },
				"*"
			);
		});
	});
})();
