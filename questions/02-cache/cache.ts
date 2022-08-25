import "datejs";

/**
 * This class should implement a standard cache
 */
export class InternalCache {
  public static DefaultExpirationMs: number = 5 * 60 * 1000; // 5 min expiration default

  /**
   * Get a record from the cache
   *
   * If the record does not exist, throw a NotFoundError
   *
   * If the record exists but is expired, throw an ExpiredRecordError and remove the record from the cache
   * @param key key to find in the cache
   * @returns the record from the cache
   */
  get<T>(key: string): T {
    // TODO implement
    throw new Error("not implemented");
  }

  /**
   * Try to get a record from the cache. If a cache miss, add the record to the cache before returning. The loader function
   * should only be called if the cache misses
   * @param key key to find in the cache
   * @param loadFunction the function to load the value if a cache miss occurs
   * @param options optional settings for the get/add function
   * @returns the cache value and a flag specifying if the value was added to the cache on this call
   */
  async getOrAdd<T>(
    key: string,
    loadFunction: () => T | Promise<T>,
    options?: ExpirationOptions
  ): Promise<{ value: T; isNew: boolean }> {
    // TODO implement
    throw new Error("not implemented");
  }

  /**
   * Add or update a record to/in the cache, updating the expiration date
   * @param key key to find in the cache
   * @param value value to load into the cache
   * @param options optional settings for the get/add function
   */
  addOrUpdate<T>(key: string, value: T, options?: ExpirationOptions) {
    // TODO implement
    throw new Error("not implemented");
  }

  /**
   * Get all keys of non-expired records in the cache
   * @returns array of all key names;j
   */
  getAllValidKeys<T>(options?: FilterOptions<T>): string[] {
    // TODO implement
    throw new Error("not implemented");
  }

  /**
   * Get generator of all non-expired key/value/expiration records in the cache
   */
  *getAllValidKeysEnumerator<T>(options?: FilterOptions<T>): Generator<{
    key: string;
    value: T;
    expiration: Date;
  }> {
    // TODO implement
    throw new Error("not implemented");
  }
}

export interface ExpirationOptions {
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
