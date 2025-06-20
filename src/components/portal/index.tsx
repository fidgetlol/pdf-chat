import { Component, h } from "@stencil/core"

@Component({
	tag: "template-portal",
	styleUrl: "style.css",
	shadow: true,
})
export class AppRoot {
	render() {
		return (
			<smoothly-app label="Smoothly smoothly-app Starter">
				<smoothly-app-room label="Home" path="/">
					<app-home />
				</smoothly-app-room>
				<smoothly-app-room label="About" path="about">
					<p>Template for smoothly app!</p>
				</smoothly-app-room>
			</smoothly-app>
		)
	}
}
