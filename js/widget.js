(function () {
	const iframe = document.createElement("iframe");
	iframe.className = "chat-widget minimized ";

	//iframe.src = "https://echobot.mohamedbgz.dev";
	iframe.src = "http://localhost:5173";

	document.body.appendChild(iframe);
	const event = new CustomEvent("iframe:created", { detail: { iframe } });
	window.dispatchEvent(event);

	const overlay = document.getElementById("chat-overlay");

	// Listen for messages from the iframe to toggle overlay
	window.addEventListener("message", (event) => {
		if (!event.data || event.data.type !== "TOGGLE_CHAT_OVERLAY") return;

		if (event.data.isOpen) {
			iframe.classList.remove("minimized");

			overlay.style.display = "block";
		} else {
			iframe.classList.add("minimized");

			overlay.style.display = "none";
		}
	});

	// Close panel if overlay is clicked
	overlay.addEventListener("click", () => {
		iframe.contentWindow.postMessage({ type: "CLOSE_PANEL" }, "*");
	});
})();
