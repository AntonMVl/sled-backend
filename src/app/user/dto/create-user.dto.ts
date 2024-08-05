import { IsOptional, MinLength } from 'class-validator'

export class CreateUserDto {
  @MinLength(3, { message: 'Логин должен содержать минимум 3 символа' })
  login: string

  @MinLength(6, { message: 'Пароль должен содержать минимум 6 символов' })
  password: string

  @IsOptional()
  firstName?: string

  @IsOptional()
  lastName?: string
}
