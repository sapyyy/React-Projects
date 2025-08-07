import { Navbar } from "../components/navbar";

function App() {
  return (
    <div className="mx-auto h-[100dvh] mt-5 max-w-8/10 xl:max-w-6/10 relative">
      <Navbar />
      <div className="flex flex-col h-[90dvh] justify-center">
        <h1 className="text-2xl font-medium md:text-4xl md:text-center xl:text-5xl">
          “We’re building a world where tech{" "}
          <br className="hidden lg:block"></br> is fun again”
        </h1>
        <p className="text-neutral-700 text-[0.8rem] md:text-center xl:text-xl">
          - Carl Pei CEO
        </p>
      </div>
    </div>
  );
}

export default App;
