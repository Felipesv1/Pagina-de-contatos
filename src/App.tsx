import AuthProvider from "./Contexts/Auth";
import Rotas from "./routes";
export default function App() {
  return (
    <section>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </section>
  );
}
