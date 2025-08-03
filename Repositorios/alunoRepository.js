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

