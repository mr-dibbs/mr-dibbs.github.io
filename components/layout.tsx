import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import SEO from './SEO'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      {/* <Meta /> */}
      <SEO />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
