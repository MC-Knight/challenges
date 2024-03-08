export class ObjectManipulator<T extends Record<string, any>> {
  constructor(protected obj: T) {}

  public set<K extends string, V>(
    key: K,
    value: V
  ): ObjectManipulator<Omit<T, K> & Record<K, V>> {
    return new ObjectManipulator({ ...this.obj, [key]: value });
  }

  public get<K extends keyof T>(key: K): T[K] {
    return this.obj[key];
  }

  public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject(): T {
    return this.obj;
  }
}

// record allows you to define key-pair values
