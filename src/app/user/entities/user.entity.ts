import { IsDate, IsNumber, IsString } from 'class-validator'
import { Sled } from 'src/app/sled/entities/sled.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  @IsNumber()
  id: number

  @Column('varchar', { unique: true, nullable: false, name: 'login' })
  @IsString()
  readonly login: string

  @Column('varchar', { nullable: false, name: 'password' })
  @IsString()
  password: string

  @Column('varchar', { name: 'first_name' })
  @IsString()
  firstName: string

  @Column('varchar', { name: 'last_name' })
  @IsString()
  lastName: string

  @OneToMany(() => Sled, (sled) => sled.user)
  @JoinColumn({ name: 'sled_id', referencedColumnName: 'id' })
  sled: Sled[]

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  @IsDate()
  createdAt: Date
}
