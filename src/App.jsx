import "./App.css";
import { Content, Footer, Header } from "./components/Basic_page";
import { CounterReducer, CounterUseState } from "./components/Counter";
import { FormUseRef, FormUseState } from "./components/Forms";
import Jokerator from "./components/Jokerator";
import LifeCycle from "./components/LifeCycle";
import PropHandling from "./components/PropHandling";
import {
  StyledButton1,
  StyledButton2,
  StyledButton3,
} from "./components/StyledButton";
import SimpleForm from "./components/SimpleForm";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <StyledButton1 />
      <StyledButton2 />
      <StyledButton3 />
      <LifeCycle />
      <PropHandling />
      <CounterUseState />
      <CounterReducer />
      <Jokerator />
      <SimpleForm />
      <FormUseState />
      <FormUseRef />
    </>
  );
}

export default App;
