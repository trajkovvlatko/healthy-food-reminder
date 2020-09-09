import {Field, ObjectType} from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import MealProduct from './MealProduct';

@Entity()
@ObjectType()
export default class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({unique: true})
  @Field()
  name!: string;

  @Column()
  @Field()
  measure!: string;

  @Column()
  @Field()
  calories!: number;

  @Column({default: true})
  @Field()
  active!: boolean;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => MealProduct, (mealProduct) => mealProduct.product)
  mealProducts: MealProduct[];
}