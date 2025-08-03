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

