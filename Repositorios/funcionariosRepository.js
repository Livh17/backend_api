import { conection } from "../conection.js";


export async function listarFuncionarios() {
  const comando = `
    SELECT *
      FROM Funcionarios
  `

  const [registros] = await conection.query(comando)
  return registros;
}


export async function inserirFuncionario(novoFuncionario) {
  const comando = `
    INSERT INTO Funcionarios (nm_Nome, ds_Cargo, vl_Salario, dt_Data_Contratacao, bt_Empregado)
               values (?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [novoFuncionario.nm_nome, novoFuncionario.ds_cargo, novoFuncionario.vl_salario, novoFuncionario.dt_Data_Contratacao, novoFuncionario.bt_Empregado])
  return info.insertId;
}




export async function consultarFuncionario(id) {
  const comando = `
    SELECT *
      FROM Funcionarios
     WHERE id = ? 
  `
  const [registros] = await conection.query(comando, [id])
  return registros[0];
}






export async function filtrarPorNome(Nome) {
  const comando = `
    SELECT *
      FROM Funcionarios
     WHERE nm_nome like ? 
  `

  const [registros] = await conection.query(comando, ['%'+Nome+'%'])
  return registros;
}






export async function alterarFuncionarios(id, novosDados) {
  const comando = `
    UPDATE Funcionarios
       SET nm_Nome = ?, 
       ds_Cargo = ?, 
       vl_Salario = ?,
       dt_Data_Contratacao = ?, 
       bt_Empregado = ?, 
     WHERE id = ?
  `
  const [info] = await conection.query(comando, [
    novosDados.nm_nome,
    novosDados.ds_cargo,
    novosDados.vl_salario,
    novosDados.dt_Data_Contratacao,
    novosDados.bt_Empregado,
    id
  ])
}


export async function removerFuncionarios(id) {
  const comando = `
    DELETE FROM Funcionarios
          WHERE id = ?
  `
  const [info] = await conection.query(comando, [id]);
}



