import { conection } from "../conection.js";


export async function listarHotel() {
  const comando = `
    SELECT *
      FROM Hotel
  `

  const [registros] = await conection.query(comando)
  return registros;
}


export async function inserirHotel(novoHotel) {
  const comando = `
    INSERT INTO Hotel (nm_hospede, vl_valor, tp_quarto, nr_numero_quarto, bt_hospedado)
               values (?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [novoHotel.nm_hospede, novoHotel.vl_valor, novoHotel.tp_quarto, novoHotel.nr_numero_quarto, novoHotel.bt_hospedado])
  return info.insertId;
}





export async function consultarRegistro(id) {
  const comando = `
    SELECT *
      FROM Hotel
     WHERE id_hospede = ? 
  `
  const [registros] = await conection.query(comando, [id])
  return registros[0];
}






export async function filtrarPorHospede(Hospede) {
  const comando = `
    SELECT *
      FROM Hotel
     WHERE nm_hospede like ? 
  `

  const [registros] = await conection.query(comando, ['%'+ Hospede+'%'])
  return registros;
}






export async function alterarRegistro(id, novosDados) {
  const comando = `
    UPDATE Hotel
       SET nm_hospede = ?, 
       vl_valor = ?, 
       tp_quarto = ?,
       nr_numero_quarto = ?, 
       bt_hospedado = ?,
     WHERE id = ?
  ` 
  const [info] = await conection.query(comando, [
    novosDados.nm_hospede,
    novosDados.vl_valor,
    novosDados.tp_quarto,
    novosDados.nr_numero_quarto,
    novosDados.bt_hospedado,
    id
  ])
}


export async function removerRegistro(id) {
  const comando = `
    DELETE FROM Hotel
          WHERE id_hospede = ?
  `
  const [info] = await conection.query(comando, [id]);
}

