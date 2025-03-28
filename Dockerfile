# Pegando a imagem Node
FROM node:18-alpine

# Definir diretorio do container
WORKDIR /app

# Passando arquivos do .json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante do código para dentro do container
COPY . .

# Porta que a Api vai rodar
EXPOSE 3000

# Comando para Rodar
CMD ["npm", "run", "dev"]