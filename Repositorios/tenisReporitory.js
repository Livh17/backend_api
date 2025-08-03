import { conection } from "../conection.js";


export async function listarTenis() {
  const comando = `
    SELECT *
      FROM tenis
  `

  const [registros] = await conection.query(comando)
  return registros;
}




export async function inserirTenis(novoTenis) {
  const comando = `
    INSERT INTO tenis (nome, marca, cor, tamanho, preco, categoria, estoque)
               values (?, ?, ?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [novoTenis.nome, novoTenis.marca, novoTenis.cor, novoTenis.tamanho, novoTenis.preco, novoTenis.categoria, novoTenis.estoque])
  return info.insertId;
}

