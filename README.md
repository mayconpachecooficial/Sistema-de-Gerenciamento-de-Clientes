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
PostgreSQL (versão recomendada: 13.x ou superior)

O sistema foi projetado para ser simples e funcional, fornecendo uma base sobre a qual recursos adicionais podem ser construídos. O backend e o frontend são mantidos separadamente para facilitar a manutenção e a escalabilidade. Certifique-se de manter todas as dependências atualizadas e testar o sistema completamente após cada atualização ou adição de novo código.
