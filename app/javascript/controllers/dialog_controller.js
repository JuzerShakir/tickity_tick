import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="dialog"
export default class extends Controller {
	static targets = ["deleteModal"];

	open() {
		// console.log("Hi");
		this.deleteModalTarget.showModal();
		// To disable scrolling while the modal is open
		// document.body.classList.add("overflow-hidden");
	}

	close() {
		this.deleteModalTarget.close();
	}
}
