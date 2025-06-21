import { Component, h, Host } from "@stencil/core"

@Component({
	tag: "template-portal",
	styleUrl: "style.css",
	shadow: true,
})
export class AppRoot {
	render() {
		return (
			<Host>
				<iframe src="https://www.supremecourt.gov/opinions/24pdf/23-1187_olp1.pdf"
						width="100%"
						height="100%"
						frameborder="0" />
				<pdf-chat/>
			</Host>
		)
	}
}
