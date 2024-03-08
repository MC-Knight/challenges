export function map(
  mapper: (value: any, index: number, array: any[]) => unknown,
  input: any[]
): any[] | Function {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: any[]) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.map(mapper);
    };
  }
  return input.map(mapper);
}

export function filter<T>(
  filterer: (value: T) => T,
  input: T[]
): T[] | Function {
  if (arguments.length === 0) {
    return filter;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: T[]) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.filter(filterer);
    };
  }
  return input.filter(filterer);
}

export function reduce<T>(
  reducer: (value: T) => T,
  initialValue: T,
  input: T[]
): T | Function {
  if (arguments.length === 0) {
    return reduce;
  }
  if (arguments.length === 1) {
    return function subFunction(subInitialValue: T, subInput: T[]) {
      if (arguments.length === 0) {
        return subFunction;
      }
      if (arguments.length === 1) {
        return function subSubFunction(subSubInput: T[]) {
          if (arguments.length === 0) {
            return subSubFunction;
          }
          return subSubInput.reduce(reducer, subInitialValue);
        };
      }
      return subInput.reduce(reducer, subInitialValue);
    };
  }
  if (arguments.length === 2) {
    return function subFunction(subInput: T[]) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.reduce(reducer, initialValue);
    };
  }
  return input.reduce(reducer, initialValue);
}

export function add(a: number, b: number): number | Function {
  if (arguments.length === 0) {
    return add;
  }
  if (arguments.length === 1) {
    return function subFunction(subB: number) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a + subB;
    };
  }
  return a + b;
}

export function subtract(a: number, b: number): number | Function {
  if (arguments.length === 0) {
    return subtract;
  }
  if (arguments.length === 1) {
    return function subFunction(subB: number) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a - subB;
    };
  }
  return a - b;
}

export function prop<T>(
  obj: Record<string, T>,
  propName: string
): T | Function {
  if (arguments.length === 0) {
    return prop;
  }
  if (arguments.length === 1) {
    return function subFunction(subPropName: string) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return obj[subPropName];
    };
  }
  return obj[propName];
}

export function pipe(...functions: Function[]): any {
  if (arguments.length === 0) {
    return pipe;
  }
  return function subFunction() {
    let nextArguments = Array.from(arguments);
    let result;
    for (const func of functions) {
      result = func(...nextArguments);
      nextArguments = [result];
    }
    return result;
  };
}
