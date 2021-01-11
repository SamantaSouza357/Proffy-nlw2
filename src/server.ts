import express from 'express';
import cors from 'cors';
import routes from './routes';



const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

//Route params: Identificar qual o recurso que eu quero atualizar ou deletar;
//Query params: paginação,filtro,ordenação
//request.params recupera 
//request.body

//request.query


app.listen(3333);
//ouvir requisiçao http






