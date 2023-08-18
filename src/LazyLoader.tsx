import { Suspense } from 'react'
import { lazily } from 'react-lazily';
import {SpinnerInLogo} from 'components/Loading';
export default function LazyLoader() {
    const { AppState } = lazily(() => import('./AppState'));
    return <Suspense fallback={<SpinnerInLogo />}>
        <AppState />
    </Suspense>
}