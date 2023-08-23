import {
    QueryClientProvider,
    QueryClient,
    QueryCache,
} from '@tanstack/react-query'
import { useAtom, Provider } from 'jotai'
import { useHydrateAtoms } from 'jotai/react/utils'
import { queryClientAtom } from 'jotai-tanstack-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App'
const queryClient = new QueryClient({
    defaultOptions: {
        // queries: {
        //   staleTime: Infinity,
        // },
    },
    queryCache: new QueryCache({
        onError: (error, query) => {
            // 🎉 only show error toasts if we already have data in the cache
            // which indicates a failed background update
            //   if (query.state.data !== undefined) {
            console.error(`______________ Something went wrong", ${error}`)// && error.message}`)
            //   }
        },
    }),
})
const HydrateAtoms = ({ children }: any) => {
    useHydrateAtoms([[queryClientAtom, queryClient]])
    return children
}
export function AppState(props: any) {
    return <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <Provider>
            <HydrateAtoms>
                <App />
            </HydrateAtoms>
        </Provider>
    </QueryClientProvider>
}