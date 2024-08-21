import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="dialog"
export default class extends Controller {
	static targets = ["deleteModal"];

	open() {
		this.deleteModalTarget.showModal();
		// disable scrolling when the modal is open
		this.toggleScrolling();
	}

	close() {
		this.deleteModalTarget.close();
		this.toggleScrolling();
	}

	toggleScrolling() {
		// enable or disable scrolling
		document.body.classList.toggle("overflow-hidden");
	}
}
