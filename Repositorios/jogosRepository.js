import { conection } from "../conection.js";


export async function listarJogos() {
  const comando = `
    SELECT *FROM jogos
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




export async function consultarJogo(id) {
  const comando = `
    SELECT *
      FROM Jogos
     WHERE id = ? 
  `
  const [registros] = await conection.query(comando, [id])
  return registros[0];
}






export async function filtrarPorJogo(Titulo) {
  const comando = `
    SELECT *FROM Jogos
     WHERE titulo 
     like ? 
  `
  const [registros] = await conection.query(comando, ['%'+ Titulo +'%'])
  return registros;
}






export async function alterarJogo(id, novosDados) {
  const comando = `
    UPDATE Jogos
       SET titulo = ?, 
       genero = ?, 
       plataforma = ?,
       data_lancamento = ?, 
       preco = ?,
       classificacao_etaria = ?,
       desenvolvedora = ?,
     WHERE id = ?
  ` 
  const [info] = await conection.query(comando, [
    novosDados.titulo,
    novosDados.genero,
    novosDados.plataforma,
    novosDados.data_lancamento,
    novosDados.preco,
    novosDados.classificacao_etaria,
    novosDados.desenvolvedora,
    id
  ])
}


export async function removerJogo(id) {
  const comando = `
    DELETE FROM Jogos
          WHERE id = ?
  `
  const [info] = await conection.query(comando, [id]);
}

