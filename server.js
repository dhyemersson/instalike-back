import express from "express";
import routes from "./src/routes/postsRoutes.js"; // Certifique-se de que o caminho está correto

const app = express();

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Rotas
routes(app);

// Middleware para servir arquivos estáticos (imagens, etc.)
app.use(express.static("uploads"));

// Inicia o servidor
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
