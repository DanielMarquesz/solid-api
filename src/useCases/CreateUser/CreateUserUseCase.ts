import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

// Single responsability - trata estritamente do caso de criar usuário
// L & D

export class CreateUserUseCase {

  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ){}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if(userAlreadyExists) {
      throw new Error('Error while creating user!')
    }

    const user = new User(data)

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Daniel',
        email: 'daniel@email.com'
      },
      subject: 'Registro concluido',
      body: '<p>Eu amo a Laís</p>'
    })
  }
}