import 'reflect-metadata'
import { ObjectType, Field, ID, Float } from 'type-graphql'

@ObjectType()
export class Transaction {
  @Field((type) => ID)
  id: string

  @Field((type) => Date)
  createdAt: Date

  @Field((type) => Date)
  updatedAt: Date

  @Field((type) => Date)
  transactionDate: Date

  @Field()
  account: string

  @Field()
  currency: string

  @Field()
  account: string

  @Field()
  status: string

  @Field((type) => String, { nullable: true })
  description: string | null

  @Field((type) => String, { nullable: true })
  category: string | null

  @Field((type) => String, { nullable: true })
  reference: string | null

  @Field((type) => Float, { nullable: true })
  amount: number
}
