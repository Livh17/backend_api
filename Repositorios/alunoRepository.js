import { conection } from "../conection.js";


export async function listarAlunos() {
  const comando = `
    SELECT *
      FROM Aluno
  `

  const [registros] = await conection.query(comando)
  return registros;
}


export async function inserirAluno(novoAluno) {
  const comando = `
    INSERT INTO Aluno (nome, email, data_nascimento)
               values (?, ?, ?);
  `

  const [info] = await conection.query(comando, [novoAluno.nome, novoAluno.email, novoAluno.data_nascimento])
  return info.insertId;
}



export async function consultarAluno(id) {
  const comando = `
    SELECT *
      FROM Aluno
     WHERE id = ? 
  `

  const [registros] = await conection.query(comando, [id])
  return registros[0];
}






export async function filtrarPorAluno(Nome) {
  const comando = `
    SELECT *
      FROM Aluno
     WHERE Nome like ? 
  `

  const [registros] = await conection.query(comando, ['%'+Nome+'%'])
  return registros;
}






export async function alterarAluno(id, novosDados) {
  const comando = `
    UPDATE Aluno
       SET Nome = ?,
           Email = ?,
           data_nascimento = ?
     WHERE id = ?

  `

  const [info] = await conection.query(comando, [
    novosDados.Nome,
    novosDados.Email,
    novosDados.data_nascimento,
    id
  ])
}




export async function removerAluno(id) {
  const comando = `
    DELETE FROM Aluno
          WHERE id = ?
  `
  const [info] = await conection.query(comando, [id]);
}





