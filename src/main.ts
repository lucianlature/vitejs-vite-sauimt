import { main } from './main.theme.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <main class="${main}">
    <h1>Hello World!</h1>
  </main>
`;
