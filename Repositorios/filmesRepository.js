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

