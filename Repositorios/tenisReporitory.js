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




export async function consultarTenis(id) {
  const comando = `
    SELECT *
      FROM Tenis
     WHERE id = ? 
  `
  const [registros] = await conection.query(comando, [id])
  return registros[0];
}






export async function filtrarPorTenis(nome) {
  const comando = `
    SELECT *
      FROM Tenis
     WHERE nome like ? 
  `
  const [registros] = await conection.query(comando, ['%'+ nome +'%'])
  return registros;
}






export async function alterarTenis(id, novosDados) {
  const comando = `
    UPDATE Tenis
       SET nome = ?, 
       marca = ?, 
       cor = ?,
       tamanho = ?, 
       preco = ?,
       categoria = ?,
       estoque = ?,
     WHERE id = ?
  ` 
  const [info] = await conection.query(comando, [
    novosDados.nome,
    novosDados.marca,
    novosDados.cor,
    novosDados.tamanho,
    novosDados.preco,
    novosDados.categoria,
    novosDados.estoque,
    id
  ])
}


export async function removerTenis(id) {
  const comando = `
    DELETE FROM Tenis
          WHERE id = ?
  `
  const [info] = await conection.query(comando, [id]);
}

