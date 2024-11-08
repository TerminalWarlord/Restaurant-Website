import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <main>
      <header
        className=""
        style={{
          background: `
            url('/images/header-bg.png'),
            linear-gradient(123deg, #BD1F17 40.8%, #A51D13 76.4%, #8E1B0F 120.69%)
          `
        }}
      >
        <Header />
        <Hero />
      </header>
      <Introduction />
    </main>
  )
}

export default App