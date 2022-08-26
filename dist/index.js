"use strict";
//importancoes de biblioteca
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {creatServer} as http from 'http';
//import as queryString from 'query-string';
const query_string_1 = require("query-string");
const url = __importStar(require("url"));
const fs_1 = require("fs");
const http_1 = require("http");
//definicao de porta
const port = 5000;
// comando do servidor
const server = (0, http_1.createServer)((request, response) => {
    const urlparse = url.parse(request.url ? request.url : ' true');
    var Resposta;
    //receber  informaçoes do usuario
    const params = (0, query_string_1.parse)(urlparse.search ? urlparse.search : '');
    //criar um usuario -actualizar um usuario
    if (urlparse.pathname == '/criar-atualizar-usuario') {
        // salvar as informaçoes
        (0, fs_1.writeFile)('user/' + params.id + '.txt', JSON.stringify(params), function (err) {
            if (err)
                throw err;
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
server.listen(port, () => {
    console.log('Server running on port${port}');
});
