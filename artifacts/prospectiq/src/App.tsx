import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProspectIQ from "@/pages/ProspectIQ";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProspectIQ />
    </QueryClientProvider>
  );
}

export default App;
