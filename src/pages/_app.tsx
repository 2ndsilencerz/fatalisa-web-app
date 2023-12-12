import MainLayout from "./layout"

export default function App({Component, pageProps}: any): JSX.Element {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
} 