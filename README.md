LINK DO VIDEO DE APRESENTAÇÃO NO GOOGLE DRIVE:

https://drive.google.com/file/d/1KOH9C2WVIxYA_fc4Xr5kKobxsOm_3uDa/view?usp=sharing


Resumo do Projeto de Sistema de Gerenciamento de Clientes
Implementação Atual:

Backend:

Construído com Node.js e Express.
Utiliza o banco de dados PostgreSQL para armazenar informações dos clientes.
Permite cadastrar clientes e listar todos os clientes existentes.
Utiliza o cors para permitir comunicações cross-origin, essencial para o desenvolvimento local e teste com frontend em outra origem.
Frontend:

Desenvolvido com React.
Contém componentes para a adição de novos clientes (CadastroCliente) e visualização da lista de clientes (ListaClientes).
Interage com o backend por meio de requisições HTTP utilizando o Axios.
Possíveis Extensões:

Implementar autenticação e autorização para proteger os dados dos clientes e garantir que apenas usuários autorizados possam acessar e modificar esses dados.
Adicionar funcionalidade para editar e excluir clientes.
Implementar o cálculo de rota otimizada (não incluso no código fornecido) para criar rotas eficientes para visitação dos clientes.
Adicionar testes automatizados para garantir a integridade do código conforme novas funcionalidades são desenvolvidas.
Internacionalizar o frontend para suportar múltiplos idiomas e regionalizações.
Como Rodar o Projeto Localmente:

Pré-requisitos:

Node.js (versão recomendada: 14.x ou superior)
npm (normalmente vem com Node.js)
PostgreSQL (versão recomendada: 13.x ou superior)
Configuração do Banco de Dados:

Instale e configure o PostgreSQL localmente.
Crie um banco de dados e usuário conforme necessário para o projeto.
Setup do Backend:

Navegue até a pasta backend.
Execute npm install para instalar todas as dependências.
Crie um arquivo .env na raiz da pasta backend com a seguinte variável para configurar a conexão com o banco de dados: DATABASE_URL=postgres://USERNAME:PASSWORD@localhost:5432/DATABASE_NAME, substituindo USERNAME, PASSWORD, e DATABASE_NAME pelas suas configurações de banco de dados.
Execute npm start para rodar o servidor.
Setup do Frontend:

Navegue até a pasta frontend.
Execute npm install para instalar as dependências.
Execute npm start para iniciar o servidor de desenvolvimento do React. O aplicativo será aberto no navegador padrão.
Observações Finais:

O sistema foi projetado para ser simples e funcional, fornecendo uma base sobre a qual recursos adicionais podem ser construídos. O backend e o frontend são mantidos separadamente para facilitar a manutenção e a escalabilidade. Certifique-se de manter todas as dependências atualizadas e testar o sistema completamente após cada atualização ou adição de novo código.
