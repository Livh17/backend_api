import express from 'express'
import { listarAlunos, inserirAluno } from './Repositorios/alunoRepository.js';
import { listarCursos, inserirCurso } from './Repositorios/cursoRepository.js';
import { listarFilmes, inserirFilmes } from './Repositorios/filmesRepository.js';
import { listarHotel, inserirHotel } from './Repositorios/hotelRepository.js';
import { listarLivros, inserirLivro } from './Repositorios/livrosRepository.js';
import { inserirSeries, listarSerie } from './Repositorios/seriesRepository.js';
import { inserirJogos, listarJogos } from './Repositorios/jogosRepository.js';
import { inserirTenis, listarTenis } from './Repositorios/tenisReporitory.js';
import { inserirCarro, listarCarros } from './Repositorios/carrosRepository.js';
import { inserirFuncionario, listarFuncionarios } from './Repositorios/funcionariosRepository.js';
const api = express();
api.use(express.json());




//Alunos__________________________________________________1
api.get('/aluno', async (req, resp) => {
  let registros = await listarAlunos();
  resp.send(registros);
})

api.post('/aluno', async (req, resp) => {
  let novoAluno = req.body;

  let id = await inserirAluno(novoAluno);
  resp.send({ novoId: id });
})
//_________________________________________________________



//Cursos__________________________________________________2
api.get('/curso', async (req, resp) => {
  let registros = await listarCursos();
  resp.send(registros);
})

api.post('/curso', async (req, resp) => {
  let novoCurso = req.body;

  let id = await inserirCurso(novoCurso);
  resp.send({ novoId: id });
})
//_________________________________________________________



//Filmes__________________________________________________3
api.get('/filmes', async (req, resp) => {
  let registros = await listarFilmes();
  resp.send(registros);
})

api.post('/filmes', async (req, resp) => {
  let novofilmes = req.body;

  let id = await inserirFilmes(novofilmes);
  resp.send({ novoId: id });
})
//_________________________________________________________



//Livros__________________________________________________4
api.get('/livro', async (req, resp) => {
  let registros = await listarLivros();
  resp.send(registros);
})

api.post('/livro', async (req, resp) => {
  let novoLivro = req.body;

  let id = await inserirLivro(novoLivro);
  resp.send({ novoId: id });
})
//________________________________________________________



//Hotel__________________________________________________5
api.get('/Hotel', async (req, resp) => {
  let registros = await listarHotel();
  resp.send(registros);
})

api.post('/Hotel', async (req, resp) => {
  let novoHotel = req.body;

  let id = await inserirHotel(novoHotel);
  resp.send({ novoId: id });
})
//_________________________________________________________



//Series__________________________________________________6
api.get('/series', async (req, resp) => {
  let registros = await listarSerie();
  resp.send(registros);
})

api.post('/series', async (req, resp) => {
  let novaSerie = req.body;

  let id = await inserirSeries(novaSerie);
  resp.send({ novoId: id });
})
//_________________________________________________________



//Jogos__________________________________________________7
api.get('/jogos', async (req, resp) => {
  let registros = await listarJogos();
  resp.send(registros);
})

api.post('/jogos', async (req, resp) => {
  let novoJogo = req.body;

  let id = await inserirJogos(novoJogo);
  resp.send({ novoId: id });
})
//_________________________________________________________




//Tenis__________________________________________________8
api.get('/tenis', async (req, resp) => {
  let registros = await listarTenis();
  resp.send(registros);
})

api.post('/tenis', async (req, resp) => {
  let novoTenis = req.body;

  let id = await inserirTenis(novoTenis);
  resp.send({ novoId: id });
})
//_________________________________________________________




//Carros__________________________________________________9
api.get('/carro', async (req, resp) => {
  let registros = await listarCarros();
  resp.send(registros);
})

api.post('/carro', async (req, resp) => {
  let novoCarro = req.body;

  let id = await inserirCarro(novoCarro);
  resp.send({ novoId: id });
})
//_________________________________________________________





//Funcionarios__________________________________________________10
api.get('/funcionario', async (req, resp) => {
  let registros = await listarFuncionarios();
  resp.send(registros);
})

api.post('/funcionario', async (req, resp) => {
  let novoFuncionario = req.body;

  let id = await inserirFuncionario(novoFuncionario);
  resp.send({ novoId: id });
})
//_________________________________________________________





api.listen(5010, () => console.log('API subiu na porta 5010 com sucesso!'));