import { conection } from "../conection.js";


export async function listarSerie() {
  const comando = `
    SELECT *
      FROM Series
  `

  const [registros] = await conection.query(comando)
  return registros;
}




export async function inserirSeries(novaSerie) {
  const comando = `
    INSERT INTO Series (titulo, ano_lancamento, genero, temporadas, criador, avaliacao)
               values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [novaSerie.titulo, novaSerie.ano_lancamento, novaSerie.genero, novaSerie.temporadas, novaSerie.criador, novaSerie.avaliacao])
  return info.insertId;
}




export async function consultarSerie(id) {
  const comando = `
    SELECT *
      FROM Series
     WHERE id = ? 
  `
  const [registros] = await conection.query(comando, [id])
  return registros[0];
}






export async function filtrarPorSerie(Titulo) {
  const comando = `
    SELECT *
      FROM Series
     WHERE titulo like ? 
  `
  const [registros] = await conection.query(comando, ['%'+ Titulo +'%'])
  return registros;
}






export async function alterarSerie(id, novosDados) {
  const comando = `
    UPDATE Series
       SET titulo = ?, 
       ano_lancamento = ?, 
       genero = ?,
       temporadas = ?, 
       criador = ?,
       avaliacao = ?,
     WHERE id = ?
  ` 
  const [info] = await conection.query(comando, [
    novosDados.titulo,
    novosDados.ano_lancamento,
    novosDados.genero,
    novosDados.temporadas,
    novosDados.criador,
    novosDados.avaliacao,
    id
  ])
}


export async function removerSerie(id) {
  const comando = `
    DELETE FROM Series
          WHERE id = ?
  `
  const [info] = await conection.query(comando, [id]);
}

