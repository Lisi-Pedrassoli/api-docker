Descrição do projeto:
Esta api te permite montar o seu sorvete, você pode criar com o post e pode visualizar o sorvete que criou com o get

Comandos para rodar o Docker:
git clone https://github.com/Lisi-Pedrassoli/api-docker.git

cd api docker 

docker build -t api-sorvete .

docker run -p 3000:3000 api-sorvete

Rotas:
GET/sorvetes

POST/sorvetes
{
 	"nome": "Gelato chocolate",
	"sabor": "chocolate"
}
