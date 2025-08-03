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
