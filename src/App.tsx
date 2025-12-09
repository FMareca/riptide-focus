// CamelCase

import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá Mundo!
      </Heading>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, deserunt. Officiis architecto vel nesciunt quaerat eaque, voluptatibus, explicabo illo, accusantium alias consectetur vero deserunt dignissimos harum minima repellat quod? Accusamus?
    </p>
    </>
  );
}
