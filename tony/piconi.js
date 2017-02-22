var header = {
  'content-length': '123',
  'Content-Type': 'text/plain',
  'connection': 'keep alive',
  'host': 'mysite.com',
  'accept': '*/*'
}

rawHeaders = [
  'ConTent-Length', '123456',
  'content- LENGTH', '123',
  'Content-Type', 'text/plain',
  'CONNECTION', 'keep-alive',
  'Host', 'mysite.com',
  'accepT', '*/*'
]

/* objects to arrays,

arrays to objects?? */
