import websockets, asyncio, json

from collections import namedtuple

class User:
    def __init__(self, socket):
        self.socket = socket
        self.name = None

    def __str__(self):
        return f"{self.name}, {self.socket}"

sockets = []

async def handle(websocket):
    user = User(socket=websocket)
    print(f"new socket: {user}")
    sockets.append(user)

    try:
        async for message in websocket:
            message = json.loads(message)
            user.name = message["sender"]
            print(f"saved name: {user}")
            if "receiver" in message:
                receiver = message["receiver"]
                print(f"trying to send to {receiver} from {user.name}")
                for user in sockets:
                    if user.name == receiver:
                        message_obj = { "body": message["body"] }
                        print(f"sending {json.dumps(message_obj)}")
                        await user.socket.send(json.dumps(message_obj))

    except websockets.exceptions.ConnectionClosed:
        sockets.remove(user)

start_server = websockets.serve(handle, "localhost", 5001)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
