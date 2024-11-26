import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="report"
export default class extends Controller {
  static values = { url: String };
  static targets = ["reportButton"];
  connect() {}

  click(e) {
    e.preventDefault();
    window.location = this.urlValue;
  }
}
