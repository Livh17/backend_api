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
