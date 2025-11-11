import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Hero from '../components/layout/hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}
