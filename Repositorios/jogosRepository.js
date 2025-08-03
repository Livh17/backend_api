import { conection } from "../conection.js";


export async function listarJogos() {
  const comando = `
    SELECT *
      FROM jogos
  `

  const [registros] = await conection.query(comando)
  return registros;
}




export async function inserirJogos(novoJogo) {
  const comando = `
    INSERT INTO jogos (titulo, genero, plataforma, data_lancamento, preco, classificacao_etaria, desenvolvedora)
               values (?, ?, ?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [novoJogo.titulo, novoJogo.genero, novoJogo.plataforma, novoJogo.data_lancamento, novoJogo.preco, novoJogo.classificacao_etaria, novoJogo.desenvolvedora])
  return info.insertId;
}

