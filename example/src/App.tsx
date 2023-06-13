import config from '@cicara/vite-plugin-config/config';

config.some;
config.number;

function App() {
  return (
    <div className="App">
      APP CONTENT
      <pre>
        <code>{JSON.stringify(config, null, 2)}</code>
      </pre>
    </div>
  );
}

export default App;
