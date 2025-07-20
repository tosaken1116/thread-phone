import { UseQueryOptions, UseSuspenseQueryOptions, UseMutationOptions, QueryClient, QueryKey, InvalidateQueryFilters } from "@tanstack/react-query"

type QueryFn<TData = unknown> = () => Promise<TData>

export const generateQueryCreator = <TRepository>(domain: string) => {
  return <TData = unknown>(
    key: string,
    queryFn: (repository: TRepository) => QueryFn<TData>,
    defaultOptions?: Partial<UseQueryOptions<TData, Error>>
  ) => {
    return {
      keygen: {
        base: () => [domain] as InvalidateQueryFilters,
        item: () => [domain, key] as InvalidateQueryFilters,
      },
      query: (repository: TRepository, options?: Partial<UseQueryOptions<TData, Error>>) => {
        const queryFunction = () => queryFn(repository)()
        const finalOptions: UseSuspenseQueryOptions<TData, Error> = {
          ...(defaultOptions && { ...defaultOptions, queryFn: undefined }),
          ...(options && { ...options, queryFn: undefined }),
          queryKey: [domain, key] as const,
          queryFn: queryFunction,
        }
        return finalOptions
      },
    }
  }
}


export const generateMutationCreator = <TRepository>() => {
  return <TData = unknown, TVariables = void>(
    mutationFn: (repository: TRepository, queryClient: QueryClient, params: TVariables) => Promise<TData>,
    defaultOptions?: Partial<UseMutationOptions<TData, Error, TVariables>>
  ) => {
    return (
      repository: TRepository,
      queryClient: QueryClient
    ) => {
      const options: UseMutationOptions<TData, Error, TVariables> = {
        mutationFn: async (variables: TVariables) => {
          return await mutationFn(repository, queryClient, variables)
        },
        ...defaultOptions,
      }
      return options
    }
  }
}