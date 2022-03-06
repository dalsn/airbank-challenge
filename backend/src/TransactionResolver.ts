import 'reflect-metadata'
import {
  Resolver,
  Query,
  Arg,
  Ctx,
  FieldResolver,
  Field,
} from 'type-graphql'
import { Transaction } from './Transaction'
import { Context } from './context'

@Resolver(Transaction)
export class TransactionResolver {

  @Query((returns) => Transaction, { nullable: true })
  async transactionById(@Arg('id') id: string, @Ctx() ctx: Context) {
    return ctx.prisma.transaction.findUnique({
      where: { id },
    })
  }

  @Query((returns) => [Transaction])
  async getTransactions(
    @Arg('startDate', (type) => Date, { nullable: true }) startDate: Date,
    @Arg('endDate', (type) => Date, { nullable: true }) endDate: Date,
    @Ctx() ctx: Context,
  ) {

    const start = startDate
      ? { 
          transactionDate: {
            gte: startDate
          }
        }
      : {}

    const end = endDate
      ? { 
          transactionDate: {
            lte: endDate
          }
        }
      : {}

    const and = {
        AND: [
          { ...start },
          { ...end },
        ],
      }

    return ctx.prisma.transaction.findMany({
      where: { ...and }
    })
  }
}
