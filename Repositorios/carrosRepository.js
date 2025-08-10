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





export async function consultarCarros(id) {
  const comando = `
    SELECT *
      FROM Carros
     WHERE id = ? 
  `

  const [registros] = await conection.query(comando, [id])
  return registros[0];
}






export async function filtrarPorPlaca(Placa) {
  const comando = `
    SELECT *
      FROM Carros
     WHERE Placa like ? 
  `

  const [registros] = await conection.query(comando, ['%'+Placa+'%'])
  return registros;
}






export async function alterarCarros(id, novosDados) {
  const comando = `
    UPDATE Carros
       SET Valor = ?,
           Placa = ?,
           modelo = ?,
           cor = ?,
           ar_condicionado = ?
     WHERE id = ?

  `

  const [info] = await conection.query(comando, [
    novosDados.Valor,
    novosDados.Placa,
    novosDados.modelo,
    novosDados.cor,
    novosDados.ar_condicionado,
    id
  ])
}







export async function removerCarros(id) {
  const comando = `
    DELETE FROM Carros
          WHERE id = ?
  `

  const [info] = await conection.query(comando, [id]);
}





