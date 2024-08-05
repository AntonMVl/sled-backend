import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator'
import { User } from 'src/app/user/entities/user.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Sled {
  @PrimaryGeneratedColumn({ name: 'sled_id' })
  @IsNumber()
  id: number

  @Column('integer', { nullable: false, name: 'magazine_number' })
  @IsNumber()
  magazineNumber: number

  @Column('integer', { nullable: false, name: 'criminal_number' })
  @IsNumber()
  criminalNumber: number

  @Column('integer', { nullable: false, name: 'year' })
  @IsNumber()
  year: number

  @Column('varchar', { nullable: false, name: 'criminal_article' })
  @IsString()
  criminalArticle: string

  @Column('varchar', { nullable: false, name: 'criminal_address' })
  @IsString()
  criminalAddress: string

  @CreateDateColumn({ unique: false, name: 'criminal_date', nullable: false })
  @IsDate()
  criminalDate: Date

  @Column('varchar', { nullable: false, name: 'victim_name' })
  @IsString()
  victimName: string

  @Column('varchar', { nullable: false, name: 'investigator' })
  @IsString()
  investigator: string

  @Column('varchar', { nullable: false, name: 'district' })
  @IsString()
  district: string

  @Column('integer', { nullable: false, name: 'expertise_number' })
  @IsNumber()
  expertiseNumber: number

  @CreateDateColumn({ unique: false, name: 'expertise_date', nullable: false })
  @IsDate()
  expertiseDate: Date

  @Column('varchar', { nullable: false, name: 'expert' })
  @IsString()
  expert: string

  @Column('varchar', { nullable: false, name: 'image_src' })
  @IsString()
  imageSrc: string

  @ManyToOne(() => User, (user) => user.sled)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User

  // Признаки

  @Column('bool', { nullable: true, name: 'line', default: false }) //Полоса
  @IsBoolean()
  line: boolean

  @Column('bool', { nullable: true, name: 'bow', default: false }) //Дуга
  @IsBoolean()
  bow: boolean

  @Column('bool', { nullable: true, name: 'net', default: false }) //Сетка
  @IsBoolean()
  net: boolean

  @Column('bool', { nullable: true, name: 'spruce', default: false }) //Елочка
  @IsBoolean()
  spruce: boolean

  @Column('bool', { nullable: true, name: 'wave', default: false }) //Волна
  @IsBoolean()
  wave: boolean

  @Column('bool', { nullable: true, name: 'zigzag', default: false }) //Зигзаг
  @IsBoolean()
  zigzag: boolean

  @Column('bool', { nullable: true, name: 'ring', default: false }) //Кольцо
  @IsBoolean()
  ring: boolean

  @Column('bool', { nullable: true, name: 'frame', default: false }) //Рамка
  @IsBoolean()
  frame: boolean

  @Column('bool', { nullable: true, name: 'polygon', default: false }) //Многоугольник
  @IsBoolean()
  polygon: boolean

  @Column('bool', { nullable: true, name: 'circle', default: false }) //Круг
  @IsBoolean()
  circle: boolean

  @Column('bool', { nullable: true, name: 'segment', default: false }) //Сегмент
  @IsBoolean()
  segment: boolean

  @Column('bool', { nullable: true, name: 'tooth', default: false }) //Зубец
  @IsBoolean()
  tooth: boolean

  @Column('bool', { nullable: true, name: 'scales', default: false }) //Чешуя
  @IsBoolean()
  scales: boolean

  @Column('bool', { nullable: true, name: 'star', default: false }) //Звезда
  @IsBoolean()
  star: boolean

  @Column('bool', { nullable: true, name: 'drizzle', default: false }) //Накрап
  @IsBoolean()
  drizzle: boolean

  @Column('bool', { nullable: true, name: 'title', default: false }) //Надпись
  @IsBoolean()
  title: boolean

  @Column('bool', { nullable: true, name: 'ellipse', default: false }) //Овал
  @IsBoolean()
  ellipse: boolean

  @Column('bool', { nullable: true, name: 'square', default: false }) //Квадрат
  @IsBoolean()
  square: boolean

  @Column('bool', { nullable: true, name: 'triangle', default: false }) //Треугольник
  @IsBoolean()
  triangle: boolean

  @Column('bool', { nullable: true, name: 'rectangle', default: false }) //Прямоугольник
  @IsBoolean()
  rectangle: boolean

  @Column('bool', { nullable: true, name: 'rhombus', default: false }) //Ромб
  @IsBoolean()
  rhombus: boolean

  @Column('bool', { nullable: true, name: 'cross', default: false }) //Крест
  @IsBoolean()
  cross: boolean

  @Column('bool', { nullable: true, name: 'l-element', default: false }) //Л-элемент
  @IsBoolean()
  lElement: boolean

  @Column('bool', { nullable: true, name: 'g-element', default: false }) //Г-элемент
  @IsBoolean()
  gElement: boolean

  @Column('bool', { nullable: true, name: 'p-element', default: false }) //П-элемент
  @IsBoolean()
  pElement: boolean

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  @IsDate()
  createdAt: Date
}
