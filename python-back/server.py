import websockets, asyncio, json
import requests
import time

from collections import namedtuple
from dotenv import load_dotenv

load_dotenv()

import os
import psycopg2

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
            print(f"reading messages sent by {user.name}:",message)
            message = json.loads(message)
            user.name = message["sender"]
            print(f"saved name: {user}")
            if "receiver" in message:
                receiver = message["receiver"]
                message["id"] = time.time()

                requests.post('http://127.0.0.1:5000/new_message', json=message)

                for u in sockets:
                    if u.name == receiver:
                        print(f"sending {json.dumps(message)}")
                        await u.socket.send(json.dumps(message))

    except websockets.exceptions.ConnectionClosed:
        print(f"Closed socket for {user.name}")
        sockets.remove(user)

start_server = websockets.serve(handle, "localhost", 5001)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
