/** type options for Cacche memory Instance on Instance For Singleton */
type CacheMemoryOptions = {
  target?: "browser" | "node" | "both" /** @default browser */;
  scretKey?: string;
};
export class CacheMemory<Schema = any> {
  private static _instance: CacheMemory;
  private cache = new Map<string | number | symbol, Schema>();
  private _refs = new Map<string, typeof this.cache>();

  /** contructor private */
  /** create database localStorage with new instance Object Cahche In Memory */
  constructor(private _key: string, options?: CacheMemoryOptions) {}

  /** intance with sigleton design paterrn */
  // create db on local with singleton keys
  static init<Schema = any>(
    key: string,
    options?: CacheMemoryOptions
  ): CacheMemory<Schema> {
    if (!CacheMemory._instance) {
      CacheMemory._instance = new CacheMemory<Schema>(key);
    }
    return CacheMemory._instance;
  }

  /** create referensi document container */
  ref<SchemaData extends Schema>(
    ref: string
  ): {
    set: (key: string, value: SchemaData) => void;
    get: (key: string) => void;
  } {
    this._refs.set(ref, this.cache);

    return {
      set: this.set.bind(this),
      get: this.get.bind(this),
    };
  }

  /** get All Value return array of schema */
  private get values(): Schema[] {
    return Array.from(this.cache.values());
  }

  private get(key: string | number | symbol) {}

  private hash(key: string | number | symbol): boolean {
    return this.cache.has(key);
  }

  private set<V = any>(key: string | number | symbol, value: V) {}

  private query() {}

  private watch(callback: (newValue: Schema[], oldValue: Schema[]) => void) {}
}

const blog = new CacheMemory<{ message: string }>("app");

const blogRef = blog.ref("notification");
