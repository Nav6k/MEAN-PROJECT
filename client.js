const socket = io('http://localhost:3000');

const messages = document.getElementById('messages');
 const form = document.getElementById('form');
      const input = document.getElementById('input');

const name = prompt("enter your name to join")
socket.emit('new user joined',name)