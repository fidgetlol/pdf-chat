import { DurableObject } from "cloudflare:workers"

export default {
    async fetch(request: Request, environment: Environment): Promise<Response> {
        if (request.headers.get("upgrade") == "websocket") {
            let id = environment.chatNamespace.idFromName("OuO")
            let stub: DurableObjectStub<Chat> = environment.chatNamespace.get(id)
            const socket = await stub.fetch(request)
            return socket
        }
        return new Response("GO AWAY")
    }
 }

export class Chat extends DurableObject {
    messages: string[] = ["message1","message2","message3"];
    async fetch(): Promise<Response> {
        const sockets = new WebSocketPair()
        this.ctx.acceptWebSocket(sockets[0])
        this.messages.map(m=>sockets[0].send(m))
        return new Response(null, {"webSocket":sockets[1], "status":101})
    }
    override async webSocketMessage(ws: WebSocket, message: string): Promise<void> {
        this.messages.push(message)
        this.ctx.getWebSockets().map(m=>m.send(message))
    }
}
