export const SpinnerInLogo = () => {
    return <div style={{  width: '100vw', height: '100vh', textAlign: 'center', display: 'flex', justifyContent: 'center', justifyItems: 'center', alignContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'relative', width: 200 }}>
            <img style={{ width: 200, marginTop: 3 }} src="/vite.svg" alt="logo" />
            <div>Project name</div>
        </div>
    </div>
}
export const Spinner = (props: any) => {
    const { vertical } = props
    return <div style={{  textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
        <div style={{position: 'relative', width: 200, display: 'flex', flexDirection: vertical ? 'column' : 'row', justifyContent: 'center', justifyItems: 'center', alignContent: 'center', alignItems: 'center' }}>
            <img className="spinner" style={{ width: 45, marginTop: 3}} src="/vite.svg" alt="logo" />
            <div>Loading...</div>
        </div>
    </div>
}