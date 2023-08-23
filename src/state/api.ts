import { atom } from 'jotai'
import { atomsWithQuery } from 'jotai-tanstack-query'
import { enableApiAtom, apiParameterAtom } from 'state/application'
export const [, apiAtom] = atomsWithQuery((get) => ({
    enabled: get(enableApiAtom),
    queryKey: ['someapi', get(apiParameterAtom)],
    queryFn: async ({ queryKey: [, apiParameter] }) => {
      try {
        let url = `${window.urlAPI}/someapi?par=${apiParameter}`
        const data = await window.fetch(url, {
          method: 'GET', headers: {
            "x-api-key": "some_api_key"
          }
        })
        return data
      } catch (error) {
        debugger
        console.error(error)
        throw error
      }
    },
  }))