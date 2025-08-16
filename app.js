import express from 'express'
import { listarAlunos, inserirAluno, removerAluno, alterarAluno, consultarAluno} from './Repositorios/alunoRepository.js';
import { listarCursos, inserirCurso, filtrarPorNome, consultarCursos, alterarCurso, removerCurso } from './Repositorios/cursoRepository.js';
import { listarFilmes, inserirFilmes, filtrarPorFilme, consultarFilmes, alterarFilmes, removerFilmes } from './Repositorios/filmesRepository.js';
import { listarHotel, inserirHotel, filtrarPorHospede, consultarRegistro, alterarRegistro, removerRegistro } from './Repositorios/hotelRepository.js';
import { listarLivros, inserirLivro, removerLivro, alterarLivros, consultarLivros, filtrarLivro } from './Repositorios/livrosRepository.js';
import { alterarSerie, consultarSerie, filtrarPorSerie, inserirSeries, listarSerie, removerSerie } from './Repositorios/seriesRepository.js';
import { alterarJogo, consultarJogo, filtrarPorJogo, inserirJogos, listarJogos, removerJogo } from './Repositorios/jogosRepository.js';
import { alterarTenis, consultarTenis, filtrarPorTenis, inserirTenis, listarTenis, removerTenis } from './Repositorios/tenisReporitory.js';
import { alterarCarros, consultarCarros, filtrarPorPlaca, inserirCarro, listarCarros, removerCarros } from './Repositorios/carrosRepository.js';
import { alterarFuncionarios, consultarFuncionario, filtrarPorFuncionario, inserirFuncionario, listarFuncionarios, removerFuncionarios } from './Repositorios/funcionariosRepository.js';
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


api.get('/aluno/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarPorNome(nome);
  resp.send(registros);
})


api.get('/aluno/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await consultarAluno(id);
  resp.send(registros);
})


api.put('/aluno/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novosDados = req.body;
  await alterarAluno(id, novosDados);
  resp.send();
})


api.delete('/aluno/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerAluno(id);
  resp.send('Aluno removido com sucesso!');
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


api.get('/curso/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarPorNome(nome);
  resp.send(registros);
})


api.get('/curso/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await consultarCursos(id);
  resp.send(registros);
})


api.put('/curso/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novosDados = req.body;
  await alterarCurso(id, novosDados);
  resp.send();
})


api.delete('/curso/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerCurso(id);
  resp.send('Curso removido com sucesso!');
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


api.delete('/filmes/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerFilmes(id);
  resp.send('Filme removido com sucesso!');
})


api.get('/filmes/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await consultarFilmes(id);
  resp.send(registros);
})


api.get('/filmes/filtro', async (req, resp) => {
  let titulo = req.query.titulo;
  let registros = await filtrarPorFilme(titulo);
  resp.send(registros);
})


api.put('/filmes/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novosDados = req.body;
  await alterarFilmes(id, novosDados);
  resp.send();
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


api.get('/livro/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarLivro(nome);
  resp.send(registros);
})


api.get('/livro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await consultarLivros(id);
  resp.send(registros);
})


api.put('/livro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novosDados = req.body;
  await alterarLivros(id, novosDados);
  resp.send();
})


api.delete('/livro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerLivro(id);
  resp.send('Livro removido com sucesso!');
})

//________________________________________________________







//Hotel__________________________________________________5
api.get('/hotel', async (req, resp) => {
  let registros = await listarHotel();
  resp.send(registros);
})
 

api.post('/Hotel', async (req, resp) => {
  let novoHotel = req.body;
  let id = await inserirHotel(novoHotel);
  resp.send({ novoId: id });
})


api.delete('/hotel/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerRegistro(id);
  resp.send('Registro removido com sucesso!');
})


api.get('/hotel/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarPorHospede(nome);
  resp.send(registros);
})


api.get('/hotel/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await consultarRegistro(id);
  resp.send(registros);
})


api.put('/hotel/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novosDados = req.body;
  await alterarRegistro(id, novosDados);
  resp.send();
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


api.delete('/series/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerSerie(id);
  resp.send('Registro removido com sucesso!');
})


api.get('/series/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarPorSerie(nome);
  resp.send(registros);
})


api.get('/series/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await consultarSerie(id);
  resp.send(registros);
})


api.put('/series/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novosDados = req.body;
  await alterarSerie(id, novosDados);
  resp.send();
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


api.delete('/jogos/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerJogo(id);
  resp.send('Registro removido com sucesso!');
})


api.get('/jogos/filtro', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarPorJogo(nome);
  resp.send(registros);
})


api.get('/jogos/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await consultarJogo(id);
  resp.send(registros);
})


api.put('/jogos/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novosDados = req.body;
  await alterarJogo(id, novosDados);
  resp.send();
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

api.get('/tenis/filtro', async (req, resp) => {
  let nome = req.query.placa;
  let registros = await filtrarPorTenis(nome);
  resp.send(registros);
})


api.get('/tenis/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await consultarTenis(id);
  resp.send(registros);
})


api.put('/tenis/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novosDados = req.body;
  await alterarTenis(id, novosDados);
  resp.send();
})


api.delete('/tenis/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerTenis(id);
  resp.send();
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


api.get('/carro/filtro', async (req, resp) => {
  let placa = req.query.placa;
  let registros = await filtrarPorPlaca(placa);
  resp.send(registros);
})


api.get('/carro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await consultarCarros(id);
  resp.send(registros);
})


api.put('/carro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novosDados = req.body;
  await alterarCarros(id, novosDados);
  resp.send();
})


api.delete('/carro/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerCarros(id);
  resp.send();
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

api.get('/funcionario/filtro', async (req, resp) => {
  let nome = req.query.placa;
  let registros = await filtrarPorFuncionario(nome);
  resp.send(registros);
})


api.get('/funcionario/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let registros = await consultarFuncionario(id);
  resp.send(registros);
})


api.put('/funcionario/:id', async (req, resp) => {
  let id = Number(req.params.id);
  let novosDados = req.body;
  await alterarFuncionarios(id, novosDados);
  resp.send();
})


api.delete('/funcionario/:id', async (req, resp) => {
  let id = Number(req.params.id);
  await removerFuncionarios(id);
  resp.send();
})

//_________________________________________________________





api.listen(5010, () => console.log('API subiu na porta 5010 com sucesso!'));