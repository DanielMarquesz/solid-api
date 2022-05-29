# SOLID - API

API de exemplo para uma breve aplicação e explicalçao dos princípios solid.
Caso deseje realizar um teste, apenas clonar o repositório, criar uma conta na Mailtrap e utilizar as credenciais de teste nas seguintes variáveis de ambiente fora da pasta `src`: HOST_MAIL, PORT_MAIL, USER_MAIL, PASS_MAIL.
Utilizar o arquivo .json do insominia com a rota especificada. Ao receber o status code: `201`. Verificar sua caixa de email na Mailtrap verificando se um email foi recebido.

## S - Single Reponsibility Principle

Uma classe ou um modulo deve ter somente uma responsabilidade atrelada a mesma. No arquivo: `src/useCases/CreateUser/CreateUserController.ts` está atrelado apenas a responsabilidade de receber uma comunicação do mundo externo(no caso uma requisição Http) e encaminha-lá a outra tratativa esperando apenas 2 tipos de resposta.

O arquivo: `src/useCases/CreateUser/CreateUserUseCase.ts` também ilustra isso muito bem visto que foi feito o máximo para que sua responsabilidade seja apenas a de criar um usuário.

## O - Open Close Principle

Classes e módulos podem ser extendidos sem excessão porém seus métodos originais não devem ser alterados.

## L - Liskov Substitution Principle

Não foi utilizado um exemplo claro, porém o conceito seria de que classes derivadas devem/podem ser substituidas pelas suas classes pais sem alterações de funcionalidades

## I - Interface Segregation Principle

É ideal a criação de interfaces por módulos, e não uma interface única para dependencia de todos os arquivos do projeto. 

## D - Dependency Inversion Principle

No projeto utilizamos interfaces para definir não somente os tipos, mas também para definir especies de "contratos", para que quanto formos utilizar uma classe, não precisamos depender dos métodos reais implementados, mas sim os métodos implementados na interface(abstração).


* [] Criar testes unitários