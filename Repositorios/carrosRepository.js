import { conection } from "../conection.js";


export async function listarCarros() {
  const comando = `
    SELECT *
      FROM Carros
  `

  const [registros] = await conection.query(comando)
  return registros;
}




export async function inserirCarro(novoCarro) {
  const comando = `
    INSERT INTO Carros (Valor, Placa, modelo, ano_fabricacao, cor, ar_condicionado)
            values (?, ?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [novoCarro.Valor, novoCarro.Placa, novoCarro.modelo, novoCarro.ano_fabricacao, novoCarro.cor, novoCarro.car_condicionado])
  return info.insertId;
}




