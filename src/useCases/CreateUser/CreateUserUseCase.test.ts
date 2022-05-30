import { CreateUserUseCase } from "./CreateUserUseCase"
import { ICreateUserRequestDTO } from "./CreateUserDTO"

describe('CreateUserUseCase',() => {
  it('Should Execute whitout errors', () => {
    // Arrange
    const userRepositoryMock = {
      findByEmail: jest.fn().mockResolvedValue(false),
      save: jest.fn().mockResolvedValue({})
    }
  
    const mailProviderMock = {
      sendMail: jest.fn().mockResolvedValue({})
    }

    const createUserUseCase = new CreateUserUseCase(
      userRepositoryMock,
      mailProviderMock
    )

    const dataMock:ICreateUserRequestDTO = {
      email: 'daniel@gmail.com',
      name: 'Daniel Marques',
      password: '123456'
    }

    // Act
    createUserUseCase.execute = jest.fn().mockResolvedValue({})
    createUserUseCase.execute(dataMock)
    
    // Assert
    expect(createUserUseCase).toBeInstanceOf(CreateUserUseCase)
    expect(createUserUseCase.execute).toHaveBeenCalledTimes(1)
    expect(createUserUseCase.execute).toHaveBeenCalledWith(
      {
        "email": "daniel@gmail.com",
        "name": "Daniel Marques",
        "password": "123456"
      }
    )
  })
})

