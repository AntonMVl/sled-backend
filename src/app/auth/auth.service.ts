import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import * as argon2 from 'argon2'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.userService.findOne(login)

    if (!user) throw new NotFoundException()
    const passwordIsMatch = await argon2.verify(user.password, password)

    if (user && passwordIsMatch) {
      return user
    }
    throw new BadRequestException('User or password are incorrect')
  }
}
