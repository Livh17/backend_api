import { conection } from "../conection.js";


export async function listarCursos() {
  const comando = `
    SELECT *
      FROM Curso
  `

  const [registros] = await conection.query(comando)
  return registros;
}





export async function inserirCurso(novoCurso) {
  const comando = `
    INSERT INTO Curso (nome, carga_horaria, area)
               values (?, ?, ?);
  `

  const [info] = await conection.query(comando, [novoCurso.nome, novoCurso.carga_horaria, novoCurso.area])
  return info.insertId;
}







export async function consultarCursos(id) {
  const comando = `
    SELECT *
      FROM curso
     WHERE id = ? 
  `

  const [registros] = await conection.query(comando, [id])
  return registros[0];
}






export async function filtrarPorNome(nome) {
  const comando = `
    SELECT *
      FROM curso
     WHERE nome like ? 
  `

  const [registros] = await conection.query(comando, ['%'+nome+'%'])
  return registros;
}






export async function alterarCurso(id, novosDados) {
  const comando = `
    UPDATE curso
       SET nome = ?,
           carga_horaria = ?,
           area = ?
     WHERE id = ?
  `

  const [info] = await conection.query(comando, [
    novosDados.nome,
    novosDados.carga_horaria,
    novosDados.area,
    id
  ])
}







export async function removerCurso(id) {
  const comando = `
    DELETE FROM curso
          WHERE id = ?
  `

  const [info] = await conection.query(comando, [id]);
}





