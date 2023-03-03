export type Getter<GValue, GParam extends any[] = []> = ((...param: GParam) => GValue);

export type StaticOrGetter<ReturnType, Args extends any[] = []> = ReturnType | Getter<ReturnType, Args>;

export function toGetter<ReturnType, Args extends any[]>(staticOrGetter: StaticOrGetter<ReturnType, Args>): ((...args: Args) => ReturnType) {
  return (...args: Args) => staticOrGetter instanceof Function ? staticOrGetter(...args) : staticOrGetter;
}
