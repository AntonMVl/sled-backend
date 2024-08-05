import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as argon2 from 'argon2'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        login: createUserDto.login,
      },
    })
    if (existUser)
      throw new BadRequestException(
        `User with login ${existUser.login} already exist`,
      )

    const user = await this.userRepository.save({
      login: createUserDto.login,
      password: await argon2.hash(createUserDto.password),
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
    })

    return { user }
  }

  async findOne(login: string) {
    const user = await this.userRepository.findOne({ where: { login } })

    return user
  }
}
