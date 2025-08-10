import { conection } from "../conection.js";


export async function listarFilmes() {
  const comando = `
    SELECT *
      FROM filmes
  `

  const [registros] = await conection.query(comando)
  return registros;
}




export async function inserirFilmes(novoFilme) {
  const comando = `
    INSERT INTO filmes (titulo, ano_lancamento, genero, duracao_minutos, diretor, avaliacao)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [novoFilme.titulo, novoFilme.ano_lancamento, novoFilme.genero, novoFilme.duracao_minutos, novoFilme.diretor, novoFilme.avaliacao])
  return info.insertId;
}



export async function consultarFilmes(id) {
  const comando = `
    SELECT *
      FROM filmes
     WHERE id = ? 
  `
  const [registros] = await conection.query(comando, [id])
  return registros[0];
}






export async function filtrarPorFilme(Titulo) {
  const comando = `
    SELECT *
      FROM filmes
     WHERE titulo like ? 
  `

  const [registros] = await conection.query(comando, ['%'+Titulo+'%'])
  return registros;
}






export async function alterarFilmes(id, novosDados) {
  const comando = `
    UPDATE filmes
       SET titulo = ?, 
       ano_lancamento = ?, 
       genero = ?, 
       duracao_minutos = ?,
       diretor = ?,
       avaliacao = ?
     WHERE id = ?

  `

  const [info] = await conection.query(comando, [
    novosDados.titulo,
    novosDados.ano_lancamento,
    novosDados.genero,
    novosDados.duracao_minutos,
    novosDados.diretor,
    novosDados.avaliacao,
    id
  ])
}







export async function removerFilmes(id) {
  const comando = `
    DELETE FROM filmes
          WHERE id = ?
  `
  const [info] = await conection.query(comando, [id]);
}





