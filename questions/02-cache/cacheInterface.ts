export interface IInternalCache<T> {
  /**
   * Get a record from the cache
   *
   * If the record does not exist, throw a NotFoundError
   *
   * If the record exists but is expired, throw an ExpiredRecordError and remove the record from the cache
   * @param key key to find in the cache
   * @returns the record from the cache
   */
  get(key: string): T;

  /**
   * Try to get a record from the cache. If a cache miss, add the record to the cache before returning. The loader function
   * should only be called if the cache misses
   * @param key key to find in the cache
   * @param loadFunction the function to load the value if a cache miss occurs
   * @param options optional settings for the get/add function
   * @returns the cache value and a flag specifying if the value was added to the cache on this call
   */
  getOrAdd(
    key: string,
    loadFunction: () => T | Promise<T>,
    options?: ExpirationOptions
  ): Promise<{ value: T; isNew: boolean }>;

  /**
   * Add or update a record to/in the cache, updating the expiration date
   * @param key key to find in the cache
   * @param value value to load into the cache
   * @param options optional settings for the get/add function
   */
  addOrUpdate(key: string, value: T, options?: ExpirationOptions): void;

  /**
   * Get all keys of non-expired records in the cache
   * @returns array of all key names
   */
  getAllValidKeys(options?: FilterOptions<T>): string[];

  /**
   * Get generator of all non-expired key/value/expiration records in the cache
   */
  getAllValidKeysEnumerator(
    options?: FilterOptions<T>
  ): Generator<{ key: string; value: T; expiration: Date }>;
}

interface ExpirationOptions {
  expirationInMs?: number;
}

export interface FilterOptions<T> {
  filter?: (input: T) => boolean;
}

export class NotFoundError extends Error {
  constructor(key: string) {
    super(`Cache record with key "${key} was not found"`);
    Object.setPrototypeOf(this.message, NotFoundError.prototype);
  }
}

export class ExpiredRecordError extends Error {
  constructor(key: string, expiration: Date, now: Date) {
    super(
      `Cache record with key "${key} expired at ${expiration.toISOString()} - current time is ${now.toISOString()}"`
    );
    Object.setPrototypeOf(this.message, NotFoundError.prototype);
  }
}
