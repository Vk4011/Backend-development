const buffer = new Buffer.from("Vikram");
console.log(buffer.toJSON());
console.log(buffer)
console.log(buffer.toString());
buffer.write("code");
console.log(buffer);