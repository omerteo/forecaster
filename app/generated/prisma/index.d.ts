
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ItemDemand
 * 
 */
export type ItemDemand = $Result.DefaultSelection<Prisma.$ItemDemandPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ItemDemands
 * const itemDemands = await prisma.itemDemand.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ItemDemands
   * const itemDemands = await prisma.itemDemand.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.itemDemand`: Exposes CRUD operations for the **ItemDemand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemDemands
    * const itemDemands = await prisma.itemDemand.findMany()
    * ```
    */
  get itemDemand(): Prisma.ItemDemandDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ItemDemand: 'ItemDemand'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "itemDemand"
      txIsolationLevel: never
    }
    model: {
      ItemDemand: {
        payload: Prisma.$ItemDemandPayload<ExtArgs>
        fields: Prisma.ItemDemandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemDemandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDemandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemDemandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDemandPayload>
          }
          findFirst: {
            args: Prisma.ItemDemandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDemandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemDemandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDemandPayload>
          }
          findMany: {
            args: Prisma.ItemDemandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDemandPayload>[]
          }
          create: {
            args: Prisma.ItemDemandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDemandPayload>
          }
          createMany: {
            args: Prisma.ItemDemandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemDemandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDemandPayload>
          }
          update: {
            args: Prisma.ItemDemandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDemandPayload>
          }
          deleteMany: {
            args: Prisma.ItemDemandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemDemandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemDemandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemDemandPayload>
          }
          aggregate: {
            args: Prisma.ItemDemandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemDemand>
          }
          groupBy: {
            args: Prisma.ItemDemandGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemDemandGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ItemDemandFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ItemDemandAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ItemDemandCountArgs<ExtArgs>
            result: $Utils.Optional<ItemDemandCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    itemDemand?: ItemDemandOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ItemDemand
   */

  export type AggregateItemDemand = {
    _count: ItemDemandCountAggregateOutputType | null
    _avg: ItemDemandAvgAggregateOutputType | null
    _sum: ItemDemandSumAggregateOutputType | null
    _min: ItemDemandMinAggregateOutputType | null
    _max: ItemDemandMaxAggregateOutputType | null
  }

  export type ItemDemandAvgAggregateOutputType = {
    internalId: number | null
    amount: number | null
    quantity: number | null
  }

  export type ItemDemandSumAggregateOutputType = {
    internalId: number | null
    amount: number | null
    quantity: number | null
  }

  export type ItemDemandMinAggregateOutputType = {
    id: string | null
    internalId: number | null
    documentNumber: string | null
    amount: number | null
    quantity: number | null
    item: string | null
    itemCategory: string | null
    date: Date | null
    shippingState: string | null
    shippingZip: string | null
    shipVia: string | null
    unit: string | null
    model: string | null
  }

  export type ItemDemandMaxAggregateOutputType = {
    id: string | null
    internalId: number | null
    documentNumber: string | null
    amount: number | null
    quantity: number | null
    item: string | null
    itemCategory: string | null
    date: Date | null
    shippingState: string | null
    shippingZip: string | null
    shipVia: string | null
    unit: string | null
    model: string | null
  }

  export type ItemDemandCountAggregateOutputType = {
    id: number
    internalId: number
    documentNumber: number
    amount: number
    quantity: number
    item: number
    itemCategory: number
    date: number
    shippingState: number
    shippingZip: number
    shipVia: number
    unit: number
    model: number
    _all: number
  }


  export type ItemDemandAvgAggregateInputType = {
    internalId?: true
    amount?: true
    quantity?: true
  }

  export type ItemDemandSumAggregateInputType = {
    internalId?: true
    amount?: true
    quantity?: true
  }

  export type ItemDemandMinAggregateInputType = {
    id?: true
    internalId?: true
    documentNumber?: true
    amount?: true
    quantity?: true
    item?: true
    itemCategory?: true
    date?: true
    shippingState?: true
    shippingZip?: true
    shipVia?: true
    unit?: true
    model?: true
  }

  export type ItemDemandMaxAggregateInputType = {
    id?: true
    internalId?: true
    documentNumber?: true
    amount?: true
    quantity?: true
    item?: true
    itemCategory?: true
    date?: true
    shippingState?: true
    shippingZip?: true
    shipVia?: true
    unit?: true
    model?: true
  }

  export type ItemDemandCountAggregateInputType = {
    id?: true
    internalId?: true
    documentNumber?: true
    amount?: true
    quantity?: true
    item?: true
    itemCategory?: true
    date?: true
    shippingState?: true
    shippingZip?: true
    shipVia?: true
    unit?: true
    model?: true
    _all?: true
  }

  export type ItemDemandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemDemand to aggregate.
     */
    where?: ItemDemandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDemands to fetch.
     */
    orderBy?: ItemDemandOrderByWithRelationInput | ItemDemandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemDemandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDemands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDemands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemDemands
    **/
    _count?: true | ItemDemandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemDemandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemDemandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemDemandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemDemandMaxAggregateInputType
  }

  export type GetItemDemandAggregateType<T extends ItemDemandAggregateArgs> = {
        [P in keyof T & keyof AggregateItemDemand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemDemand[P]>
      : GetScalarType<T[P], AggregateItemDemand[P]>
  }




  export type ItemDemandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemDemandWhereInput
    orderBy?: ItemDemandOrderByWithAggregationInput | ItemDemandOrderByWithAggregationInput[]
    by: ItemDemandScalarFieldEnum[] | ItemDemandScalarFieldEnum
    having?: ItemDemandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemDemandCountAggregateInputType | true
    _avg?: ItemDemandAvgAggregateInputType
    _sum?: ItemDemandSumAggregateInputType
    _min?: ItemDemandMinAggregateInputType
    _max?: ItemDemandMaxAggregateInputType
  }

  export type ItemDemandGroupByOutputType = {
    id: string
    internalId: number
    documentNumber: string
    amount: number
    quantity: number
    item: string
    itemCategory: string
    date: Date
    shippingState: string
    shippingZip: string
    shipVia: string
    unit: string
    model: string
    _count: ItemDemandCountAggregateOutputType | null
    _avg: ItemDemandAvgAggregateOutputType | null
    _sum: ItemDemandSumAggregateOutputType | null
    _min: ItemDemandMinAggregateOutputType | null
    _max: ItemDemandMaxAggregateOutputType | null
  }

  type GetItemDemandGroupByPayload<T extends ItemDemandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemDemandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemDemandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemDemandGroupByOutputType[P]>
            : GetScalarType<T[P], ItemDemandGroupByOutputType[P]>
        }
      >
    >


  export type ItemDemandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internalId?: boolean
    documentNumber?: boolean
    amount?: boolean
    quantity?: boolean
    item?: boolean
    itemCategory?: boolean
    date?: boolean
    shippingState?: boolean
    shippingZip?: boolean
    shipVia?: boolean
    unit?: boolean
    model?: boolean
  }, ExtArgs["result"]["itemDemand"]>



  export type ItemDemandSelectScalar = {
    id?: boolean
    internalId?: boolean
    documentNumber?: boolean
    amount?: boolean
    quantity?: boolean
    item?: boolean
    itemCategory?: boolean
    date?: boolean
    shippingState?: boolean
    shippingZip?: boolean
    shipVia?: boolean
    unit?: boolean
    model?: boolean
  }

  export type ItemDemandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "internalId" | "documentNumber" | "amount" | "quantity" | "item" | "itemCategory" | "date" | "shippingState" | "shippingZip" | "shipVia" | "unit" | "model", ExtArgs["result"]["itemDemand"]>

  export type $ItemDemandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemDemand"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      internalId: number
      documentNumber: string
      amount: number
      quantity: number
      item: string
      itemCategory: string
      date: Date
      shippingState: string
      shippingZip: string
      shipVia: string
      unit: string
      model: string
    }, ExtArgs["result"]["itemDemand"]>
    composites: {}
  }

  type ItemDemandGetPayload<S extends boolean | null | undefined | ItemDemandDefaultArgs> = $Result.GetResult<Prisma.$ItemDemandPayload, S>

  type ItemDemandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemDemandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemDemandCountAggregateInputType | true
    }

  export interface ItemDemandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemDemand'], meta: { name: 'ItemDemand' } }
    /**
     * Find zero or one ItemDemand that matches the filter.
     * @param {ItemDemandFindUniqueArgs} args - Arguments to find a ItemDemand
     * @example
     * // Get one ItemDemand
     * const itemDemand = await prisma.itemDemand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemDemandFindUniqueArgs>(args: SelectSubset<T, ItemDemandFindUniqueArgs<ExtArgs>>): Prisma__ItemDemandClient<$Result.GetResult<Prisma.$ItemDemandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ItemDemand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemDemandFindUniqueOrThrowArgs} args - Arguments to find a ItemDemand
     * @example
     * // Get one ItemDemand
     * const itemDemand = await prisma.itemDemand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemDemandFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemDemandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemDemandClient<$Result.GetResult<Prisma.$ItemDemandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemDemand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDemandFindFirstArgs} args - Arguments to find a ItemDemand
     * @example
     * // Get one ItemDemand
     * const itemDemand = await prisma.itemDemand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemDemandFindFirstArgs>(args?: SelectSubset<T, ItemDemandFindFirstArgs<ExtArgs>>): Prisma__ItemDemandClient<$Result.GetResult<Prisma.$ItemDemandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ItemDemand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDemandFindFirstOrThrowArgs} args - Arguments to find a ItemDemand
     * @example
     * // Get one ItemDemand
     * const itemDemand = await prisma.itemDemand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemDemandFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemDemandFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemDemandClient<$Result.GetResult<Prisma.$ItemDemandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemDemands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDemandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemDemands
     * const itemDemands = await prisma.itemDemand.findMany()
     * 
     * // Get first 10 ItemDemands
     * const itemDemands = await prisma.itemDemand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemDemandWithIdOnly = await prisma.itemDemand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemDemandFindManyArgs>(args?: SelectSubset<T, ItemDemandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemDemandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ItemDemand.
     * @param {ItemDemandCreateArgs} args - Arguments to create a ItemDemand.
     * @example
     * // Create one ItemDemand
     * const ItemDemand = await prisma.itemDemand.create({
     *   data: {
     *     // ... data to create a ItemDemand
     *   }
     * })
     * 
     */
    create<T extends ItemDemandCreateArgs>(args: SelectSubset<T, ItemDemandCreateArgs<ExtArgs>>): Prisma__ItemDemandClient<$Result.GetResult<Prisma.$ItemDemandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ItemDemands.
     * @param {ItemDemandCreateManyArgs} args - Arguments to create many ItemDemands.
     * @example
     * // Create many ItemDemands
     * const itemDemand = await prisma.itemDemand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemDemandCreateManyArgs>(args?: SelectSubset<T, ItemDemandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemDemand.
     * @param {ItemDemandDeleteArgs} args - Arguments to delete one ItemDemand.
     * @example
     * // Delete one ItemDemand
     * const ItemDemand = await prisma.itemDemand.delete({
     *   where: {
     *     // ... filter to delete one ItemDemand
     *   }
     * })
     * 
     */
    delete<T extends ItemDemandDeleteArgs>(args: SelectSubset<T, ItemDemandDeleteArgs<ExtArgs>>): Prisma__ItemDemandClient<$Result.GetResult<Prisma.$ItemDemandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ItemDemand.
     * @param {ItemDemandUpdateArgs} args - Arguments to update one ItemDemand.
     * @example
     * // Update one ItemDemand
     * const itemDemand = await prisma.itemDemand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemDemandUpdateArgs>(args: SelectSubset<T, ItemDemandUpdateArgs<ExtArgs>>): Prisma__ItemDemandClient<$Result.GetResult<Prisma.$ItemDemandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ItemDemands.
     * @param {ItemDemandDeleteManyArgs} args - Arguments to filter ItemDemands to delete.
     * @example
     * // Delete a few ItemDemands
     * const { count } = await prisma.itemDemand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDemandDeleteManyArgs>(args?: SelectSubset<T, ItemDemandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemDemands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDemandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemDemands
     * const itemDemand = await prisma.itemDemand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemDemandUpdateManyArgs>(args: SelectSubset<T, ItemDemandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemDemand.
     * @param {ItemDemandUpsertArgs} args - Arguments to update or create a ItemDemand.
     * @example
     * // Update or create a ItemDemand
     * const itemDemand = await prisma.itemDemand.upsert({
     *   create: {
     *     // ... data to create a ItemDemand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemDemand we want to update
     *   }
     * })
     */
    upsert<T extends ItemDemandUpsertArgs>(args: SelectSubset<T, ItemDemandUpsertArgs<ExtArgs>>): Prisma__ItemDemandClient<$Result.GetResult<Prisma.$ItemDemandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ItemDemands that matches the filter.
     * @param {ItemDemandFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const itemDemand = await prisma.itemDemand.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ItemDemandFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ItemDemand.
     * @param {ItemDemandAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const itemDemand = await prisma.itemDemand.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ItemDemandAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ItemDemands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDemandCountArgs} args - Arguments to filter ItemDemands to count.
     * @example
     * // Count the number of ItemDemands
     * const count = await prisma.itemDemand.count({
     *   where: {
     *     // ... the filter for the ItemDemands we want to count
     *   }
     * })
    **/
    count<T extends ItemDemandCountArgs>(
      args?: Subset<T, ItemDemandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemDemandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemDemand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDemandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemDemandAggregateArgs>(args: Subset<T, ItemDemandAggregateArgs>): Prisma.PrismaPromise<GetItemDemandAggregateType<T>>

    /**
     * Group by ItemDemand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemDemandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemDemandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemDemandGroupByArgs['orderBy'] }
        : { orderBy?: ItemDemandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemDemandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemDemandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemDemand model
   */
  readonly fields: ItemDemandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemDemand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemDemandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemDemand model
   */
  interface ItemDemandFieldRefs {
    readonly id: FieldRef<"ItemDemand", 'String'>
    readonly internalId: FieldRef<"ItemDemand", 'Int'>
    readonly documentNumber: FieldRef<"ItemDemand", 'String'>
    readonly amount: FieldRef<"ItemDemand", 'Float'>
    readonly quantity: FieldRef<"ItemDemand", 'Float'>
    readonly item: FieldRef<"ItemDemand", 'String'>
    readonly itemCategory: FieldRef<"ItemDemand", 'String'>
    readonly date: FieldRef<"ItemDemand", 'DateTime'>
    readonly shippingState: FieldRef<"ItemDemand", 'String'>
    readonly shippingZip: FieldRef<"ItemDemand", 'String'>
    readonly shipVia: FieldRef<"ItemDemand", 'String'>
    readonly unit: FieldRef<"ItemDemand", 'String'>
    readonly model: FieldRef<"ItemDemand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemDemand findUnique
   */
  export type ItemDemandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDemand
     */
    select?: ItemDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDemand
     */
    omit?: ItemDemandOmit<ExtArgs> | null
    /**
     * Filter, which ItemDemand to fetch.
     */
    where: ItemDemandWhereUniqueInput
  }

  /**
   * ItemDemand findUniqueOrThrow
   */
  export type ItemDemandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDemand
     */
    select?: ItemDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDemand
     */
    omit?: ItemDemandOmit<ExtArgs> | null
    /**
     * Filter, which ItemDemand to fetch.
     */
    where: ItemDemandWhereUniqueInput
  }

  /**
   * ItemDemand findFirst
   */
  export type ItemDemandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDemand
     */
    select?: ItemDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDemand
     */
    omit?: ItemDemandOmit<ExtArgs> | null
    /**
     * Filter, which ItemDemand to fetch.
     */
    where?: ItemDemandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDemands to fetch.
     */
    orderBy?: ItemDemandOrderByWithRelationInput | ItemDemandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemDemands.
     */
    cursor?: ItemDemandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDemands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDemands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemDemands.
     */
    distinct?: ItemDemandScalarFieldEnum | ItemDemandScalarFieldEnum[]
  }

  /**
   * ItemDemand findFirstOrThrow
   */
  export type ItemDemandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDemand
     */
    select?: ItemDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDemand
     */
    omit?: ItemDemandOmit<ExtArgs> | null
    /**
     * Filter, which ItemDemand to fetch.
     */
    where?: ItemDemandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDemands to fetch.
     */
    orderBy?: ItemDemandOrderByWithRelationInput | ItemDemandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemDemands.
     */
    cursor?: ItemDemandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDemands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDemands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemDemands.
     */
    distinct?: ItemDemandScalarFieldEnum | ItemDemandScalarFieldEnum[]
  }

  /**
   * ItemDemand findMany
   */
  export type ItemDemandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDemand
     */
    select?: ItemDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDemand
     */
    omit?: ItemDemandOmit<ExtArgs> | null
    /**
     * Filter, which ItemDemands to fetch.
     */
    where?: ItemDemandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemDemands to fetch.
     */
    orderBy?: ItemDemandOrderByWithRelationInput | ItemDemandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemDemands.
     */
    cursor?: ItemDemandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemDemands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemDemands.
     */
    skip?: number
    distinct?: ItemDemandScalarFieldEnum | ItemDemandScalarFieldEnum[]
  }

  /**
   * ItemDemand create
   */
  export type ItemDemandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDemand
     */
    select?: ItemDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDemand
     */
    omit?: ItemDemandOmit<ExtArgs> | null
    /**
     * The data needed to create a ItemDemand.
     */
    data: XOR<ItemDemandCreateInput, ItemDemandUncheckedCreateInput>
  }

  /**
   * ItemDemand createMany
   */
  export type ItemDemandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemDemands.
     */
    data: ItemDemandCreateManyInput | ItemDemandCreateManyInput[]
  }

  /**
   * ItemDemand update
   */
  export type ItemDemandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDemand
     */
    select?: ItemDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDemand
     */
    omit?: ItemDemandOmit<ExtArgs> | null
    /**
     * The data needed to update a ItemDemand.
     */
    data: XOR<ItemDemandUpdateInput, ItemDemandUncheckedUpdateInput>
    /**
     * Choose, which ItemDemand to update.
     */
    where: ItemDemandWhereUniqueInput
  }

  /**
   * ItemDemand updateMany
   */
  export type ItemDemandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemDemands.
     */
    data: XOR<ItemDemandUpdateManyMutationInput, ItemDemandUncheckedUpdateManyInput>
    /**
     * Filter which ItemDemands to update
     */
    where?: ItemDemandWhereInput
    /**
     * Limit how many ItemDemands to update.
     */
    limit?: number
  }

  /**
   * ItemDemand upsert
   */
  export type ItemDemandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDemand
     */
    select?: ItemDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDemand
     */
    omit?: ItemDemandOmit<ExtArgs> | null
    /**
     * The filter to search for the ItemDemand to update in case it exists.
     */
    where: ItemDemandWhereUniqueInput
    /**
     * In case the ItemDemand found by the `where` argument doesn't exist, create a new ItemDemand with this data.
     */
    create: XOR<ItemDemandCreateInput, ItemDemandUncheckedCreateInput>
    /**
     * In case the ItemDemand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemDemandUpdateInput, ItemDemandUncheckedUpdateInput>
  }

  /**
   * ItemDemand delete
   */
  export type ItemDemandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDemand
     */
    select?: ItemDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDemand
     */
    omit?: ItemDemandOmit<ExtArgs> | null
    /**
     * Filter which ItemDemand to delete.
     */
    where: ItemDemandWhereUniqueInput
  }

  /**
   * ItemDemand deleteMany
   */
  export type ItemDemandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemDemands to delete
     */
    where?: ItemDemandWhereInput
    /**
     * Limit how many ItemDemands to delete.
     */
    limit?: number
  }

  /**
   * ItemDemand findRaw
   */
  export type ItemDemandFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ItemDemand aggregateRaw
   */
  export type ItemDemandAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ItemDemand without action
   */
  export type ItemDemandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemDemand
     */
    select?: ItemDemandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemDemand
     */
    omit?: ItemDemandOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ItemDemandScalarFieldEnum: {
    id: 'id',
    internalId: 'internalId',
    documentNumber: 'documentNumber',
    amount: 'amount',
    quantity: 'quantity',
    item: 'item',
    itemCategory: 'itemCategory',
    date: 'date',
    shippingState: 'shippingState',
    shippingZip: 'shippingZip',
    shipVia: 'shipVia',
    unit: 'unit',
    model: 'model'
  };

  export type ItemDemandScalarFieldEnum = (typeof ItemDemandScalarFieldEnum)[keyof typeof ItemDemandScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type ItemDemandWhereInput = {
    AND?: ItemDemandWhereInput | ItemDemandWhereInput[]
    OR?: ItemDemandWhereInput[]
    NOT?: ItemDemandWhereInput | ItemDemandWhereInput[]
    id?: StringFilter<"ItemDemand"> | string
    internalId?: IntFilter<"ItemDemand"> | number
    documentNumber?: StringFilter<"ItemDemand"> | string
    amount?: FloatFilter<"ItemDemand"> | number
    quantity?: FloatFilter<"ItemDemand"> | number
    item?: StringFilter<"ItemDemand"> | string
    itemCategory?: StringFilter<"ItemDemand"> | string
    date?: DateTimeFilter<"ItemDemand"> | Date | string
    shippingState?: StringFilter<"ItemDemand"> | string
    shippingZip?: StringFilter<"ItemDemand"> | string
    shipVia?: StringFilter<"ItemDemand"> | string
    unit?: StringFilter<"ItemDemand"> | string
    model?: StringFilter<"ItemDemand"> | string
  }

  export type ItemDemandOrderByWithRelationInput = {
    id?: SortOrder
    internalId?: SortOrder
    documentNumber?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    item?: SortOrder
    itemCategory?: SortOrder
    date?: SortOrder
    shippingState?: SortOrder
    shippingZip?: SortOrder
    shipVia?: SortOrder
    unit?: SortOrder
    model?: SortOrder
  }

  export type ItemDemandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemDemandWhereInput | ItemDemandWhereInput[]
    OR?: ItemDemandWhereInput[]
    NOT?: ItemDemandWhereInput | ItemDemandWhereInput[]
    internalId?: IntFilter<"ItemDemand"> | number
    documentNumber?: StringFilter<"ItemDemand"> | string
    amount?: FloatFilter<"ItemDemand"> | number
    quantity?: FloatFilter<"ItemDemand"> | number
    item?: StringFilter<"ItemDemand"> | string
    itemCategory?: StringFilter<"ItemDemand"> | string
    date?: DateTimeFilter<"ItemDemand"> | Date | string
    shippingState?: StringFilter<"ItemDemand"> | string
    shippingZip?: StringFilter<"ItemDemand"> | string
    shipVia?: StringFilter<"ItemDemand"> | string
    unit?: StringFilter<"ItemDemand"> | string
    model?: StringFilter<"ItemDemand"> | string
  }, "id">

  export type ItemDemandOrderByWithAggregationInput = {
    id?: SortOrder
    internalId?: SortOrder
    documentNumber?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    item?: SortOrder
    itemCategory?: SortOrder
    date?: SortOrder
    shippingState?: SortOrder
    shippingZip?: SortOrder
    shipVia?: SortOrder
    unit?: SortOrder
    model?: SortOrder
    _count?: ItemDemandCountOrderByAggregateInput
    _avg?: ItemDemandAvgOrderByAggregateInput
    _max?: ItemDemandMaxOrderByAggregateInput
    _min?: ItemDemandMinOrderByAggregateInput
    _sum?: ItemDemandSumOrderByAggregateInput
  }

  export type ItemDemandScalarWhereWithAggregatesInput = {
    AND?: ItemDemandScalarWhereWithAggregatesInput | ItemDemandScalarWhereWithAggregatesInput[]
    OR?: ItemDemandScalarWhereWithAggregatesInput[]
    NOT?: ItemDemandScalarWhereWithAggregatesInput | ItemDemandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ItemDemand"> | string
    internalId?: IntWithAggregatesFilter<"ItemDemand"> | number
    documentNumber?: StringWithAggregatesFilter<"ItemDemand"> | string
    amount?: FloatWithAggregatesFilter<"ItemDemand"> | number
    quantity?: FloatWithAggregatesFilter<"ItemDemand"> | number
    item?: StringWithAggregatesFilter<"ItemDemand"> | string
    itemCategory?: StringWithAggregatesFilter<"ItemDemand"> | string
    date?: DateTimeWithAggregatesFilter<"ItemDemand"> | Date | string
    shippingState?: StringWithAggregatesFilter<"ItemDemand"> | string
    shippingZip?: StringWithAggregatesFilter<"ItemDemand"> | string
    shipVia?: StringWithAggregatesFilter<"ItemDemand"> | string
    unit?: StringWithAggregatesFilter<"ItemDemand"> | string
    model?: StringWithAggregatesFilter<"ItemDemand"> | string
  }

  export type ItemDemandCreateInput = {
    id?: string
    internalId: number
    documentNumber: string
    amount: number
    quantity: number
    item: string
    itemCategory: string
    date: Date | string
    shippingState: string
    shippingZip: string
    shipVia: string
    unit: string
    model: string
  }

  export type ItemDemandUncheckedCreateInput = {
    id?: string
    internalId: number
    documentNumber: string
    amount: number
    quantity: number
    item: string
    itemCategory: string
    date: Date | string
    shippingState: string
    shippingZip: string
    shipVia: string
    unit: string
    model: string
  }

  export type ItemDemandUpdateInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    itemCategory?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingState?: StringFieldUpdateOperationsInput | string
    shippingZip?: StringFieldUpdateOperationsInput | string
    shipVia?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
  }

  export type ItemDemandUncheckedUpdateInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    itemCategory?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingState?: StringFieldUpdateOperationsInput | string
    shippingZip?: StringFieldUpdateOperationsInput | string
    shipVia?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
  }

  export type ItemDemandCreateManyInput = {
    id?: string
    internalId: number
    documentNumber: string
    amount: number
    quantity: number
    item: string
    itemCategory: string
    date: Date | string
    shippingState: string
    shippingZip: string
    shipVia: string
    unit: string
    model: string
  }

  export type ItemDemandUpdateManyMutationInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    itemCategory?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingState?: StringFieldUpdateOperationsInput | string
    shippingZip?: StringFieldUpdateOperationsInput | string
    shipVia?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
  }

  export type ItemDemandUncheckedUpdateManyInput = {
    internalId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
    item?: StringFieldUpdateOperationsInput | string
    itemCategory?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    shippingState?: StringFieldUpdateOperationsInput | string
    shippingZip?: StringFieldUpdateOperationsInput | string
    shipVia?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ItemDemandCountOrderByAggregateInput = {
    id?: SortOrder
    internalId?: SortOrder
    documentNumber?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    item?: SortOrder
    itemCategory?: SortOrder
    date?: SortOrder
    shippingState?: SortOrder
    shippingZip?: SortOrder
    shipVia?: SortOrder
    unit?: SortOrder
    model?: SortOrder
  }

  export type ItemDemandAvgOrderByAggregateInput = {
    internalId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
  }

  export type ItemDemandMaxOrderByAggregateInput = {
    id?: SortOrder
    internalId?: SortOrder
    documentNumber?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    item?: SortOrder
    itemCategory?: SortOrder
    date?: SortOrder
    shippingState?: SortOrder
    shippingZip?: SortOrder
    shipVia?: SortOrder
    unit?: SortOrder
    model?: SortOrder
  }

  export type ItemDemandMinOrderByAggregateInput = {
    id?: SortOrder
    internalId?: SortOrder
    documentNumber?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
    item?: SortOrder
    itemCategory?: SortOrder
    date?: SortOrder
    shippingState?: SortOrder
    shippingZip?: SortOrder
    shipVia?: SortOrder
    unit?: SortOrder
    model?: SortOrder
  }

  export type ItemDemandSumOrderByAggregateInput = {
    internalId?: SortOrder
    amount?: SortOrder
    quantity?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}