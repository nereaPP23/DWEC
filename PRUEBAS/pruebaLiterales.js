const libs = ["React", "Vue", "Angular"];
console.log(`Este curso trata de ${libs[2]}`);

const l = libs.length;
console.log(`
${l > 1 ? `Estas ${l} bibliotecas` : "Esta biblioteca"}:
${libs.join(", ")}
`);