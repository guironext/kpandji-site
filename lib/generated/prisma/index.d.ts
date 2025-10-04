
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FactureProforma
 * 
 */
export type FactureProforma = $Result.DefaultSelection<Prisma.$FactureProformaPayload>
/**
 * Model OffreSpeciale
 * 
 */
export type OffreSpeciale = $Result.DefaultSelection<Prisma.$OffreSpecialePayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Reservations
 * 
 */
export type Reservations = $Result.DefaultSelection<Prisma.$ReservationsPayload>
/**
 * Model CommandesAccessoires
 * 
 */
export type CommandesAccessoires = $Result.DefaultSelection<Prisma.$CommandesAccessoiresPayload>
/**
 * Model OffreExceptionelle
 * 
 */
export type OffreExceptionelle = $Result.DefaultSelection<Prisma.$OffreExceptionellePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  COMMERCIAL: 'COMMERCIAL',
  CHEFUSINE: 'CHEFUSINE',
  CHEFEQUIPE: 'CHEFEQUIPE',
  MAGASINIER: 'MAGASINIER',
  RH: 'RH',
  COMPTABLE: 'COMPTABLE',
  CHEFQUALITE: 'CHEFQUALITE',
  EMPLOYEE: 'EMPLOYEE'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factureProforma`: Exposes CRUD operations for the **FactureProforma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FactureProformas
    * const factureProformas = await prisma.factureProforma.findMany()
    * ```
    */
  get factureProforma(): Prisma.FactureProformaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offreSpeciale`: Exposes CRUD operations for the **OffreSpeciale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OffreSpeciales
    * const offreSpeciales = await prisma.offreSpeciale.findMany()
    * ```
    */
  get offreSpeciale(): Prisma.OffreSpecialeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservations`: Exposes CRUD operations for the **Reservations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservations.findMany()
    * ```
    */
  get reservations(): Prisma.ReservationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commandesAccessoires`: Exposes CRUD operations for the **CommandesAccessoires** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommandesAccessoires
    * const commandesAccessoires = await prisma.commandesAccessoires.findMany()
    * ```
    */
  get commandesAccessoires(): Prisma.CommandesAccessoiresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offreExceptionelle`: Exposes CRUD operations for the **OffreExceptionelle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OffreExceptionelles
    * const offreExceptionelles = await prisma.offreExceptionelle.findMany()
    * ```
    */
  get offreExceptionelle(): Prisma.OffreExceptionelleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    User: 'User',
    FactureProforma: 'FactureProforma',
    OffreSpeciale: 'OffreSpeciale',
    Contact: 'Contact',
    Reservations: 'Reservations',
    CommandesAccessoires: 'CommandesAccessoires',
    OffreExceptionelle: 'OffreExceptionelle'
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
      modelProps: "user" | "factureProforma" | "offreSpeciale" | "contact" | "reservations" | "commandesAccessoires" | "offreExceptionelle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FactureProforma: {
        payload: Prisma.$FactureProformaPayload<ExtArgs>
        fields: Prisma.FactureProformaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FactureProformaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureProformaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FactureProformaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureProformaPayload>
          }
          findFirst: {
            args: Prisma.FactureProformaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureProformaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FactureProformaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureProformaPayload>
          }
          findMany: {
            args: Prisma.FactureProformaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureProformaPayload>[]
          }
          create: {
            args: Prisma.FactureProformaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureProformaPayload>
          }
          createMany: {
            args: Prisma.FactureProformaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FactureProformaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureProformaPayload>[]
          }
          delete: {
            args: Prisma.FactureProformaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureProformaPayload>
          }
          update: {
            args: Prisma.FactureProformaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureProformaPayload>
          }
          deleteMany: {
            args: Prisma.FactureProformaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FactureProformaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FactureProformaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureProformaPayload>[]
          }
          upsert: {
            args: Prisma.FactureProformaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactureProformaPayload>
          }
          aggregate: {
            args: Prisma.FactureProformaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactureProforma>
          }
          groupBy: {
            args: Prisma.FactureProformaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactureProformaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FactureProformaCountArgs<ExtArgs>
            result: $Utils.Optional<FactureProformaCountAggregateOutputType> | number
          }
        }
      }
      OffreSpeciale: {
        payload: Prisma.$OffreSpecialePayload<ExtArgs>
        fields: Prisma.OffreSpecialeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OffreSpecialeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreSpecialePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OffreSpecialeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreSpecialePayload>
          }
          findFirst: {
            args: Prisma.OffreSpecialeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreSpecialePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OffreSpecialeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreSpecialePayload>
          }
          findMany: {
            args: Prisma.OffreSpecialeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreSpecialePayload>[]
          }
          create: {
            args: Prisma.OffreSpecialeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreSpecialePayload>
          }
          createMany: {
            args: Prisma.OffreSpecialeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OffreSpecialeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreSpecialePayload>[]
          }
          delete: {
            args: Prisma.OffreSpecialeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreSpecialePayload>
          }
          update: {
            args: Prisma.OffreSpecialeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreSpecialePayload>
          }
          deleteMany: {
            args: Prisma.OffreSpecialeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OffreSpecialeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OffreSpecialeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreSpecialePayload>[]
          }
          upsert: {
            args: Prisma.OffreSpecialeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreSpecialePayload>
          }
          aggregate: {
            args: Prisma.OffreSpecialeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffreSpeciale>
          }
          groupBy: {
            args: Prisma.OffreSpecialeGroupByArgs<ExtArgs>
            result: $Utils.Optional<OffreSpecialeGroupByOutputType>[]
          }
          count: {
            args: Prisma.OffreSpecialeCountArgs<ExtArgs>
            result: $Utils.Optional<OffreSpecialeCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Reservations: {
        payload: Prisma.$ReservationsPayload<ExtArgs>
        fields: Prisma.ReservationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          findFirst: {
            args: Prisma.ReservationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          findMany: {
            args: Prisma.ReservationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>[]
          }
          create: {
            args: Prisma.ReservationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          createMany: {
            args: Prisma.ReservationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>[]
          }
          delete: {
            args: Prisma.ReservationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          update: {
            args: Prisma.ReservationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          deleteMany: {
            args: Prisma.ReservationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>[]
          }
          upsert: {
            args: Prisma.ReservationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationsPayload>
          }
          aggregate: {
            args: Prisma.ReservationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservations>
          }
          groupBy: {
            args: Prisma.ReservationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationsCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationsCountAggregateOutputType> | number
          }
        }
      }
      CommandesAccessoires: {
        payload: Prisma.$CommandesAccessoiresPayload<ExtArgs>
        fields: Prisma.CommandesAccessoiresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandesAccessoiresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandesAccessoiresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandesAccessoiresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandesAccessoiresPayload>
          }
          findFirst: {
            args: Prisma.CommandesAccessoiresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandesAccessoiresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandesAccessoiresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandesAccessoiresPayload>
          }
          findMany: {
            args: Prisma.CommandesAccessoiresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandesAccessoiresPayload>[]
          }
          create: {
            args: Prisma.CommandesAccessoiresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandesAccessoiresPayload>
          }
          createMany: {
            args: Prisma.CommandesAccessoiresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommandesAccessoiresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandesAccessoiresPayload>[]
          }
          delete: {
            args: Prisma.CommandesAccessoiresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandesAccessoiresPayload>
          }
          update: {
            args: Prisma.CommandesAccessoiresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandesAccessoiresPayload>
          }
          deleteMany: {
            args: Prisma.CommandesAccessoiresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommandesAccessoiresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommandesAccessoiresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandesAccessoiresPayload>[]
          }
          upsert: {
            args: Prisma.CommandesAccessoiresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandesAccessoiresPayload>
          }
          aggregate: {
            args: Prisma.CommandesAccessoiresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommandesAccessoires>
          }
          groupBy: {
            args: Prisma.CommandesAccessoiresGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandesAccessoiresGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandesAccessoiresCountArgs<ExtArgs>
            result: $Utils.Optional<CommandesAccessoiresCountAggregateOutputType> | number
          }
        }
      }
      OffreExceptionelle: {
        payload: Prisma.$OffreExceptionellePayload<ExtArgs>
        fields: Prisma.OffreExceptionelleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OffreExceptionelleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreExceptionellePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OffreExceptionelleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreExceptionellePayload>
          }
          findFirst: {
            args: Prisma.OffreExceptionelleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreExceptionellePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OffreExceptionelleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreExceptionellePayload>
          }
          findMany: {
            args: Prisma.OffreExceptionelleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreExceptionellePayload>[]
          }
          create: {
            args: Prisma.OffreExceptionelleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreExceptionellePayload>
          }
          createMany: {
            args: Prisma.OffreExceptionelleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OffreExceptionelleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreExceptionellePayload>[]
          }
          delete: {
            args: Prisma.OffreExceptionelleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreExceptionellePayload>
          }
          update: {
            args: Prisma.OffreExceptionelleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreExceptionellePayload>
          }
          deleteMany: {
            args: Prisma.OffreExceptionelleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OffreExceptionelleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OffreExceptionelleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreExceptionellePayload>[]
          }
          upsert: {
            args: Prisma.OffreExceptionelleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OffreExceptionellePayload>
          }
          aggregate: {
            args: Prisma.OffreExceptionelleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffreExceptionelle>
          }
          groupBy: {
            args: Prisma.OffreExceptionelleGroupByArgs<ExtArgs>
            result: $Utils.Optional<OffreExceptionelleGroupByOutputType>[]
          }
          count: {
            args: Prisma.OffreExceptionelleCountArgs<ExtArgs>
            result: $Utils.Optional<OffreExceptionelleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    factureProforma?: FactureProformaOmit
    offreSpeciale?: OffreSpecialeOmit
    contact?: ContactOmit
    reservations?: ReservationsOmit
    commandesAccessoires?: CommandesAccessoiresOmit
    offreExceptionelle?: OffreExceptionelleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    firstName: number
    lastName: number
    role: number
    department: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
    department?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstName?: true
    lastName?: true
    role?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    department: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "firstName" | "lastName" | "role" | "department" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      firstName: string
      lastName: string
      role: $Enums.UserRole
      department: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly department: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model FactureProforma
   */

  export type AggregateFactureProforma = {
    _count: FactureProformaCountAggregateOutputType | null
    _min: FactureProformaMinAggregateOutputType | null
    _max: FactureProformaMaxAggregateOutputType | null
  }

  export type FactureProformaMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    carName: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: string | null
  }

  export type FactureProformaMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    carName: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: string | null
  }

  export type FactureProformaCountAggregateOutputType = {
    id: number
    createdAt: number
    carName: number
    name: number
    email: number
    phone: number
    message: number
    status: number
    _all: number
  }


  export type FactureProformaMinAggregateInputType = {
    id?: true
    createdAt?: true
    carName?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
  }

  export type FactureProformaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    carName?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
  }

  export type FactureProformaCountAggregateInputType = {
    id?: true
    createdAt?: true
    carName?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    _all?: true
  }

  export type FactureProformaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FactureProforma to aggregate.
     */
    where?: FactureProformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactureProformas to fetch.
     */
    orderBy?: FactureProformaOrderByWithRelationInput | FactureProformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FactureProformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactureProformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactureProformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FactureProformas
    **/
    _count?: true | FactureProformaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactureProformaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactureProformaMaxAggregateInputType
  }

  export type GetFactureProformaAggregateType<T extends FactureProformaAggregateArgs> = {
        [P in keyof T & keyof AggregateFactureProforma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactureProforma[P]>
      : GetScalarType<T[P], AggregateFactureProforma[P]>
  }




  export type FactureProformaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactureProformaWhereInput
    orderBy?: FactureProformaOrderByWithAggregationInput | FactureProformaOrderByWithAggregationInput[]
    by: FactureProformaScalarFieldEnum[] | FactureProformaScalarFieldEnum
    having?: FactureProformaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactureProformaCountAggregateInputType | true
    _min?: FactureProformaMinAggregateInputType
    _max?: FactureProformaMaxAggregateInputType
  }

  export type FactureProformaGroupByOutputType = {
    id: string
    createdAt: Date
    carName: string
    name: string
    email: string
    phone: string
    message: string
    status: string
    _count: FactureProformaCountAggregateOutputType | null
    _min: FactureProformaMinAggregateOutputType | null
    _max: FactureProformaMaxAggregateOutputType | null
  }

  type GetFactureProformaGroupByPayload<T extends FactureProformaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactureProformaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactureProformaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactureProformaGroupByOutputType[P]>
            : GetScalarType<T[P], FactureProformaGroupByOutputType[P]>
        }
      >
    >


  export type FactureProformaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    carName?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["factureProforma"]>

  export type FactureProformaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    carName?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["factureProforma"]>

  export type FactureProformaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    carName?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["factureProforma"]>

  export type FactureProformaSelectScalar = {
    id?: boolean
    createdAt?: boolean
    carName?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }

  export type FactureProformaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "carName" | "name" | "email" | "phone" | "message" | "status", ExtArgs["result"]["factureProforma"]>

  export type $FactureProformaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FactureProforma"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      carName: string
      name: string
      email: string
      phone: string
      message: string
      status: string
    }, ExtArgs["result"]["factureProforma"]>
    composites: {}
  }

  type FactureProformaGetPayload<S extends boolean | null | undefined | FactureProformaDefaultArgs> = $Result.GetResult<Prisma.$FactureProformaPayload, S>

  type FactureProformaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FactureProformaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FactureProformaCountAggregateInputType | true
    }

  export interface FactureProformaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FactureProforma'], meta: { name: 'FactureProforma' } }
    /**
     * Find zero or one FactureProforma that matches the filter.
     * @param {FactureProformaFindUniqueArgs} args - Arguments to find a FactureProforma
     * @example
     * // Get one FactureProforma
     * const factureProforma = await prisma.factureProforma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FactureProformaFindUniqueArgs>(args: SelectSubset<T, FactureProformaFindUniqueArgs<ExtArgs>>): Prisma__FactureProformaClient<$Result.GetResult<Prisma.$FactureProformaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FactureProforma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FactureProformaFindUniqueOrThrowArgs} args - Arguments to find a FactureProforma
     * @example
     * // Get one FactureProforma
     * const factureProforma = await prisma.factureProforma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FactureProformaFindUniqueOrThrowArgs>(args: SelectSubset<T, FactureProformaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FactureProformaClient<$Result.GetResult<Prisma.$FactureProformaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FactureProforma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureProformaFindFirstArgs} args - Arguments to find a FactureProforma
     * @example
     * // Get one FactureProforma
     * const factureProforma = await prisma.factureProforma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FactureProformaFindFirstArgs>(args?: SelectSubset<T, FactureProformaFindFirstArgs<ExtArgs>>): Prisma__FactureProformaClient<$Result.GetResult<Prisma.$FactureProformaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FactureProforma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureProformaFindFirstOrThrowArgs} args - Arguments to find a FactureProforma
     * @example
     * // Get one FactureProforma
     * const factureProforma = await prisma.factureProforma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FactureProformaFindFirstOrThrowArgs>(args?: SelectSubset<T, FactureProformaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FactureProformaClient<$Result.GetResult<Prisma.$FactureProformaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FactureProformas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureProformaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FactureProformas
     * const factureProformas = await prisma.factureProforma.findMany()
     * 
     * // Get first 10 FactureProformas
     * const factureProformas = await prisma.factureProforma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factureProformaWithIdOnly = await prisma.factureProforma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FactureProformaFindManyArgs>(args?: SelectSubset<T, FactureProformaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactureProformaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FactureProforma.
     * @param {FactureProformaCreateArgs} args - Arguments to create a FactureProforma.
     * @example
     * // Create one FactureProforma
     * const FactureProforma = await prisma.factureProforma.create({
     *   data: {
     *     // ... data to create a FactureProforma
     *   }
     * })
     * 
     */
    create<T extends FactureProformaCreateArgs>(args: SelectSubset<T, FactureProformaCreateArgs<ExtArgs>>): Prisma__FactureProformaClient<$Result.GetResult<Prisma.$FactureProformaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FactureProformas.
     * @param {FactureProformaCreateManyArgs} args - Arguments to create many FactureProformas.
     * @example
     * // Create many FactureProformas
     * const factureProforma = await prisma.factureProforma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FactureProformaCreateManyArgs>(args?: SelectSubset<T, FactureProformaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FactureProformas and returns the data saved in the database.
     * @param {FactureProformaCreateManyAndReturnArgs} args - Arguments to create many FactureProformas.
     * @example
     * // Create many FactureProformas
     * const factureProforma = await prisma.factureProforma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FactureProformas and only return the `id`
     * const factureProformaWithIdOnly = await prisma.factureProforma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FactureProformaCreateManyAndReturnArgs>(args?: SelectSubset<T, FactureProformaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactureProformaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FactureProforma.
     * @param {FactureProformaDeleteArgs} args - Arguments to delete one FactureProforma.
     * @example
     * // Delete one FactureProforma
     * const FactureProforma = await prisma.factureProforma.delete({
     *   where: {
     *     // ... filter to delete one FactureProforma
     *   }
     * })
     * 
     */
    delete<T extends FactureProformaDeleteArgs>(args: SelectSubset<T, FactureProformaDeleteArgs<ExtArgs>>): Prisma__FactureProformaClient<$Result.GetResult<Prisma.$FactureProformaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FactureProforma.
     * @param {FactureProformaUpdateArgs} args - Arguments to update one FactureProforma.
     * @example
     * // Update one FactureProforma
     * const factureProforma = await prisma.factureProforma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FactureProformaUpdateArgs>(args: SelectSubset<T, FactureProformaUpdateArgs<ExtArgs>>): Prisma__FactureProformaClient<$Result.GetResult<Prisma.$FactureProformaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FactureProformas.
     * @param {FactureProformaDeleteManyArgs} args - Arguments to filter FactureProformas to delete.
     * @example
     * // Delete a few FactureProformas
     * const { count } = await prisma.factureProforma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FactureProformaDeleteManyArgs>(args?: SelectSubset<T, FactureProformaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FactureProformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureProformaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FactureProformas
     * const factureProforma = await prisma.factureProforma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FactureProformaUpdateManyArgs>(args: SelectSubset<T, FactureProformaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FactureProformas and returns the data updated in the database.
     * @param {FactureProformaUpdateManyAndReturnArgs} args - Arguments to update many FactureProformas.
     * @example
     * // Update many FactureProformas
     * const factureProforma = await prisma.factureProforma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FactureProformas and only return the `id`
     * const factureProformaWithIdOnly = await prisma.factureProforma.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FactureProformaUpdateManyAndReturnArgs>(args: SelectSubset<T, FactureProformaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactureProformaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FactureProforma.
     * @param {FactureProformaUpsertArgs} args - Arguments to update or create a FactureProforma.
     * @example
     * // Update or create a FactureProforma
     * const factureProforma = await prisma.factureProforma.upsert({
     *   create: {
     *     // ... data to create a FactureProforma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FactureProforma we want to update
     *   }
     * })
     */
    upsert<T extends FactureProformaUpsertArgs>(args: SelectSubset<T, FactureProformaUpsertArgs<ExtArgs>>): Prisma__FactureProformaClient<$Result.GetResult<Prisma.$FactureProformaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FactureProformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureProformaCountArgs} args - Arguments to filter FactureProformas to count.
     * @example
     * // Count the number of FactureProformas
     * const count = await prisma.factureProforma.count({
     *   where: {
     *     // ... the filter for the FactureProformas we want to count
     *   }
     * })
    **/
    count<T extends FactureProformaCountArgs>(
      args?: Subset<T, FactureProformaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactureProformaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FactureProforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureProformaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FactureProformaAggregateArgs>(args: Subset<T, FactureProformaAggregateArgs>): Prisma.PrismaPromise<GetFactureProformaAggregateType<T>>

    /**
     * Group by FactureProforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureProformaGroupByArgs} args - Group by arguments.
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
      T extends FactureProformaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FactureProformaGroupByArgs['orderBy'] }
        : { orderBy?: FactureProformaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FactureProformaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactureProformaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FactureProforma model
   */
  readonly fields: FactureProformaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FactureProforma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FactureProformaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FactureProforma model
   */
  interface FactureProformaFieldRefs {
    readonly id: FieldRef<"FactureProforma", 'String'>
    readonly createdAt: FieldRef<"FactureProforma", 'DateTime'>
    readonly carName: FieldRef<"FactureProforma", 'String'>
    readonly name: FieldRef<"FactureProforma", 'String'>
    readonly email: FieldRef<"FactureProforma", 'String'>
    readonly phone: FieldRef<"FactureProforma", 'String'>
    readonly message: FieldRef<"FactureProforma", 'String'>
    readonly status: FieldRef<"FactureProforma", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FactureProforma findUnique
   */
  export type FactureProformaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
    /**
     * Filter, which FactureProforma to fetch.
     */
    where: FactureProformaWhereUniqueInput
  }

  /**
   * FactureProforma findUniqueOrThrow
   */
  export type FactureProformaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
    /**
     * Filter, which FactureProforma to fetch.
     */
    where: FactureProformaWhereUniqueInput
  }

  /**
   * FactureProforma findFirst
   */
  export type FactureProformaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
    /**
     * Filter, which FactureProforma to fetch.
     */
    where?: FactureProformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactureProformas to fetch.
     */
    orderBy?: FactureProformaOrderByWithRelationInput | FactureProformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FactureProformas.
     */
    cursor?: FactureProformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactureProformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactureProformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FactureProformas.
     */
    distinct?: FactureProformaScalarFieldEnum | FactureProformaScalarFieldEnum[]
  }

  /**
   * FactureProforma findFirstOrThrow
   */
  export type FactureProformaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
    /**
     * Filter, which FactureProforma to fetch.
     */
    where?: FactureProformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactureProformas to fetch.
     */
    orderBy?: FactureProformaOrderByWithRelationInput | FactureProformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FactureProformas.
     */
    cursor?: FactureProformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactureProformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactureProformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FactureProformas.
     */
    distinct?: FactureProformaScalarFieldEnum | FactureProformaScalarFieldEnum[]
  }

  /**
   * FactureProforma findMany
   */
  export type FactureProformaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
    /**
     * Filter, which FactureProformas to fetch.
     */
    where?: FactureProformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FactureProformas to fetch.
     */
    orderBy?: FactureProformaOrderByWithRelationInput | FactureProformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FactureProformas.
     */
    cursor?: FactureProformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FactureProformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FactureProformas.
     */
    skip?: number
    distinct?: FactureProformaScalarFieldEnum | FactureProformaScalarFieldEnum[]
  }

  /**
   * FactureProforma create
   */
  export type FactureProformaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
    /**
     * The data needed to create a FactureProforma.
     */
    data: XOR<FactureProformaCreateInput, FactureProformaUncheckedCreateInput>
  }

  /**
   * FactureProforma createMany
   */
  export type FactureProformaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FactureProformas.
     */
    data: FactureProformaCreateManyInput | FactureProformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FactureProforma createManyAndReturn
   */
  export type FactureProformaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
    /**
     * The data used to create many FactureProformas.
     */
    data: FactureProformaCreateManyInput | FactureProformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FactureProforma update
   */
  export type FactureProformaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
    /**
     * The data needed to update a FactureProforma.
     */
    data: XOR<FactureProformaUpdateInput, FactureProformaUncheckedUpdateInput>
    /**
     * Choose, which FactureProforma to update.
     */
    where: FactureProformaWhereUniqueInput
  }

  /**
   * FactureProforma updateMany
   */
  export type FactureProformaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FactureProformas.
     */
    data: XOR<FactureProformaUpdateManyMutationInput, FactureProformaUncheckedUpdateManyInput>
    /**
     * Filter which FactureProformas to update
     */
    where?: FactureProformaWhereInput
    /**
     * Limit how many FactureProformas to update.
     */
    limit?: number
  }

  /**
   * FactureProforma updateManyAndReturn
   */
  export type FactureProformaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
    /**
     * The data used to update FactureProformas.
     */
    data: XOR<FactureProformaUpdateManyMutationInput, FactureProformaUncheckedUpdateManyInput>
    /**
     * Filter which FactureProformas to update
     */
    where?: FactureProformaWhereInput
    /**
     * Limit how many FactureProformas to update.
     */
    limit?: number
  }

  /**
   * FactureProforma upsert
   */
  export type FactureProformaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
    /**
     * The filter to search for the FactureProforma to update in case it exists.
     */
    where: FactureProformaWhereUniqueInput
    /**
     * In case the FactureProforma found by the `where` argument doesn't exist, create a new FactureProforma with this data.
     */
    create: XOR<FactureProformaCreateInput, FactureProformaUncheckedCreateInput>
    /**
     * In case the FactureProforma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FactureProformaUpdateInput, FactureProformaUncheckedUpdateInput>
  }

  /**
   * FactureProforma delete
   */
  export type FactureProformaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
    /**
     * Filter which FactureProforma to delete.
     */
    where: FactureProformaWhereUniqueInput
  }

  /**
   * FactureProforma deleteMany
   */
  export type FactureProformaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FactureProformas to delete
     */
    where?: FactureProformaWhereInput
    /**
     * Limit how many FactureProformas to delete.
     */
    limit?: number
  }

  /**
   * FactureProforma without action
   */
  export type FactureProformaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureProforma
     */
    select?: FactureProformaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FactureProforma
     */
    omit?: FactureProformaOmit<ExtArgs> | null
  }


  /**
   * Model OffreSpeciale
   */

  export type AggregateOffreSpeciale = {
    _count: OffreSpecialeCountAggregateOutputType | null
    _min: OffreSpecialeMinAggregateOutputType | null
    _max: OffreSpecialeMaxAggregateOutputType | null
  }

  export type OffreSpecialeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: string | null
  }

  export type OffreSpecialeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: string | null
  }

  export type OffreSpecialeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    email: number
    phone: number
    message: number
    status: number
    _all: number
  }


  export type OffreSpecialeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
  }

  export type OffreSpecialeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
  }

  export type OffreSpecialeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    _all?: true
  }

  export type OffreSpecialeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OffreSpeciale to aggregate.
     */
    where?: OffreSpecialeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffreSpeciales to fetch.
     */
    orderBy?: OffreSpecialeOrderByWithRelationInput | OffreSpecialeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OffreSpecialeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffreSpeciales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffreSpeciales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OffreSpeciales
    **/
    _count?: true | OffreSpecialeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OffreSpecialeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OffreSpecialeMaxAggregateInputType
  }

  export type GetOffreSpecialeAggregateType<T extends OffreSpecialeAggregateArgs> = {
        [P in keyof T & keyof AggregateOffreSpeciale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffreSpeciale[P]>
      : GetScalarType<T[P], AggregateOffreSpeciale[P]>
  }




  export type OffreSpecialeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OffreSpecialeWhereInput
    orderBy?: OffreSpecialeOrderByWithAggregationInput | OffreSpecialeOrderByWithAggregationInput[]
    by: OffreSpecialeScalarFieldEnum[] | OffreSpecialeScalarFieldEnum
    having?: OffreSpecialeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OffreSpecialeCountAggregateInputType | true
    _min?: OffreSpecialeMinAggregateInputType
    _max?: OffreSpecialeMaxAggregateInputType
  }

  export type OffreSpecialeGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    email: string
    phone: string
    message: string
    status: string
    _count: OffreSpecialeCountAggregateOutputType | null
    _min: OffreSpecialeMinAggregateOutputType | null
    _max: OffreSpecialeMaxAggregateOutputType | null
  }

  type GetOffreSpecialeGroupByPayload<T extends OffreSpecialeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OffreSpecialeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OffreSpecialeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OffreSpecialeGroupByOutputType[P]>
            : GetScalarType<T[P], OffreSpecialeGroupByOutputType[P]>
        }
      >
    >


  export type OffreSpecialeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["offreSpeciale"]>

  export type OffreSpecialeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["offreSpeciale"]>

  export type OffreSpecialeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["offreSpeciale"]>

  export type OffreSpecialeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }

  export type OffreSpecialeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "email" | "phone" | "message" | "status", ExtArgs["result"]["offreSpeciale"]>

  export type $OffreSpecialePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OffreSpeciale"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      email: string
      phone: string
      message: string
      status: string
    }, ExtArgs["result"]["offreSpeciale"]>
    composites: {}
  }

  type OffreSpecialeGetPayload<S extends boolean | null | undefined | OffreSpecialeDefaultArgs> = $Result.GetResult<Prisma.$OffreSpecialePayload, S>

  type OffreSpecialeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OffreSpecialeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OffreSpecialeCountAggregateInputType | true
    }

  export interface OffreSpecialeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OffreSpeciale'], meta: { name: 'OffreSpeciale' } }
    /**
     * Find zero or one OffreSpeciale that matches the filter.
     * @param {OffreSpecialeFindUniqueArgs} args - Arguments to find a OffreSpeciale
     * @example
     * // Get one OffreSpeciale
     * const offreSpeciale = await prisma.offreSpeciale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OffreSpecialeFindUniqueArgs>(args: SelectSubset<T, OffreSpecialeFindUniqueArgs<ExtArgs>>): Prisma__OffreSpecialeClient<$Result.GetResult<Prisma.$OffreSpecialePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OffreSpeciale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OffreSpecialeFindUniqueOrThrowArgs} args - Arguments to find a OffreSpeciale
     * @example
     * // Get one OffreSpeciale
     * const offreSpeciale = await prisma.offreSpeciale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OffreSpecialeFindUniqueOrThrowArgs>(args: SelectSubset<T, OffreSpecialeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OffreSpecialeClient<$Result.GetResult<Prisma.$OffreSpecialePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OffreSpeciale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreSpecialeFindFirstArgs} args - Arguments to find a OffreSpeciale
     * @example
     * // Get one OffreSpeciale
     * const offreSpeciale = await prisma.offreSpeciale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OffreSpecialeFindFirstArgs>(args?: SelectSubset<T, OffreSpecialeFindFirstArgs<ExtArgs>>): Prisma__OffreSpecialeClient<$Result.GetResult<Prisma.$OffreSpecialePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OffreSpeciale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreSpecialeFindFirstOrThrowArgs} args - Arguments to find a OffreSpeciale
     * @example
     * // Get one OffreSpeciale
     * const offreSpeciale = await prisma.offreSpeciale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OffreSpecialeFindFirstOrThrowArgs>(args?: SelectSubset<T, OffreSpecialeFindFirstOrThrowArgs<ExtArgs>>): Prisma__OffreSpecialeClient<$Result.GetResult<Prisma.$OffreSpecialePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OffreSpeciales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreSpecialeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OffreSpeciales
     * const offreSpeciales = await prisma.offreSpeciale.findMany()
     * 
     * // Get first 10 OffreSpeciales
     * const offreSpeciales = await prisma.offreSpeciale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offreSpecialeWithIdOnly = await prisma.offreSpeciale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OffreSpecialeFindManyArgs>(args?: SelectSubset<T, OffreSpecialeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffreSpecialePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OffreSpeciale.
     * @param {OffreSpecialeCreateArgs} args - Arguments to create a OffreSpeciale.
     * @example
     * // Create one OffreSpeciale
     * const OffreSpeciale = await prisma.offreSpeciale.create({
     *   data: {
     *     // ... data to create a OffreSpeciale
     *   }
     * })
     * 
     */
    create<T extends OffreSpecialeCreateArgs>(args: SelectSubset<T, OffreSpecialeCreateArgs<ExtArgs>>): Prisma__OffreSpecialeClient<$Result.GetResult<Prisma.$OffreSpecialePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OffreSpeciales.
     * @param {OffreSpecialeCreateManyArgs} args - Arguments to create many OffreSpeciales.
     * @example
     * // Create many OffreSpeciales
     * const offreSpeciale = await prisma.offreSpeciale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OffreSpecialeCreateManyArgs>(args?: SelectSubset<T, OffreSpecialeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OffreSpeciales and returns the data saved in the database.
     * @param {OffreSpecialeCreateManyAndReturnArgs} args - Arguments to create many OffreSpeciales.
     * @example
     * // Create many OffreSpeciales
     * const offreSpeciale = await prisma.offreSpeciale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OffreSpeciales and only return the `id`
     * const offreSpecialeWithIdOnly = await prisma.offreSpeciale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OffreSpecialeCreateManyAndReturnArgs>(args?: SelectSubset<T, OffreSpecialeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffreSpecialePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OffreSpeciale.
     * @param {OffreSpecialeDeleteArgs} args - Arguments to delete one OffreSpeciale.
     * @example
     * // Delete one OffreSpeciale
     * const OffreSpeciale = await prisma.offreSpeciale.delete({
     *   where: {
     *     // ... filter to delete one OffreSpeciale
     *   }
     * })
     * 
     */
    delete<T extends OffreSpecialeDeleteArgs>(args: SelectSubset<T, OffreSpecialeDeleteArgs<ExtArgs>>): Prisma__OffreSpecialeClient<$Result.GetResult<Prisma.$OffreSpecialePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OffreSpeciale.
     * @param {OffreSpecialeUpdateArgs} args - Arguments to update one OffreSpeciale.
     * @example
     * // Update one OffreSpeciale
     * const offreSpeciale = await prisma.offreSpeciale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OffreSpecialeUpdateArgs>(args: SelectSubset<T, OffreSpecialeUpdateArgs<ExtArgs>>): Prisma__OffreSpecialeClient<$Result.GetResult<Prisma.$OffreSpecialePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OffreSpeciales.
     * @param {OffreSpecialeDeleteManyArgs} args - Arguments to filter OffreSpeciales to delete.
     * @example
     * // Delete a few OffreSpeciales
     * const { count } = await prisma.offreSpeciale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OffreSpecialeDeleteManyArgs>(args?: SelectSubset<T, OffreSpecialeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OffreSpeciales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreSpecialeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OffreSpeciales
     * const offreSpeciale = await prisma.offreSpeciale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OffreSpecialeUpdateManyArgs>(args: SelectSubset<T, OffreSpecialeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OffreSpeciales and returns the data updated in the database.
     * @param {OffreSpecialeUpdateManyAndReturnArgs} args - Arguments to update many OffreSpeciales.
     * @example
     * // Update many OffreSpeciales
     * const offreSpeciale = await prisma.offreSpeciale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OffreSpeciales and only return the `id`
     * const offreSpecialeWithIdOnly = await prisma.offreSpeciale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OffreSpecialeUpdateManyAndReturnArgs>(args: SelectSubset<T, OffreSpecialeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffreSpecialePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OffreSpeciale.
     * @param {OffreSpecialeUpsertArgs} args - Arguments to update or create a OffreSpeciale.
     * @example
     * // Update or create a OffreSpeciale
     * const offreSpeciale = await prisma.offreSpeciale.upsert({
     *   create: {
     *     // ... data to create a OffreSpeciale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OffreSpeciale we want to update
     *   }
     * })
     */
    upsert<T extends OffreSpecialeUpsertArgs>(args: SelectSubset<T, OffreSpecialeUpsertArgs<ExtArgs>>): Prisma__OffreSpecialeClient<$Result.GetResult<Prisma.$OffreSpecialePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OffreSpeciales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreSpecialeCountArgs} args - Arguments to filter OffreSpeciales to count.
     * @example
     * // Count the number of OffreSpeciales
     * const count = await prisma.offreSpeciale.count({
     *   where: {
     *     // ... the filter for the OffreSpeciales we want to count
     *   }
     * })
    **/
    count<T extends OffreSpecialeCountArgs>(
      args?: Subset<T, OffreSpecialeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OffreSpecialeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OffreSpeciale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreSpecialeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OffreSpecialeAggregateArgs>(args: Subset<T, OffreSpecialeAggregateArgs>): Prisma.PrismaPromise<GetOffreSpecialeAggregateType<T>>

    /**
     * Group by OffreSpeciale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreSpecialeGroupByArgs} args - Group by arguments.
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
      T extends OffreSpecialeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OffreSpecialeGroupByArgs['orderBy'] }
        : { orderBy?: OffreSpecialeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OffreSpecialeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOffreSpecialeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OffreSpeciale model
   */
  readonly fields: OffreSpecialeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OffreSpeciale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OffreSpecialeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OffreSpeciale model
   */
  interface OffreSpecialeFieldRefs {
    readonly id: FieldRef<"OffreSpeciale", 'String'>
    readonly createdAt: FieldRef<"OffreSpeciale", 'DateTime'>
    readonly updatedAt: FieldRef<"OffreSpeciale", 'DateTime'>
    readonly name: FieldRef<"OffreSpeciale", 'String'>
    readonly email: FieldRef<"OffreSpeciale", 'String'>
    readonly phone: FieldRef<"OffreSpeciale", 'String'>
    readonly message: FieldRef<"OffreSpeciale", 'String'>
    readonly status: FieldRef<"OffreSpeciale", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OffreSpeciale findUnique
   */
  export type OffreSpecialeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
    /**
     * Filter, which OffreSpeciale to fetch.
     */
    where: OffreSpecialeWhereUniqueInput
  }

  /**
   * OffreSpeciale findUniqueOrThrow
   */
  export type OffreSpecialeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
    /**
     * Filter, which OffreSpeciale to fetch.
     */
    where: OffreSpecialeWhereUniqueInput
  }

  /**
   * OffreSpeciale findFirst
   */
  export type OffreSpecialeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
    /**
     * Filter, which OffreSpeciale to fetch.
     */
    where?: OffreSpecialeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffreSpeciales to fetch.
     */
    orderBy?: OffreSpecialeOrderByWithRelationInput | OffreSpecialeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OffreSpeciales.
     */
    cursor?: OffreSpecialeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffreSpeciales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffreSpeciales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OffreSpeciales.
     */
    distinct?: OffreSpecialeScalarFieldEnum | OffreSpecialeScalarFieldEnum[]
  }

  /**
   * OffreSpeciale findFirstOrThrow
   */
  export type OffreSpecialeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
    /**
     * Filter, which OffreSpeciale to fetch.
     */
    where?: OffreSpecialeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffreSpeciales to fetch.
     */
    orderBy?: OffreSpecialeOrderByWithRelationInput | OffreSpecialeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OffreSpeciales.
     */
    cursor?: OffreSpecialeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffreSpeciales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffreSpeciales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OffreSpeciales.
     */
    distinct?: OffreSpecialeScalarFieldEnum | OffreSpecialeScalarFieldEnum[]
  }

  /**
   * OffreSpeciale findMany
   */
  export type OffreSpecialeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
    /**
     * Filter, which OffreSpeciales to fetch.
     */
    where?: OffreSpecialeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffreSpeciales to fetch.
     */
    orderBy?: OffreSpecialeOrderByWithRelationInput | OffreSpecialeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OffreSpeciales.
     */
    cursor?: OffreSpecialeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffreSpeciales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffreSpeciales.
     */
    skip?: number
    distinct?: OffreSpecialeScalarFieldEnum | OffreSpecialeScalarFieldEnum[]
  }

  /**
   * OffreSpeciale create
   */
  export type OffreSpecialeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
    /**
     * The data needed to create a OffreSpeciale.
     */
    data: XOR<OffreSpecialeCreateInput, OffreSpecialeUncheckedCreateInput>
  }

  /**
   * OffreSpeciale createMany
   */
  export type OffreSpecialeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OffreSpeciales.
     */
    data: OffreSpecialeCreateManyInput | OffreSpecialeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OffreSpeciale createManyAndReturn
   */
  export type OffreSpecialeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
    /**
     * The data used to create many OffreSpeciales.
     */
    data: OffreSpecialeCreateManyInput | OffreSpecialeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OffreSpeciale update
   */
  export type OffreSpecialeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
    /**
     * The data needed to update a OffreSpeciale.
     */
    data: XOR<OffreSpecialeUpdateInput, OffreSpecialeUncheckedUpdateInput>
    /**
     * Choose, which OffreSpeciale to update.
     */
    where: OffreSpecialeWhereUniqueInput
  }

  /**
   * OffreSpeciale updateMany
   */
  export type OffreSpecialeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OffreSpeciales.
     */
    data: XOR<OffreSpecialeUpdateManyMutationInput, OffreSpecialeUncheckedUpdateManyInput>
    /**
     * Filter which OffreSpeciales to update
     */
    where?: OffreSpecialeWhereInput
    /**
     * Limit how many OffreSpeciales to update.
     */
    limit?: number
  }

  /**
   * OffreSpeciale updateManyAndReturn
   */
  export type OffreSpecialeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
    /**
     * The data used to update OffreSpeciales.
     */
    data: XOR<OffreSpecialeUpdateManyMutationInput, OffreSpecialeUncheckedUpdateManyInput>
    /**
     * Filter which OffreSpeciales to update
     */
    where?: OffreSpecialeWhereInput
    /**
     * Limit how many OffreSpeciales to update.
     */
    limit?: number
  }

  /**
   * OffreSpeciale upsert
   */
  export type OffreSpecialeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
    /**
     * The filter to search for the OffreSpeciale to update in case it exists.
     */
    where: OffreSpecialeWhereUniqueInput
    /**
     * In case the OffreSpeciale found by the `where` argument doesn't exist, create a new OffreSpeciale with this data.
     */
    create: XOR<OffreSpecialeCreateInput, OffreSpecialeUncheckedCreateInput>
    /**
     * In case the OffreSpeciale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OffreSpecialeUpdateInput, OffreSpecialeUncheckedUpdateInput>
  }

  /**
   * OffreSpeciale delete
   */
  export type OffreSpecialeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
    /**
     * Filter which OffreSpeciale to delete.
     */
    where: OffreSpecialeWhereUniqueInput
  }

  /**
   * OffreSpeciale deleteMany
   */
  export type OffreSpecialeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OffreSpeciales to delete
     */
    where?: OffreSpecialeWhereInput
    /**
     * Limit how many OffreSpeciales to delete.
     */
    limit?: number
  }

  /**
   * OffreSpeciale without action
   */
  export type OffreSpecialeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreSpeciale
     */
    select?: OffreSpecialeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreSpeciale
     */
    omit?: OffreSpecialeOmit<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    status: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    phone: string | null
    subject: string | null
    message: string | null
    status: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    email: number
    phone: number
    subject: number
    message: number
    status: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    phone?: true
    subject?: true
    message?: true
    status?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    email: string
    phone: string
    subject: string
    message: string
    status: string
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "email" | "phone" | "subject" | "message" | "status", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      email: string
      phone: string
      subject: string
      message: string
      status: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly subject: FieldRef<"Contact", 'String'>
    readonly message: FieldRef<"Contact", 'String'>
    readonly status: FieldRef<"Contact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model Reservations
   */

  export type AggregateReservations = {
    _count: ReservationsCountAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  export type ReservationsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    voiture: string | null
    name: string | null
    prenoms: string | null
    email: string | null
    phone: string | null
    date: string | null
    message: string | null
    status: string | null
  }

  export type ReservationsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    voiture: string | null
    name: string | null
    prenoms: string | null
    email: string | null
    phone: string | null
    date: string | null
    message: string | null
    status: string | null
  }

  export type ReservationsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    voiture: number
    name: number
    prenoms: number
    email: number
    phone: number
    date: number
    message: number
    status: number
    _all: number
  }


  export type ReservationsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    voiture?: true
    name?: true
    prenoms?: true
    email?: true
    phone?: true
    date?: true
    message?: true
    status?: true
  }

  export type ReservationsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    voiture?: true
    name?: true
    prenoms?: true
    email?: true
    phone?: true
    date?: true
    message?: true
    status?: true
  }

  export type ReservationsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    voiture?: true
    name?: true
    prenoms?: true
    email?: true
    phone?: true
    date?: true
    message?: true
    status?: true
    _all?: true
  }

  export type ReservationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to aggregate.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationsMaxAggregateInputType
  }

  export type GetReservationsAggregateType<T extends ReservationsAggregateArgs> = {
        [P in keyof T & keyof AggregateReservations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservations[P]>
      : GetScalarType<T[P], AggregateReservations[P]>
  }




  export type ReservationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationsWhereInput
    orderBy?: ReservationsOrderByWithAggregationInput | ReservationsOrderByWithAggregationInput[]
    by: ReservationsScalarFieldEnum[] | ReservationsScalarFieldEnum
    having?: ReservationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationsCountAggregateInputType | true
    _min?: ReservationsMinAggregateInputType
    _max?: ReservationsMaxAggregateInputType
  }

  export type ReservationsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    voiture: string
    name: string
    prenoms: string
    email: string
    phone: string
    date: string
    message: string
    status: string
    _count: ReservationsCountAggregateOutputType | null
    _min: ReservationsMinAggregateOutputType | null
    _max: ReservationsMaxAggregateOutputType | null
  }

  type GetReservationsGroupByPayload<T extends ReservationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationsGroupByOutputType[P]>
        }
      >
    >


  export type ReservationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voiture?: boolean
    name?: boolean
    prenoms?: boolean
    email?: boolean
    phone?: boolean
    date?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["reservations"]>

  export type ReservationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voiture?: boolean
    name?: boolean
    prenoms?: boolean
    email?: boolean
    phone?: boolean
    date?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["reservations"]>

  export type ReservationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voiture?: boolean
    name?: boolean
    prenoms?: boolean
    email?: boolean
    phone?: boolean
    date?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["reservations"]>

  export type ReservationsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voiture?: boolean
    name?: boolean
    prenoms?: boolean
    email?: boolean
    phone?: boolean
    date?: boolean
    message?: boolean
    status?: boolean
  }

  export type ReservationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "voiture" | "name" | "prenoms" | "email" | "phone" | "date" | "message" | "status", ExtArgs["result"]["reservations"]>

  export type $ReservationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      voiture: string
      name: string
      prenoms: string
      email: string
      phone: string
      date: string
      message: string
      status: string
    }, ExtArgs["result"]["reservations"]>
    composites: {}
  }

  type ReservationsGetPayload<S extends boolean | null | undefined | ReservationsDefaultArgs> = $Result.GetResult<Prisma.$ReservationsPayload, S>

  type ReservationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationsCountAggregateInputType | true
    }

  export interface ReservationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservations'], meta: { name: 'Reservations' } }
    /**
     * Find zero or one Reservations that matches the filter.
     * @param {ReservationsFindUniqueArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationsFindUniqueArgs>(args: SelectSubset<T, ReservationsFindUniqueArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationsFindUniqueOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindFirstArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationsFindFirstArgs>(args?: SelectSubset<T, ReservationsFindFirstArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindFirstOrThrowArgs} args - Arguments to find a Reservations
     * @example
     * // Get one Reservations
     * const reservations = await prisma.reservations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservations.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationsWithIdOnly = await prisma.reservations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationsFindManyArgs>(args?: SelectSubset<T, ReservationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservations.
     * @param {ReservationsCreateArgs} args - Arguments to create a Reservations.
     * @example
     * // Create one Reservations
     * const Reservations = await prisma.reservations.create({
     *   data: {
     *     // ... data to create a Reservations
     *   }
     * })
     * 
     */
    create<T extends ReservationsCreateArgs>(args: SelectSubset<T, ReservationsCreateArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationsCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservations = await prisma.reservations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationsCreateManyArgs>(args?: SelectSubset<T, ReservationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationsCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservations = await prisma.reservations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationsWithIdOnly = await prisma.reservations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservations.
     * @param {ReservationsDeleteArgs} args - Arguments to delete one Reservations.
     * @example
     * // Delete one Reservations
     * const Reservations = await prisma.reservations.delete({
     *   where: {
     *     // ... filter to delete one Reservations
     *   }
     * })
     * 
     */
    delete<T extends ReservationsDeleteArgs>(args: SelectSubset<T, ReservationsDeleteArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservations.
     * @param {ReservationsUpdateArgs} args - Arguments to update one Reservations.
     * @example
     * // Update one Reservations
     * const reservations = await prisma.reservations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationsUpdateArgs>(args: SelectSubset<T, ReservationsUpdateArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationsDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationsDeleteManyArgs>(args?: SelectSubset<T, ReservationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservations = await prisma.reservations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationsUpdateManyArgs>(args: SelectSubset<T, ReservationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationsUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservations = await prisma.reservations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationsWithIdOnly = await prisma.reservations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservations.
     * @param {ReservationsUpsertArgs} args - Arguments to update or create a Reservations.
     * @example
     * // Update or create a Reservations
     * const reservations = await prisma.reservations.upsert({
     *   create: {
     *     // ... data to create a Reservations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservations we want to update
     *   }
     * })
     */
    upsert<T extends ReservationsUpsertArgs>(args: SelectSubset<T, ReservationsUpsertArgs<ExtArgs>>): Prisma__ReservationsClient<$Result.GetResult<Prisma.$ReservationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservations.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationsCountArgs>(
      args?: Subset<T, ReservationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationsAggregateArgs>(args: Subset<T, ReservationsAggregateArgs>): Prisma.PrismaPromise<GetReservationsAggregateType<T>>

    /**
     * Group by Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationsGroupByArgs} args - Group by arguments.
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
      T extends ReservationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationsGroupByArgs['orderBy'] }
        : { orderBy?: ReservationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservations model
   */
  readonly fields: ReservationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Reservations model
   */
  interface ReservationsFieldRefs {
    readonly id: FieldRef<"Reservations", 'String'>
    readonly createdAt: FieldRef<"Reservations", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservations", 'DateTime'>
    readonly voiture: FieldRef<"Reservations", 'String'>
    readonly name: FieldRef<"Reservations", 'String'>
    readonly prenoms: FieldRef<"Reservations", 'String'>
    readonly email: FieldRef<"Reservations", 'String'>
    readonly phone: FieldRef<"Reservations", 'String'>
    readonly date: FieldRef<"Reservations", 'String'>
    readonly message: FieldRef<"Reservations", 'String'>
    readonly status: FieldRef<"Reservations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reservations findUnique
   */
  export type ReservationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations findUniqueOrThrow
   */
  export type ReservationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations findFirst
   */
  export type ReservationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations findFirstOrThrow
   */
  export type ReservationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations findMany
   */
  export type ReservationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationsOrderByWithRelationInput | ReservationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationsScalarFieldEnum | ReservationsScalarFieldEnum[]
  }

  /**
   * Reservations create
   */
  export type ReservationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * The data needed to create a Reservations.
     */
    data: XOR<ReservationsCreateInput, ReservationsUncheckedCreateInput>
  }

  /**
   * Reservations createMany
   */
  export type ReservationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationsCreateManyInput | ReservationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservations createManyAndReturn
   */
  export type ReservationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationsCreateManyInput | ReservationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservations update
   */
  export type ReservationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * The data needed to update a Reservations.
     */
    data: XOR<ReservationsUpdateInput, ReservationsUncheckedUpdateInput>
    /**
     * Choose, which Reservations to update.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations updateMany
   */
  export type ReservationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationsWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservations updateManyAndReturn
   */
  export type ReservationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationsUpdateManyMutationInput, ReservationsUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationsWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservations upsert
   */
  export type ReservationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * The filter to search for the Reservations to update in case it exists.
     */
    where: ReservationsWhereUniqueInput
    /**
     * In case the Reservations found by the `where` argument doesn't exist, create a new Reservations with this data.
     */
    create: XOR<ReservationsCreateInput, ReservationsUncheckedCreateInput>
    /**
     * In case the Reservations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationsUpdateInput, ReservationsUncheckedUpdateInput>
  }

  /**
   * Reservations delete
   */
  export type ReservationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
    /**
     * Filter which Reservations to delete.
     */
    where: ReservationsWhereUniqueInput
  }

  /**
   * Reservations deleteMany
   */
  export type ReservationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationsWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservations without action
   */
  export type ReservationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservations
     */
    select?: ReservationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservations
     */
    omit?: ReservationsOmit<ExtArgs> | null
  }


  /**
   * Model CommandesAccessoires
   */

  export type AggregateCommandesAccessoires = {
    _count: CommandesAccessoiresCountAggregateOutputType | null
    _min: CommandesAccessoiresMinAggregateOutputType | null
    _max: CommandesAccessoiresMaxAggregateOutputType | null
  }

  export type CommandesAccessoiresMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nom: string | null
    prenom: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: string | null
  }

  export type CommandesAccessoiresMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nom: string | null
    prenom: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: string | null
  }

  export type CommandesAccessoiresCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    nom: number
    prenom: number
    email: number
    phone: number
    message: number
    status: number
    _all: number
  }


  export type CommandesAccessoiresMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nom?: true
    prenom?: true
    email?: true
    phone?: true
    message?: true
    status?: true
  }

  export type CommandesAccessoiresMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nom?: true
    prenom?: true
    email?: true
    phone?: true
    message?: true
    status?: true
  }

  export type CommandesAccessoiresCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nom?: true
    prenom?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    _all?: true
  }

  export type CommandesAccessoiresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommandesAccessoires to aggregate.
     */
    where?: CommandesAccessoiresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandesAccessoires to fetch.
     */
    orderBy?: CommandesAccessoiresOrderByWithRelationInput | CommandesAccessoiresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandesAccessoiresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandesAccessoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandesAccessoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommandesAccessoires
    **/
    _count?: true | CommandesAccessoiresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandesAccessoiresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandesAccessoiresMaxAggregateInputType
  }

  export type GetCommandesAccessoiresAggregateType<T extends CommandesAccessoiresAggregateArgs> = {
        [P in keyof T & keyof AggregateCommandesAccessoires]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommandesAccessoires[P]>
      : GetScalarType<T[P], AggregateCommandesAccessoires[P]>
  }




  export type CommandesAccessoiresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandesAccessoiresWhereInput
    orderBy?: CommandesAccessoiresOrderByWithAggregationInput | CommandesAccessoiresOrderByWithAggregationInput[]
    by: CommandesAccessoiresScalarFieldEnum[] | CommandesAccessoiresScalarFieldEnum
    having?: CommandesAccessoiresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandesAccessoiresCountAggregateInputType | true
    _min?: CommandesAccessoiresMinAggregateInputType
    _max?: CommandesAccessoiresMaxAggregateInputType
  }

  export type CommandesAccessoiresGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    nom: string
    prenom: string
    email: string
    phone: string
    message: string
    status: string
    _count: CommandesAccessoiresCountAggregateOutputType | null
    _min: CommandesAccessoiresMinAggregateOutputType | null
    _max: CommandesAccessoiresMaxAggregateOutputType | null
  }

  type GetCommandesAccessoiresGroupByPayload<T extends CommandesAccessoiresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandesAccessoiresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandesAccessoiresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandesAccessoiresGroupByOutputType[P]>
            : GetScalarType<T[P], CommandesAccessoiresGroupByOutputType[P]>
        }
      >
    >


  export type CommandesAccessoiresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["commandesAccessoires"]>

  export type CommandesAccessoiresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["commandesAccessoires"]>

  export type CommandesAccessoiresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["commandesAccessoires"]>

  export type CommandesAccessoiresSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }

  export type CommandesAccessoiresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "nom" | "prenom" | "email" | "phone" | "message" | "status", ExtArgs["result"]["commandesAccessoires"]>

  export type $CommandesAccessoiresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommandesAccessoires"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      nom: string
      prenom: string
      email: string
      phone: string
      message: string
      status: string
    }, ExtArgs["result"]["commandesAccessoires"]>
    composites: {}
  }

  type CommandesAccessoiresGetPayload<S extends boolean | null | undefined | CommandesAccessoiresDefaultArgs> = $Result.GetResult<Prisma.$CommandesAccessoiresPayload, S>

  type CommandesAccessoiresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommandesAccessoiresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommandesAccessoiresCountAggregateInputType | true
    }

  export interface CommandesAccessoiresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommandesAccessoires'], meta: { name: 'CommandesAccessoires' } }
    /**
     * Find zero or one CommandesAccessoires that matches the filter.
     * @param {CommandesAccessoiresFindUniqueArgs} args - Arguments to find a CommandesAccessoires
     * @example
     * // Get one CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandesAccessoiresFindUniqueArgs>(args: SelectSubset<T, CommandesAccessoiresFindUniqueArgs<ExtArgs>>): Prisma__CommandesAccessoiresClient<$Result.GetResult<Prisma.$CommandesAccessoiresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommandesAccessoires that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandesAccessoiresFindUniqueOrThrowArgs} args - Arguments to find a CommandesAccessoires
     * @example
     * // Get one CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandesAccessoiresFindUniqueOrThrowArgs>(args: SelectSubset<T, CommandesAccessoiresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommandesAccessoiresClient<$Result.GetResult<Prisma.$CommandesAccessoiresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommandesAccessoires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandesAccessoiresFindFirstArgs} args - Arguments to find a CommandesAccessoires
     * @example
     * // Get one CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandesAccessoiresFindFirstArgs>(args?: SelectSubset<T, CommandesAccessoiresFindFirstArgs<ExtArgs>>): Prisma__CommandesAccessoiresClient<$Result.GetResult<Prisma.$CommandesAccessoiresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommandesAccessoires that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandesAccessoiresFindFirstOrThrowArgs} args - Arguments to find a CommandesAccessoires
     * @example
     * // Get one CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandesAccessoiresFindFirstOrThrowArgs>(args?: SelectSubset<T, CommandesAccessoiresFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommandesAccessoiresClient<$Result.GetResult<Prisma.$CommandesAccessoiresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommandesAccessoires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandesAccessoiresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.findMany()
     * 
     * // Get first 10 CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandesAccessoiresWithIdOnly = await prisma.commandesAccessoires.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommandesAccessoiresFindManyArgs>(args?: SelectSubset<T, CommandesAccessoiresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandesAccessoiresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommandesAccessoires.
     * @param {CommandesAccessoiresCreateArgs} args - Arguments to create a CommandesAccessoires.
     * @example
     * // Create one CommandesAccessoires
     * const CommandesAccessoires = await prisma.commandesAccessoires.create({
     *   data: {
     *     // ... data to create a CommandesAccessoires
     *   }
     * })
     * 
     */
    create<T extends CommandesAccessoiresCreateArgs>(args: SelectSubset<T, CommandesAccessoiresCreateArgs<ExtArgs>>): Prisma__CommandesAccessoiresClient<$Result.GetResult<Prisma.$CommandesAccessoiresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommandesAccessoires.
     * @param {CommandesAccessoiresCreateManyArgs} args - Arguments to create many CommandesAccessoires.
     * @example
     * // Create many CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommandesAccessoiresCreateManyArgs>(args?: SelectSubset<T, CommandesAccessoiresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommandesAccessoires and returns the data saved in the database.
     * @param {CommandesAccessoiresCreateManyAndReturnArgs} args - Arguments to create many CommandesAccessoires.
     * @example
     * // Create many CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommandesAccessoires and only return the `id`
     * const commandesAccessoiresWithIdOnly = await prisma.commandesAccessoires.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommandesAccessoiresCreateManyAndReturnArgs>(args?: SelectSubset<T, CommandesAccessoiresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandesAccessoiresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommandesAccessoires.
     * @param {CommandesAccessoiresDeleteArgs} args - Arguments to delete one CommandesAccessoires.
     * @example
     * // Delete one CommandesAccessoires
     * const CommandesAccessoires = await prisma.commandesAccessoires.delete({
     *   where: {
     *     // ... filter to delete one CommandesAccessoires
     *   }
     * })
     * 
     */
    delete<T extends CommandesAccessoiresDeleteArgs>(args: SelectSubset<T, CommandesAccessoiresDeleteArgs<ExtArgs>>): Prisma__CommandesAccessoiresClient<$Result.GetResult<Prisma.$CommandesAccessoiresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommandesAccessoires.
     * @param {CommandesAccessoiresUpdateArgs} args - Arguments to update one CommandesAccessoires.
     * @example
     * // Update one CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommandesAccessoiresUpdateArgs>(args: SelectSubset<T, CommandesAccessoiresUpdateArgs<ExtArgs>>): Prisma__CommandesAccessoiresClient<$Result.GetResult<Prisma.$CommandesAccessoiresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommandesAccessoires.
     * @param {CommandesAccessoiresDeleteManyArgs} args - Arguments to filter CommandesAccessoires to delete.
     * @example
     * // Delete a few CommandesAccessoires
     * const { count } = await prisma.commandesAccessoires.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommandesAccessoiresDeleteManyArgs>(args?: SelectSubset<T, CommandesAccessoiresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommandesAccessoires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandesAccessoiresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommandesAccessoiresUpdateManyArgs>(args: SelectSubset<T, CommandesAccessoiresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommandesAccessoires and returns the data updated in the database.
     * @param {CommandesAccessoiresUpdateManyAndReturnArgs} args - Arguments to update many CommandesAccessoires.
     * @example
     * // Update many CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommandesAccessoires and only return the `id`
     * const commandesAccessoiresWithIdOnly = await prisma.commandesAccessoires.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommandesAccessoiresUpdateManyAndReturnArgs>(args: SelectSubset<T, CommandesAccessoiresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandesAccessoiresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommandesAccessoires.
     * @param {CommandesAccessoiresUpsertArgs} args - Arguments to update or create a CommandesAccessoires.
     * @example
     * // Update or create a CommandesAccessoires
     * const commandesAccessoires = await prisma.commandesAccessoires.upsert({
     *   create: {
     *     // ... data to create a CommandesAccessoires
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommandesAccessoires we want to update
     *   }
     * })
     */
    upsert<T extends CommandesAccessoiresUpsertArgs>(args: SelectSubset<T, CommandesAccessoiresUpsertArgs<ExtArgs>>): Prisma__CommandesAccessoiresClient<$Result.GetResult<Prisma.$CommandesAccessoiresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommandesAccessoires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandesAccessoiresCountArgs} args - Arguments to filter CommandesAccessoires to count.
     * @example
     * // Count the number of CommandesAccessoires
     * const count = await prisma.commandesAccessoires.count({
     *   where: {
     *     // ... the filter for the CommandesAccessoires we want to count
     *   }
     * })
    **/
    count<T extends CommandesAccessoiresCountArgs>(
      args?: Subset<T, CommandesAccessoiresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandesAccessoiresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommandesAccessoires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandesAccessoiresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandesAccessoiresAggregateArgs>(args: Subset<T, CommandesAccessoiresAggregateArgs>): Prisma.PrismaPromise<GetCommandesAccessoiresAggregateType<T>>

    /**
     * Group by CommandesAccessoires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandesAccessoiresGroupByArgs} args - Group by arguments.
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
      T extends CommandesAccessoiresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandesAccessoiresGroupByArgs['orderBy'] }
        : { orderBy?: CommandesAccessoiresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommandesAccessoiresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandesAccessoiresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommandesAccessoires model
   */
  readonly fields: CommandesAccessoiresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommandesAccessoires.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandesAccessoiresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CommandesAccessoires model
   */
  interface CommandesAccessoiresFieldRefs {
    readonly id: FieldRef<"CommandesAccessoires", 'String'>
    readonly createdAt: FieldRef<"CommandesAccessoires", 'DateTime'>
    readonly updatedAt: FieldRef<"CommandesAccessoires", 'DateTime'>
    readonly nom: FieldRef<"CommandesAccessoires", 'String'>
    readonly prenom: FieldRef<"CommandesAccessoires", 'String'>
    readonly email: FieldRef<"CommandesAccessoires", 'String'>
    readonly phone: FieldRef<"CommandesAccessoires", 'String'>
    readonly message: FieldRef<"CommandesAccessoires", 'String'>
    readonly status: FieldRef<"CommandesAccessoires", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CommandesAccessoires findUnique
   */
  export type CommandesAccessoiresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
    /**
     * Filter, which CommandesAccessoires to fetch.
     */
    where: CommandesAccessoiresWhereUniqueInput
  }

  /**
   * CommandesAccessoires findUniqueOrThrow
   */
  export type CommandesAccessoiresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
    /**
     * Filter, which CommandesAccessoires to fetch.
     */
    where: CommandesAccessoiresWhereUniqueInput
  }

  /**
   * CommandesAccessoires findFirst
   */
  export type CommandesAccessoiresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
    /**
     * Filter, which CommandesAccessoires to fetch.
     */
    where?: CommandesAccessoiresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandesAccessoires to fetch.
     */
    orderBy?: CommandesAccessoiresOrderByWithRelationInput | CommandesAccessoiresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommandesAccessoires.
     */
    cursor?: CommandesAccessoiresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandesAccessoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandesAccessoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommandesAccessoires.
     */
    distinct?: CommandesAccessoiresScalarFieldEnum | CommandesAccessoiresScalarFieldEnum[]
  }

  /**
   * CommandesAccessoires findFirstOrThrow
   */
  export type CommandesAccessoiresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
    /**
     * Filter, which CommandesAccessoires to fetch.
     */
    where?: CommandesAccessoiresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandesAccessoires to fetch.
     */
    orderBy?: CommandesAccessoiresOrderByWithRelationInput | CommandesAccessoiresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommandesAccessoires.
     */
    cursor?: CommandesAccessoiresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandesAccessoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandesAccessoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommandesAccessoires.
     */
    distinct?: CommandesAccessoiresScalarFieldEnum | CommandesAccessoiresScalarFieldEnum[]
  }

  /**
   * CommandesAccessoires findMany
   */
  export type CommandesAccessoiresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
    /**
     * Filter, which CommandesAccessoires to fetch.
     */
    where?: CommandesAccessoiresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommandesAccessoires to fetch.
     */
    orderBy?: CommandesAccessoiresOrderByWithRelationInput | CommandesAccessoiresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommandesAccessoires.
     */
    cursor?: CommandesAccessoiresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommandesAccessoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommandesAccessoires.
     */
    skip?: number
    distinct?: CommandesAccessoiresScalarFieldEnum | CommandesAccessoiresScalarFieldEnum[]
  }

  /**
   * CommandesAccessoires create
   */
  export type CommandesAccessoiresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
    /**
     * The data needed to create a CommandesAccessoires.
     */
    data: XOR<CommandesAccessoiresCreateInput, CommandesAccessoiresUncheckedCreateInput>
  }

  /**
   * CommandesAccessoires createMany
   */
  export type CommandesAccessoiresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommandesAccessoires.
     */
    data: CommandesAccessoiresCreateManyInput | CommandesAccessoiresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommandesAccessoires createManyAndReturn
   */
  export type CommandesAccessoiresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
    /**
     * The data used to create many CommandesAccessoires.
     */
    data: CommandesAccessoiresCreateManyInput | CommandesAccessoiresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommandesAccessoires update
   */
  export type CommandesAccessoiresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
    /**
     * The data needed to update a CommandesAccessoires.
     */
    data: XOR<CommandesAccessoiresUpdateInput, CommandesAccessoiresUncheckedUpdateInput>
    /**
     * Choose, which CommandesAccessoires to update.
     */
    where: CommandesAccessoiresWhereUniqueInput
  }

  /**
   * CommandesAccessoires updateMany
   */
  export type CommandesAccessoiresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommandesAccessoires.
     */
    data: XOR<CommandesAccessoiresUpdateManyMutationInput, CommandesAccessoiresUncheckedUpdateManyInput>
    /**
     * Filter which CommandesAccessoires to update
     */
    where?: CommandesAccessoiresWhereInput
    /**
     * Limit how many CommandesAccessoires to update.
     */
    limit?: number
  }

  /**
   * CommandesAccessoires updateManyAndReturn
   */
  export type CommandesAccessoiresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
    /**
     * The data used to update CommandesAccessoires.
     */
    data: XOR<CommandesAccessoiresUpdateManyMutationInput, CommandesAccessoiresUncheckedUpdateManyInput>
    /**
     * Filter which CommandesAccessoires to update
     */
    where?: CommandesAccessoiresWhereInput
    /**
     * Limit how many CommandesAccessoires to update.
     */
    limit?: number
  }

  /**
   * CommandesAccessoires upsert
   */
  export type CommandesAccessoiresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
    /**
     * The filter to search for the CommandesAccessoires to update in case it exists.
     */
    where: CommandesAccessoiresWhereUniqueInput
    /**
     * In case the CommandesAccessoires found by the `where` argument doesn't exist, create a new CommandesAccessoires with this data.
     */
    create: XOR<CommandesAccessoiresCreateInput, CommandesAccessoiresUncheckedCreateInput>
    /**
     * In case the CommandesAccessoires was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandesAccessoiresUpdateInput, CommandesAccessoiresUncheckedUpdateInput>
  }

  /**
   * CommandesAccessoires delete
   */
  export type CommandesAccessoiresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
    /**
     * Filter which CommandesAccessoires to delete.
     */
    where: CommandesAccessoiresWhereUniqueInput
  }

  /**
   * CommandesAccessoires deleteMany
   */
  export type CommandesAccessoiresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommandesAccessoires to delete
     */
    where?: CommandesAccessoiresWhereInput
    /**
     * Limit how many CommandesAccessoires to delete.
     */
    limit?: number
  }

  /**
   * CommandesAccessoires without action
   */
  export type CommandesAccessoiresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandesAccessoires
     */
    select?: CommandesAccessoiresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommandesAccessoires
     */
    omit?: CommandesAccessoiresOmit<ExtArgs> | null
  }


  /**
   * Model OffreExceptionelle
   */

  export type AggregateOffreExceptionelle = {
    _count: OffreExceptionelleCountAggregateOutputType | null
    _min: OffreExceptionelleMinAggregateOutputType | null
    _max: OffreExceptionelleMaxAggregateOutputType | null
  }

  export type OffreExceptionelleMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    vehicule: string | null
    prixPromotionnel: string | null
    remise: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: string | null
  }

  export type OffreExceptionelleMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    vehicule: string | null
    prixPromotionnel: string | null
    remise: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    status: string | null
  }

  export type OffreExceptionelleCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    vehicule: number
    prixPromotionnel: number
    remise: number
    name: number
    email: number
    phone: number
    message: number
    status: number
    _all: number
  }


  export type OffreExceptionelleMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    vehicule?: true
    prixPromotionnel?: true
    remise?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
  }

  export type OffreExceptionelleMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    vehicule?: true
    prixPromotionnel?: true
    remise?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
  }

  export type OffreExceptionelleCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    vehicule?: true
    prixPromotionnel?: true
    remise?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    status?: true
    _all?: true
  }

  export type OffreExceptionelleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OffreExceptionelle to aggregate.
     */
    where?: OffreExceptionelleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffreExceptionelles to fetch.
     */
    orderBy?: OffreExceptionelleOrderByWithRelationInput | OffreExceptionelleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OffreExceptionelleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffreExceptionelles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffreExceptionelles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OffreExceptionelles
    **/
    _count?: true | OffreExceptionelleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OffreExceptionelleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OffreExceptionelleMaxAggregateInputType
  }

  export type GetOffreExceptionelleAggregateType<T extends OffreExceptionelleAggregateArgs> = {
        [P in keyof T & keyof AggregateOffreExceptionelle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffreExceptionelle[P]>
      : GetScalarType<T[P], AggregateOffreExceptionelle[P]>
  }




  export type OffreExceptionelleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OffreExceptionelleWhereInput
    orderBy?: OffreExceptionelleOrderByWithAggregationInput | OffreExceptionelleOrderByWithAggregationInput[]
    by: OffreExceptionelleScalarFieldEnum[] | OffreExceptionelleScalarFieldEnum
    having?: OffreExceptionelleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OffreExceptionelleCountAggregateInputType | true
    _min?: OffreExceptionelleMinAggregateInputType
    _max?: OffreExceptionelleMaxAggregateInputType
  }

  export type OffreExceptionelleGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    vehicule: string
    prixPromotionnel: string
    remise: string
    name: string
    email: string
    phone: string
    message: string
    status: string
    _count: OffreExceptionelleCountAggregateOutputType | null
    _min: OffreExceptionelleMinAggregateOutputType | null
    _max: OffreExceptionelleMaxAggregateOutputType | null
  }

  type GetOffreExceptionelleGroupByPayload<T extends OffreExceptionelleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OffreExceptionelleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OffreExceptionelleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OffreExceptionelleGroupByOutputType[P]>
            : GetScalarType<T[P], OffreExceptionelleGroupByOutputType[P]>
        }
      >
    >


  export type OffreExceptionelleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicule?: boolean
    prixPromotionnel?: boolean
    remise?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["offreExceptionelle"]>

  export type OffreExceptionelleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicule?: boolean
    prixPromotionnel?: boolean
    remise?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["offreExceptionelle"]>

  export type OffreExceptionelleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicule?: boolean
    prixPromotionnel?: boolean
    remise?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }, ExtArgs["result"]["offreExceptionelle"]>

  export type OffreExceptionelleSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicule?: boolean
    prixPromotionnel?: boolean
    remise?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    status?: boolean
  }

  export type OffreExceptionelleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "vehicule" | "prixPromotionnel" | "remise" | "name" | "email" | "phone" | "message" | "status", ExtArgs["result"]["offreExceptionelle"]>

  export type $OffreExceptionellePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OffreExceptionelle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      vehicule: string
      prixPromotionnel: string
      remise: string
      name: string
      email: string
      phone: string
      message: string
      status: string
    }, ExtArgs["result"]["offreExceptionelle"]>
    composites: {}
  }

  type OffreExceptionelleGetPayload<S extends boolean | null | undefined | OffreExceptionelleDefaultArgs> = $Result.GetResult<Prisma.$OffreExceptionellePayload, S>

  type OffreExceptionelleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OffreExceptionelleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OffreExceptionelleCountAggregateInputType | true
    }

  export interface OffreExceptionelleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OffreExceptionelle'], meta: { name: 'OffreExceptionelle' } }
    /**
     * Find zero or one OffreExceptionelle that matches the filter.
     * @param {OffreExceptionelleFindUniqueArgs} args - Arguments to find a OffreExceptionelle
     * @example
     * // Get one OffreExceptionelle
     * const offreExceptionelle = await prisma.offreExceptionelle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OffreExceptionelleFindUniqueArgs>(args: SelectSubset<T, OffreExceptionelleFindUniqueArgs<ExtArgs>>): Prisma__OffreExceptionelleClient<$Result.GetResult<Prisma.$OffreExceptionellePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OffreExceptionelle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OffreExceptionelleFindUniqueOrThrowArgs} args - Arguments to find a OffreExceptionelle
     * @example
     * // Get one OffreExceptionelle
     * const offreExceptionelle = await prisma.offreExceptionelle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OffreExceptionelleFindUniqueOrThrowArgs>(args: SelectSubset<T, OffreExceptionelleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OffreExceptionelleClient<$Result.GetResult<Prisma.$OffreExceptionellePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OffreExceptionelle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreExceptionelleFindFirstArgs} args - Arguments to find a OffreExceptionelle
     * @example
     * // Get one OffreExceptionelle
     * const offreExceptionelle = await prisma.offreExceptionelle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OffreExceptionelleFindFirstArgs>(args?: SelectSubset<T, OffreExceptionelleFindFirstArgs<ExtArgs>>): Prisma__OffreExceptionelleClient<$Result.GetResult<Prisma.$OffreExceptionellePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OffreExceptionelle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreExceptionelleFindFirstOrThrowArgs} args - Arguments to find a OffreExceptionelle
     * @example
     * // Get one OffreExceptionelle
     * const offreExceptionelle = await prisma.offreExceptionelle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OffreExceptionelleFindFirstOrThrowArgs>(args?: SelectSubset<T, OffreExceptionelleFindFirstOrThrowArgs<ExtArgs>>): Prisma__OffreExceptionelleClient<$Result.GetResult<Prisma.$OffreExceptionellePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OffreExceptionelles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreExceptionelleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OffreExceptionelles
     * const offreExceptionelles = await prisma.offreExceptionelle.findMany()
     * 
     * // Get first 10 OffreExceptionelles
     * const offreExceptionelles = await prisma.offreExceptionelle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offreExceptionelleWithIdOnly = await prisma.offreExceptionelle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OffreExceptionelleFindManyArgs>(args?: SelectSubset<T, OffreExceptionelleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffreExceptionellePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OffreExceptionelle.
     * @param {OffreExceptionelleCreateArgs} args - Arguments to create a OffreExceptionelle.
     * @example
     * // Create one OffreExceptionelle
     * const OffreExceptionelle = await prisma.offreExceptionelle.create({
     *   data: {
     *     // ... data to create a OffreExceptionelle
     *   }
     * })
     * 
     */
    create<T extends OffreExceptionelleCreateArgs>(args: SelectSubset<T, OffreExceptionelleCreateArgs<ExtArgs>>): Prisma__OffreExceptionelleClient<$Result.GetResult<Prisma.$OffreExceptionellePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OffreExceptionelles.
     * @param {OffreExceptionelleCreateManyArgs} args - Arguments to create many OffreExceptionelles.
     * @example
     * // Create many OffreExceptionelles
     * const offreExceptionelle = await prisma.offreExceptionelle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OffreExceptionelleCreateManyArgs>(args?: SelectSubset<T, OffreExceptionelleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OffreExceptionelles and returns the data saved in the database.
     * @param {OffreExceptionelleCreateManyAndReturnArgs} args - Arguments to create many OffreExceptionelles.
     * @example
     * // Create many OffreExceptionelles
     * const offreExceptionelle = await prisma.offreExceptionelle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OffreExceptionelles and only return the `id`
     * const offreExceptionelleWithIdOnly = await prisma.offreExceptionelle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OffreExceptionelleCreateManyAndReturnArgs>(args?: SelectSubset<T, OffreExceptionelleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffreExceptionellePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OffreExceptionelle.
     * @param {OffreExceptionelleDeleteArgs} args - Arguments to delete one OffreExceptionelle.
     * @example
     * // Delete one OffreExceptionelle
     * const OffreExceptionelle = await prisma.offreExceptionelle.delete({
     *   where: {
     *     // ... filter to delete one OffreExceptionelle
     *   }
     * })
     * 
     */
    delete<T extends OffreExceptionelleDeleteArgs>(args: SelectSubset<T, OffreExceptionelleDeleteArgs<ExtArgs>>): Prisma__OffreExceptionelleClient<$Result.GetResult<Prisma.$OffreExceptionellePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OffreExceptionelle.
     * @param {OffreExceptionelleUpdateArgs} args - Arguments to update one OffreExceptionelle.
     * @example
     * // Update one OffreExceptionelle
     * const offreExceptionelle = await prisma.offreExceptionelle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OffreExceptionelleUpdateArgs>(args: SelectSubset<T, OffreExceptionelleUpdateArgs<ExtArgs>>): Prisma__OffreExceptionelleClient<$Result.GetResult<Prisma.$OffreExceptionellePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OffreExceptionelles.
     * @param {OffreExceptionelleDeleteManyArgs} args - Arguments to filter OffreExceptionelles to delete.
     * @example
     * // Delete a few OffreExceptionelles
     * const { count } = await prisma.offreExceptionelle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OffreExceptionelleDeleteManyArgs>(args?: SelectSubset<T, OffreExceptionelleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OffreExceptionelles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreExceptionelleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OffreExceptionelles
     * const offreExceptionelle = await prisma.offreExceptionelle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OffreExceptionelleUpdateManyArgs>(args: SelectSubset<T, OffreExceptionelleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OffreExceptionelles and returns the data updated in the database.
     * @param {OffreExceptionelleUpdateManyAndReturnArgs} args - Arguments to update many OffreExceptionelles.
     * @example
     * // Update many OffreExceptionelles
     * const offreExceptionelle = await prisma.offreExceptionelle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OffreExceptionelles and only return the `id`
     * const offreExceptionelleWithIdOnly = await prisma.offreExceptionelle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OffreExceptionelleUpdateManyAndReturnArgs>(args: SelectSubset<T, OffreExceptionelleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OffreExceptionellePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OffreExceptionelle.
     * @param {OffreExceptionelleUpsertArgs} args - Arguments to update or create a OffreExceptionelle.
     * @example
     * // Update or create a OffreExceptionelle
     * const offreExceptionelle = await prisma.offreExceptionelle.upsert({
     *   create: {
     *     // ... data to create a OffreExceptionelle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OffreExceptionelle we want to update
     *   }
     * })
     */
    upsert<T extends OffreExceptionelleUpsertArgs>(args: SelectSubset<T, OffreExceptionelleUpsertArgs<ExtArgs>>): Prisma__OffreExceptionelleClient<$Result.GetResult<Prisma.$OffreExceptionellePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OffreExceptionelles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreExceptionelleCountArgs} args - Arguments to filter OffreExceptionelles to count.
     * @example
     * // Count the number of OffreExceptionelles
     * const count = await prisma.offreExceptionelle.count({
     *   where: {
     *     // ... the filter for the OffreExceptionelles we want to count
     *   }
     * })
    **/
    count<T extends OffreExceptionelleCountArgs>(
      args?: Subset<T, OffreExceptionelleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OffreExceptionelleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OffreExceptionelle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreExceptionelleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OffreExceptionelleAggregateArgs>(args: Subset<T, OffreExceptionelleAggregateArgs>): Prisma.PrismaPromise<GetOffreExceptionelleAggregateType<T>>

    /**
     * Group by OffreExceptionelle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OffreExceptionelleGroupByArgs} args - Group by arguments.
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
      T extends OffreExceptionelleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OffreExceptionelleGroupByArgs['orderBy'] }
        : { orderBy?: OffreExceptionelleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OffreExceptionelleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOffreExceptionelleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OffreExceptionelle model
   */
  readonly fields: OffreExceptionelleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OffreExceptionelle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OffreExceptionelleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OffreExceptionelle model
   */
  interface OffreExceptionelleFieldRefs {
    readonly id: FieldRef<"OffreExceptionelle", 'String'>
    readonly createdAt: FieldRef<"OffreExceptionelle", 'DateTime'>
    readonly updatedAt: FieldRef<"OffreExceptionelle", 'DateTime'>
    readonly vehicule: FieldRef<"OffreExceptionelle", 'String'>
    readonly prixPromotionnel: FieldRef<"OffreExceptionelle", 'String'>
    readonly remise: FieldRef<"OffreExceptionelle", 'String'>
    readonly name: FieldRef<"OffreExceptionelle", 'String'>
    readonly email: FieldRef<"OffreExceptionelle", 'String'>
    readonly phone: FieldRef<"OffreExceptionelle", 'String'>
    readonly message: FieldRef<"OffreExceptionelle", 'String'>
    readonly status: FieldRef<"OffreExceptionelle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OffreExceptionelle findUnique
   */
  export type OffreExceptionelleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
    /**
     * Filter, which OffreExceptionelle to fetch.
     */
    where: OffreExceptionelleWhereUniqueInput
  }

  /**
   * OffreExceptionelle findUniqueOrThrow
   */
  export type OffreExceptionelleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
    /**
     * Filter, which OffreExceptionelle to fetch.
     */
    where: OffreExceptionelleWhereUniqueInput
  }

  /**
   * OffreExceptionelle findFirst
   */
  export type OffreExceptionelleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
    /**
     * Filter, which OffreExceptionelle to fetch.
     */
    where?: OffreExceptionelleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffreExceptionelles to fetch.
     */
    orderBy?: OffreExceptionelleOrderByWithRelationInput | OffreExceptionelleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OffreExceptionelles.
     */
    cursor?: OffreExceptionelleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffreExceptionelles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffreExceptionelles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OffreExceptionelles.
     */
    distinct?: OffreExceptionelleScalarFieldEnum | OffreExceptionelleScalarFieldEnum[]
  }

  /**
   * OffreExceptionelle findFirstOrThrow
   */
  export type OffreExceptionelleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
    /**
     * Filter, which OffreExceptionelle to fetch.
     */
    where?: OffreExceptionelleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffreExceptionelles to fetch.
     */
    orderBy?: OffreExceptionelleOrderByWithRelationInput | OffreExceptionelleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OffreExceptionelles.
     */
    cursor?: OffreExceptionelleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffreExceptionelles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffreExceptionelles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OffreExceptionelles.
     */
    distinct?: OffreExceptionelleScalarFieldEnum | OffreExceptionelleScalarFieldEnum[]
  }

  /**
   * OffreExceptionelle findMany
   */
  export type OffreExceptionelleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
    /**
     * Filter, which OffreExceptionelles to fetch.
     */
    where?: OffreExceptionelleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OffreExceptionelles to fetch.
     */
    orderBy?: OffreExceptionelleOrderByWithRelationInput | OffreExceptionelleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OffreExceptionelles.
     */
    cursor?: OffreExceptionelleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OffreExceptionelles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OffreExceptionelles.
     */
    skip?: number
    distinct?: OffreExceptionelleScalarFieldEnum | OffreExceptionelleScalarFieldEnum[]
  }

  /**
   * OffreExceptionelle create
   */
  export type OffreExceptionelleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
    /**
     * The data needed to create a OffreExceptionelle.
     */
    data: XOR<OffreExceptionelleCreateInput, OffreExceptionelleUncheckedCreateInput>
  }

  /**
   * OffreExceptionelle createMany
   */
  export type OffreExceptionelleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OffreExceptionelles.
     */
    data: OffreExceptionelleCreateManyInput | OffreExceptionelleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OffreExceptionelle createManyAndReturn
   */
  export type OffreExceptionelleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
    /**
     * The data used to create many OffreExceptionelles.
     */
    data: OffreExceptionelleCreateManyInput | OffreExceptionelleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OffreExceptionelle update
   */
  export type OffreExceptionelleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
    /**
     * The data needed to update a OffreExceptionelle.
     */
    data: XOR<OffreExceptionelleUpdateInput, OffreExceptionelleUncheckedUpdateInput>
    /**
     * Choose, which OffreExceptionelle to update.
     */
    where: OffreExceptionelleWhereUniqueInput
  }

  /**
   * OffreExceptionelle updateMany
   */
  export type OffreExceptionelleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OffreExceptionelles.
     */
    data: XOR<OffreExceptionelleUpdateManyMutationInput, OffreExceptionelleUncheckedUpdateManyInput>
    /**
     * Filter which OffreExceptionelles to update
     */
    where?: OffreExceptionelleWhereInput
    /**
     * Limit how many OffreExceptionelles to update.
     */
    limit?: number
  }

  /**
   * OffreExceptionelle updateManyAndReturn
   */
  export type OffreExceptionelleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
    /**
     * The data used to update OffreExceptionelles.
     */
    data: XOR<OffreExceptionelleUpdateManyMutationInput, OffreExceptionelleUncheckedUpdateManyInput>
    /**
     * Filter which OffreExceptionelles to update
     */
    where?: OffreExceptionelleWhereInput
    /**
     * Limit how many OffreExceptionelles to update.
     */
    limit?: number
  }

  /**
   * OffreExceptionelle upsert
   */
  export type OffreExceptionelleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
    /**
     * The filter to search for the OffreExceptionelle to update in case it exists.
     */
    where: OffreExceptionelleWhereUniqueInput
    /**
     * In case the OffreExceptionelle found by the `where` argument doesn't exist, create a new OffreExceptionelle with this data.
     */
    create: XOR<OffreExceptionelleCreateInput, OffreExceptionelleUncheckedCreateInput>
    /**
     * In case the OffreExceptionelle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OffreExceptionelleUpdateInput, OffreExceptionelleUncheckedUpdateInput>
  }

  /**
   * OffreExceptionelle delete
   */
  export type OffreExceptionelleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
    /**
     * Filter which OffreExceptionelle to delete.
     */
    where: OffreExceptionelleWhereUniqueInput
  }

  /**
   * OffreExceptionelle deleteMany
   */
  export type OffreExceptionelleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OffreExceptionelles to delete
     */
    where?: OffreExceptionelleWhereInput
    /**
     * Limit how many OffreExceptionelles to delete.
     */
    limit?: number
  }

  /**
   * OffreExceptionelle without action
   */
  export type OffreExceptionelleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OffreExceptionelle
     */
    select?: OffreExceptionelleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OffreExceptionelle
     */
    omit?: OffreExceptionelleOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FactureProformaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    carName: 'carName',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    status: 'status'
  };

  export type FactureProformaScalarFieldEnum = (typeof FactureProformaScalarFieldEnum)[keyof typeof FactureProformaScalarFieldEnum]


  export const OffreSpecialeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    status: 'status'
  };

  export type OffreSpecialeScalarFieldEnum = (typeof OffreSpecialeScalarFieldEnum)[keyof typeof OffreSpecialeScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    email: 'email',
    phone: 'phone',
    subject: 'subject',
    message: 'message',
    status: 'status'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const ReservationsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    voiture: 'voiture',
    name: 'name',
    prenoms: 'prenoms',
    email: 'email',
    phone: 'phone',
    date: 'date',
    message: 'message',
    status: 'status'
  };

  export type ReservationsScalarFieldEnum = (typeof ReservationsScalarFieldEnum)[keyof typeof ReservationsScalarFieldEnum]


  export const CommandesAccessoiresScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    phone: 'phone',
    message: 'message',
    status: 'status'
  };

  export type CommandesAccessoiresScalarFieldEnum = (typeof CommandesAccessoiresScalarFieldEnum)[keyof typeof CommandesAccessoiresScalarFieldEnum]


  export const OffreExceptionelleScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    vehicule: 'vehicule',
    prixPromotionnel: 'prixPromotionnel',
    remise: 'remise',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    status: 'status'
  };

  export type OffreExceptionelleScalarFieldEnum = (typeof OffreExceptionelleScalarFieldEnum)[keyof typeof OffreExceptionelleScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    department?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    department?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    department?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FactureProformaWhereInput = {
    AND?: FactureProformaWhereInput | FactureProformaWhereInput[]
    OR?: FactureProformaWhereInput[]
    NOT?: FactureProformaWhereInput | FactureProformaWhereInput[]
    id?: StringFilter<"FactureProforma"> | string
    createdAt?: DateTimeFilter<"FactureProforma"> | Date | string
    carName?: StringFilter<"FactureProforma"> | string
    name?: StringFilter<"FactureProforma"> | string
    email?: StringFilter<"FactureProforma"> | string
    phone?: StringFilter<"FactureProforma"> | string
    message?: StringFilter<"FactureProforma"> | string
    status?: StringFilter<"FactureProforma"> | string
  }

  export type FactureProformaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    carName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type FactureProformaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FactureProformaWhereInput | FactureProformaWhereInput[]
    OR?: FactureProformaWhereInput[]
    NOT?: FactureProformaWhereInput | FactureProformaWhereInput[]
    createdAt?: DateTimeFilter<"FactureProforma"> | Date | string
    carName?: StringFilter<"FactureProforma"> | string
    name?: StringFilter<"FactureProforma"> | string
    email?: StringFilter<"FactureProforma"> | string
    phone?: StringFilter<"FactureProforma"> | string
    message?: StringFilter<"FactureProforma"> | string
    status?: StringFilter<"FactureProforma"> | string
  }, "id">

  export type FactureProformaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    carName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    _count?: FactureProformaCountOrderByAggregateInput
    _max?: FactureProformaMaxOrderByAggregateInput
    _min?: FactureProformaMinOrderByAggregateInput
  }

  export type FactureProformaScalarWhereWithAggregatesInput = {
    AND?: FactureProformaScalarWhereWithAggregatesInput | FactureProformaScalarWhereWithAggregatesInput[]
    OR?: FactureProformaScalarWhereWithAggregatesInput[]
    NOT?: FactureProformaScalarWhereWithAggregatesInput | FactureProformaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FactureProforma"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FactureProforma"> | Date | string
    carName?: StringWithAggregatesFilter<"FactureProforma"> | string
    name?: StringWithAggregatesFilter<"FactureProforma"> | string
    email?: StringWithAggregatesFilter<"FactureProforma"> | string
    phone?: StringWithAggregatesFilter<"FactureProforma"> | string
    message?: StringWithAggregatesFilter<"FactureProforma"> | string
    status?: StringWithAggregatesFilter<"FactureProforma"> | string
  }

  export type OffreSpecialeWhereInput = {
    AND?: OffreSpecialeWhereInput | OffreSpecialeWhereInput[]
    OR?: OffreSpecialeWhereInput[]
    NOT?: OffreSpecialeWhereInput | OffreSpecialeWhereInput[]
    id?: StringFilter<"OffreSpeciale"> | string
    createdAt?: DateTimeFilter<"OffreSpeciale"> | Date | string
    updatedAt?: DateTimeFilter<"OffreSpeciale"> | Date | string
    name?: StringFilter<"OffreSpeciale"> | string
    email?: StringFilter<"OffreSpeciale"> | string
    phone?: StringFilter<"OffreSpeciale"> | string
    message?: StringFilter<"OffreSpeciale"> | string
    status?: StringFilter<"OffreSpeciale"> | string
  }

  export type OffreSpecialeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type OffreSpecialeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OffreSpecialeWhereInput | OffreSpecialeWhereInput[]
    OR?: OffreSpecialeWhereInput[]
    NOT?: OffreSpecialeWhereInput | OffreSpecialeWhereInput[]
    createdAt?: DateTimeFilter<"OffreSpeciale"> | Date | string
    updatedAt?: DateTimeFilter<"OffreSpeciale"> | Date | string
    name?: StringFilter<"OffreSpeciale"> | string
    email?: StringFilter<"OffreSpeciale"> | string
    phone?: StringFilter<"OffreSpeciale"> | string
    message?: StringFilter<"OffreSpeciale"> | string
    status?: StringFilter<"OffreSpeciale"> | string
  }, "id">

  export type OffreSpecialeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    _count?: OffreSpecialeCountOrderByAggregateInput
    _max?: OffreSpecialeMaxOrderByAggregateInput
    _min?: OffreSpecialeMinOrderByAggregateInput
  }

  export type OffreSpecialeScalarWhereWithAggregatesInput = {
    AND?: OffreSpecialeScalarWhereWithAggregatesInput | OffreSpecialeScalarWhereWithAggregatesInput[]
    OR?: OffreSpecialeScalarWhereWithAggregatesInput[]
    NOT?: OffreSpecialeScalarWhereWithAggregatesInput | OffreSpecialeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OffreSpeciale"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OffreSpeciale"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OffreSpeciale"> | Date | string
    name?: StringWithAggregatesFilter<"OffreSpeciale"> | string
    email?: StringWithAggregatesFilter<"OffreSpeciale"> | string
    phone?: StringWithAggregatesFilter<"OffreSpeciale"> | string
    message?: StringWithAggregatesFilter<"OffreSpeciale"> | string
    status?: StringWithAggregatesFilter<"OffreSpeciale"> | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    subject?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    status?: StringFilter<"Contact"> | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    phone?: StringFilter<"Contact"> | string
    subject?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    status?: StringFilter<"Contact"> | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringWithAggregatesFilter<"Contact"> | string
    subject?: StringWithAggregatesFilter<"Contact"> | string
    message?: StringWithAggregatesFilter<"Contact"> | string
    status?: StringWithAggregatesFilter<"Contact"> | string
  }

  export type ReservationsWhereInput = {
    AND?: ReservationsWhereInput | ReservationsWhereInput[]
    OR?: ReservationsWhereInput[]
    NOT?: ReservationsWhereInput | ReservationsWhereInput[]
    id?: StringFilter<"Reservations"> | string
    createdAt?: DateTimeFilter<"Reservations"> | Date | string
    updatedAt?: DateTimeFilter<"Reservations"> | Date | string
    voiture?: StringFilter<"Reservations"> | string
    name?: StringFilter<"Reservations"> | string
    prenoms?: StringFilter<"Reservations"> | string
    email?: StringFilter<"Reservations"> | string
    phone?: StringFilter<"Reservations"> | string
    date?: StringFilter<"Reservations"> | string
    message?: StringFilter<"Reservations"> | string
    status?: StringFilter<"Reservations"> | string
  }

  export type ReservationsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    voiture?: SortOrder
    name?: SortOrder
    prenoms?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    date?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type ReservationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationsWhereInput | ReservationsWhereInput[]
    OR?: ReservationsWhereInput[]
    NOT?: ReservationsWhereInput | ReservationsWhereInput[]
    createdAt?: DateTimeFilter<"Reservations"> | Date | string
    updatedAt?: DateTimeFilter<"Reservations"> | Date | string
    voiture?: StringFilter<"Reservations"> | string
    name?: StringFilter<"Reservations"> | string
    prenoms?: StringFilter<"Reservations"> | string
    email?: StringFilter<"Reservations"> | string
    phone?: StringFilter<"Reservations"> | string
    date?: StringFilter<"Reservations"> | string
    message?: StringFilter<"Reservations"> | string
    status?: StringFilter<"Reservations"> | string
  }, "id">

  export type ReservationsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    voiture?: SortOrder
    name?: SortOrder
    prenoms?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    date?: SortOrder
    message?: SortOrder
    status?: SortOrder
    _count?: ReservationsCountOrderByAggregateInput
    _max?: ReservationsMaxOrderByAggregateInput
    _min?: ReservationsMinOrderByAggregateInput
  }

  export type ReservationsScalarWhereWithAggregatesInput = {
    AND?: ReservationsScalarWhereWithAggregatesInput | ReservationsScalarWhereWithAggregatesInput[]
    OR?: ReservationsScalarWhereWithAggregatesInput[]
    NOT?: ReservationsScalarWhereWithAggregatesInput | ReservationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservations"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reservations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservations"> | Date | string
    voiture?: StringWithAggregatesFilter<"Reservations"> | string
    name?: StringWithAggregatesFilter<"Reservations"> | string
    prenoms?: StringWithAggregatesFilter<"Reservations"> | string
    email?: StringWithAggregatesFilter<"Reservations"> | string
    phone?: StringWithAggregatesFilter<"Reservations"> | string
    date?: StringWithAggregatesFilter<"Reservations"> | string
    message?: StringWithAggregatesFilter<"Reservations"> | string
    status?: StringWithAggregatesFilter<"Reservations"> | string
  }

  export type CommandesAccessoiresWhereInput = {
    AND?: CommandesAccessoiresWhereInput | CommandesAccessoiresWhereInput[]
    OR?: CommandesAccessoiresWhereInput[]
    NOT?: CommandesAccessoiresWhereInput | CommandesAccessoiresWhereInput[]
    id?: StringFilter<"CommandesAccessoires"> | string
    createdAt?: DateTimeFilter<"CommandesAccessoires"> | Date | string
    updatedAt?: DateTimeFilter<"CommandesAccessoires"> | Date | string
    nom?: StringFilter<"CommandesAccessoires"> | string
    prenom?: StringFilter<"CommandesAccessoires"> | string
    email?: StringFilter<"CommandesAccessoires"> | string
    phone?: StringFilter<"CommandesAccessoires"> | string
    message?: StringFilter<"CommandesAccessoires"> | string
    status?: StringFilter<"CommandesAccessoires"> | string
  }

  export type CommandesAccessoiresOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type CommandesAccessoiresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommandesAccessoiresWhereInput | CommandesAccessoiresWhereInput[]
    OR?: CommandesAccessoiresWhereInput[]
    NOT?: CommandesAccessoiresWhereInput | CommandesAccessoiresWhereInput[]
    createdAt?: DateTimeFilter<"CommandesAccessoires"> | Date | string
    updatedAt?: DateTimeFilter<"CommandesAccessoires"> | Date | string
    nom?: StringFilter<"CommandesAccessoires"> | string
    prenom?: StringFilter<"CommandesAccessoires"> | string
    email?: StringFilter<"CommandesAccessoires"> | string
    phone?: StringFilter<"CommandesAccessoires"> | string
    message?: StringFilter<"CommandesAccessoires"> | string
    status?: StringFilter<"CommandesAccessoires"> | string
  }, "id">

  export type CommandesAccessoiresOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    _count?: CommandesAccessoiresCountOrderByAggregateInput
    _max?: CommandesAccessoiresMaxOrderByAggregateInput
    _min?: CommandesAccessoiresMinOrderByAggregateInput
  }

  export type CommandesAccessoiresScalarWhereWithAggregatesInput = {
    AND?: CommandesAccessoiresScalarWhereWithAggregatesInput | CommandesAccessoiresScalarWhereWithAggregatesInput[]
    OR?: CommandesAccessoiresScalarWhereWithAggregatesInput[]
    NOT?: CommandesAccessoiresScalarWhereWithAggregatesInput | CommandesAccessoiresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommandesAccessoires"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CommandesAccessoires"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommandesAccessoires"> | Date | string
    nom?: StringWithAggregatesFilter<"CommandesAccessoires"> | string
    prenom?: StringWithAggregatesFilter<"CommandesAccessoires"> | string
    email?: StringWithAggregatesFilter<"CommandesAccessoires"> | string
    phone?: StringWithAggregatesFilter<"CommandesAccessoires"> | string
    message?: StringWithAggregatesFilter<"CommandesAccessoires"> | string
    status?: StringWithAggregatesFilter<"CommandesAccessoires"> | string
  }

  export type OffreExceptionelleWhereInput = {
    AND?: OffreExceptionelleWhereInput | OffreExceptionelleWhereInput[]
    OR?: OffreExceptionelleWhereInput[]
    NOT?: OffreExceptionelleWhereInput | OffreExceptionelleWhereInput[]
    id?: StringFilter<"OffreExceptionelle"> | string
    createdAt?: DateTimeFilter<"OffreExceptionelle"> | Date | string
    updatedAt?: DateTimeFilter<"OffreExceptionelle"> | Date | string
    vehicule?: StringFilter<"OffreExceptionelle"> | string
    prixPromotionnel?: StringFilter<"OffreExceptionelle"> | string
    remise?: StringFilter<"OffreExceptionelle"> | string
    name?: StringFilter<"OffreExceptionelle"> | string
    email?: StringFilter<"OffreExceptionelle"> | string
    phone?: StringFilter<"OffreExceptionelle"> | string
    message?: StringFilter<"OffreExceptionelle"> | string
    status?: StringFilter<"OffreExceptionelle"> | string
  }

  export type OffreExceptionelleOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicule?: SortOrder
    prixPromotionnel?: SortOrder
    remise?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type OffreExceptionelleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OffreExceptionelleWhereInput | OffreExceptionelleWhereInput[]
    OR?: OffreExceptionelleWhereInput[]
    NOT?: OffreExceptionelleWhereInput | OffreExceptionelleWhereInput[]
    createdAt?: DateTimeFilter<"OffreExceptionelle"> | Date | string
    updatedAt?: DateTimeFilter<"OffreExceptionelle"> | Date | string
    vehicule?: StringFilter<"OffreExceptionelle"> | string
    prixPromotionnel?: StringFilter<"OffreExceptionelle"> | string
    remise?: StringFilter<"OffreExceptionelle"> | string
    name?: StringFilter<"OffreExceptionelle"> | string
    email?: StringFilter<"OffreExceptionelle"> | string
    phone?: StringFilter<"OffreExceptionelle"> | string
    message?: StringFilter<"OffreExceptionelle"> | string
    status?: StringFilter<"OffreExceptionelle"> | string
  }, "id">

  export type OffreExceptionelleOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicule?: SortOrder
    prixPromotionnel?: SortOrder
    remise?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
    _count?: OffreExceptionelleCountOrderByAggregateInput
    _max?: OffreExceptionelleMaxOrderByAggregateInput
    _min?: OffreExceptionelleMinOrderByAggregateInput
  }

  export type OffreExceptionelleScalarWhereWithAggregatesInput = {
    AND?: OffreExceptionelleScalarWhereWithAggregatesInput | OffreExceptionelleScalarWhereWithAggregatesInput[]
    OR?: OffreExceptionelleScalarWhereWithAggregatesInput[]
    NOT?: OffreExceptionelleScalarWhereWithAggregatesInput | OffreExceptionelleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OffreExceptionelle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OffreExceptionelle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OffreExceptionelle"> | Date | string
    vehicule?: StringWithAggregatesFilter<"OffreExceptionelle"> | string
    prixPromotionnel?: StringWithAggregatesFilter<"OffreExceptionelle"> | string
    remise?: StringWithAggregatesFilter<"OffreExceptionelle"> | string
    name?: StringWithAggregatesFilter<"OffreExceptionelle"> | string
    email?: StringWithAggregatesFilter<"OffreExceptionelle"> | string
    phone?: StringWithAggregatesFilter<"OffreExceptionelle"> | string
    message?: StringWithAggregatesFilter<"OffreExceptionelle"> | string
    status?: StringWithAggregatesFilter<"OffreExceptionelle"> | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    department?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    department?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactureProformaCreateInput = {
    id?: string
    createdAt?: Date | string
    carName: string
    name: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type FactureProformaUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    carName: string
    name: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type FactureProformaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FactureProformaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FactureProformaCreateManyInput = {
    id?: string
    createdAt?: Date | string
    carName: string
    name: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type FactureProformaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FactureProformaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OffreSpecialeCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type OffreSpecialeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type OffreSpecialeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OffreSpecialeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OffreSpecialeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type OffreSpecialeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OffreSpecialeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    subject: string
    message: string
    status?: string
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    subject: string
    message: string
    status?: string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    email: string
    phone: string
    subject: string
    message: string
    status?: string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    voiture: string
    name: string
    prenoms: string
    email: string
    phone: string
    date: string
    message: string
    status?: string
  }

  export type ReservationsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    voiture: string
    name: string
    prenoms: string
    email: string
    phone: string
    date: string
    message: string
    status?: string
  }

  export type ReservationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voiture?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prenoms?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voiture?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prenoms?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    voiture: string
    name: string
    prenoms: string
    email: string
    phone: string
    date: string
    message: string
    status?: string
  }

  export type ReservationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voiture?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prenoms?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReservationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voiture?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prenoms?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CommandesAccessoiresCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nom: string
    prenom: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type CommandesAccessoiresUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nom: string
    prenom: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type CommandesAccessoiresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CommandesAccessoiresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CommandesAccessoiresCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nom: string
    prenom: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type CommandesAccessoiresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CommandesAccessoiresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OffreExceptionelleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicule: string
    prixPromotionnel: string
    remise: string
    name: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type OffreExceptionelleUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicule: string
    prixPromotionnel: string
    remise: string
    name: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type OffreExceptionelleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicule?: StringFieldUpdateOperationsInput | string
    prixPromotionnel?: StringFieldUpdateOperationsInput | string
    remise?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OffreExceptionelleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicule?: StringFieldUpdateOperationsInput | string
    prixPromotionnel?: StringFieldUpdateOperationsInput | string
    remise?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OffreExceptionelleCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicule: string
    prixPromotionnel: string
    remise: string
    name: string
    email: string
    phone: string
    message: string
    status?: string
  }

  export type OffreExceptionelleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicule?: StringFieldUpdateOperationsInput | string
    prixPromotionnel?: StringFieldUpdateOperationsInput | string
    remise?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OffreExceptionelleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicule?: StringFieldUpdateOperationsInput | string
    prixPromotionnel?: StringFieldUpdateOperationsInput | string
    remise?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type FactureProformaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    carName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type FactureProformaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    carName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type FactureProformaMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    carName?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type OffreSpecialeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type OffreSpecialeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type OffreSpecialeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type ReservationsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    voiture?: SortOrder
    name?: SortOrder
    prenoms?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    date?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type ReservationsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    voiture?: SortOrder
    name?: SortOrder
    prenoms?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    date?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type ReservationsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    voiture?: SortOrder
    name?: SortOrder
    prenoms?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    date?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type CommandesAccessoiresCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type CommandesAccessoiresMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type CommandesAccessoiresMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type OffreExceptionelleCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicule?: SortOrder
    prixPromotionnel?: SortOrder
    remise?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type OffreExceptionelleMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicule?: SortOrder
    prixPromotionnel?: SortOrder
    remise?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type OffreExceptionelleMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicule?: SortOrder
    prixPromotionnel?: SortOrder
    remise?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    status?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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