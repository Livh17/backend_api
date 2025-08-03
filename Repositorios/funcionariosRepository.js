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
