import { IsDate, IsNumber, IsString } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number

  @Column('varchar', { unique: true, nullable: false, name: 'login' })
  @IsString()
  readonly login: string

  @Column('varchar', { nullable: false, name: 'password' })
  @IsString()
  password: string

  @Column('varchar', { nullable: false, name: 'first_name' })
  @IsString()
  firstName: string

  @Column('varchar', { nullable: false, name: 'last_name' })
  @IsString()
  lastName: string

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  @IsDate()
  createdAt: Date
}
