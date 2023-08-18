export type AccountMain = {
    account: Account,
    roles: string[],
    groups: string[],
    scopes: string[],
}

type Account = {
    accessToken: string,
    idToken: string,
    account: AccountInner,
}

type AccountInner = {
    name: string,
}
