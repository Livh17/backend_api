import { conection } from "../conection.js";


export async function listarLivros() {
  const comando = `
    SELECT *
      FROM Livros
  `

  const [registros] = await conection.query(comando)
  return registros;
}


export async function inserirLivro(novoLivro) {
  const comando = `
    INSERT INTO Livros (titulo, autor, ano_publicacao, genero, editora, preco)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [novoLivro.titulo, novoLivro.autor, novoLivro.ano_publicacao, novoLivro.genero, novoLivro.editora, novoLivro.preco])
  return info.insertId;
}



export async function consultarLivros(id) {
  const comando = `
    SELECT *
      FROM Livros
     WHERE id = ? 
  `
  const [registros] = await conection.query(comando, [id])
  return registros[0];
}






export async function filtrarLivro(Titulo) {
  const comando = `
    SELECT *
      FROM Livros
     WHERE titulo like ? 
  `

  const [registros] = await conection.query(comando, ['%'+Titulo+'%'])
  return registros;
}






export async function alterarLivros(id, novosDados) {
  const comando = `
    UPDATE Livros
       SET titulo = ?, 
       autor = ?, 
       ano_publicacao = ?,
       genero = ?, 
       editora = ?,
       preco = ?, 
     WHERE id = ?
  `
  const [info] = await conection.query(comando, [
    novosDados.titulo,
    novosDados.autor,
    novosDados.ano_publicacao,
    novosDados.genero,
    novosDados.editora,
    novosDados.preco,
    id
  ])
}


export async function removerLivro(id) {
  const comando = `
    DELETE FROM Livros
          WHERE id = ?
  `
  const [info] = await conection.query(comando, [id]);
}



