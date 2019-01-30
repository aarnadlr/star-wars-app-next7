import Link from "next/link";
import Header from "../components/header";
import Character from "../components/Character";
import {characters} from '../src/characters.json';

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/about">
        <a>Go to About Me</a>
      </Link>
      <Character/>
      <br/>
      <h1>{characters[1].name}</h1>
    </section>
  </main>
);