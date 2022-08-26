//importancoes de biblioteca

    //import {creatServer} as http from 'http';
    //import as queryString from 'query-string';


    import {parse} from  'query-string';
    import *as url  from 'url';
    import {writeFile }   from 'fs';
    import { createServer, IncomingMessage, ServerResponse} from 'http';
    

    //definicao de porta

    const port = 5000;

    // comando do servidor

    const server = createServer((request:IncomingMessage, response: ServerResponse)=>{

const urlparse = url.parse(request.url ? request.url : ' true');

var Resposta;
 
//receber  informaçoes do usuario
const params = parse(urlparse.search ? urlparse.search: '');

//criar um usuario -actualizar um usuario

if( urlparse.pathname == '/criar-atualizar-usuario'){
    // salvar as informaçoes
    writeFile('user/' + params.id + '.txt', JSON.stringify(params), function(err:any){
        if(err) throw err;
        console.log('Saved!');
        Resposta = 'Usuario criado/atualizado com sucesso';
    
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(Resposta);
        
    });
}
//Response.end("hello World"); tiramos no fim porque nao queremos que apareca,visto que o javascript é assincrono.

    }); // quando pomos repsonse: any -- significa que noa sabemos e pode ser qualquer um.

    // Execuçao

    server.listen(port,() => {
        console.log('Server running on port${port}');

    });