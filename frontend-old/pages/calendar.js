import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Calendar() {
    const iframeStyle = {
        borderWidth: 0
    }
    return (
        <>
            <Layout>
                <Head>
                    <title>{siteTitle('Calendar')}</title>
                </Head>
                <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23B39DDB&ctz=America%2FChicago&title&showNav=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&showDate=1&mode=MONTH&src=a3M4ZWt0czBtaHFjdjNnZGhoOTltNWtqZWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5" style={iframeStyle} width="800" height="600" frameborder="0" scrolling="no"></iframe>
                </div>

            </Layout>
        </>
    )
}