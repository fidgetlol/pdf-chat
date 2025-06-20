import { Component, h, Host, State } from "@stencil/core"
import "pdf-viewer"

@Component({
	tag: "template-portal",
	styleUrl: "style.css",
	shadow: true,
})
export class AppRoot {
	@State() messages: string[] = []
	input?: HTMLSmoothlyInputElement
	socket?: WebSocket
	componentDidLoad(): void {
		this.socket = new WebSocket("ws://localhost:8787")
		this.socket.onmessage=e=>this.messages=this.messages.concat(e.data)
	}
	render() {
		return (
			<Host>
				{
					this.messages.map(m=>(<p>{m}</p>))
				}
				<smoothly-input style={{border:"solid", float:"bottom"}}
												ref={e=>this.input = e}
									  onKeyDown={e=>{
											console.log("20", this.input?.textContent)
										  if (this.input && this.input.textContent && e.key == "Enter") {
											  this.socket?.send(this.input.textContent)
											  this.input.clear()
											}
										}}
								name={"chatInput"}>
				</smoothly-input>
			</Host>
		)
	}
}
