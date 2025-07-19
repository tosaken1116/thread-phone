import { UseQueryOptions, UseSuspenseQueryOptions } from "@tanstack/react-query"

type QueryFn<TData = unknown> = () => Promise<TData>

export const generateQueryCreator = <TRepository>(domain: string) => {
  return <TData = unknown>(
    key: string,
    queryFn: (repository: TRepository) => QueryFn<TData>,
    defaultOptions?: Partial<UseQueryOptions<TData, Error>>
  ) => {
    return {
      keygen: {
        base: () => [domain],
        item: (id?: string | number) => id ? [domain, key, id] : [domain, key],
      },
      query: (repository: TRepository, options?: Partial<UseQueryOptions<TData, Error>>) => {
        const queryFunction = () => queryFn(repository)()
        const finalOptions: UseSuspenseQueryOptions<TData, Error> = {
          queryKey: [domain, key] as const,
          queryFn: queryFunction,
          ...(defaultOptions && { ...defaultOptions, queryFn: undefined }),
          ...(options && { ...options, queryFn: undefined }),
        }
        return finalOptions
      },
    }
  }
}
