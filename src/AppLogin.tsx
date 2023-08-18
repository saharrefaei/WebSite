import { useState, useRef, useEffect } from 'react'
import { AccountMain } from './types/authType'
import AppContext from "./AppContext";
import { AppRouter } from './AppRouter'
import useToast from 'hooks/useToast'
import { TextField } from 'assets/styles/styledMaterial';
import {
  Center
} from 'assets/styles/styled'
import moment from 'moment'
import {
  useQuery,
} from '@tanstack/react-query'
const { fetch: originalFetch } = window;
export default function AppLogin() {
  const [account, setAccount] = useState<AccountMain>()
  const nestlogin = useRef<any>()
  const showToast = useToast()
  const [gotoDiscordPage, setGotoDiscordPage] = useState<boolean>(false)
  const setAccountCallback = (ev: { detail: AccountMain }) => {
    if(true || ev.detail?.scopes.includes(import.meta.env.VITE_SCOPES)) {
      setAccount(ev.detail)
      const accessToken = ev.detail?.account?.accessToken
      if (accessToken) {
        window.fetch = async (...args) => {
          let [resource, config] = args;
          const isAPICall = resource.toString().indexOf(window.urlAPI) > -1
          if (resource && accessToken && isAPICall) {
            const skip = resource.toString().indexOf("tsos") > -1 && config.method == "POST";
            if(!skip) {
              config.headers = {
                Authorization: 'Bearer ' + accessToken,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            } else {
              config.headers = {
                Authorization: 'Bearer ' + accessToken,
              }
            }
          }
          try {
            const response = await originalFetch(resource, config);
            if (isAPICall) {
              const responseObject = await response.json()
              if (response.status != 200) {
                let extendMessage = ""
                try {
                  extendMessage = JSON.stringify(responseObject?.detail)
                } catch (error) {
                  debugger
                }
                const userNotExist = resource.indexOf('users/me?create=false') > -1 && response.status == 404
                if(!userNotExist) {
                  showToast(`Something went wrong for ${resource.toString().replace(window.urlAPI, '')} code: ${response.status}
                  ${extendMessage}`, 'warning')
                }
              }
              return [response, responseObject];
            } else {
              return response
            }
          } catch (error) {
            if (isAPICall) {
              showToast(`Something went wrong for ${resource.toString().replace(window.urlAPI, '')} error: ${error.message}`, 'warning')
            }
            console.error('---------- PROJECT --', error)
          }
        };
      }
    }
  }
  useEffect(() => {
    if (nestlogin.current) {
      nestlogin.current.addEventListener("loginsuccess", setAccountCallback)
    }
    console.log('---------- PROJECT --   APP INIT')
    return () => {
      console.log('---------- PROJECT --   APP CLEAN')
      if (nestlogin.current) {
        nestlogin.current.removeEventListener("loginsuccess", setAccountCallback)
      }
    }
  }, [])
  return (
    <nest-login style={{ width: "100%" }} ref={nestlogin}
      log debug
      scopes={import.meta.env.VITE_SCOPES}
      clientId={import.meta.env.VITE_CLIENT_ID}
      isB2C
      tenantShortName="TheNestB2C"
      signUpSignInID="B2C_1A_SIGNUP_SIGNIN_GROUPS"
      swNotUseBearer
      returnObjects={true}
    >
      {account && <AppRouter />}
      {!account && <div>Authenticating</div>}
    </nest-login>
  )
}