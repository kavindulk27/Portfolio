import { Router, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";
import CustomCursor from "./components/CustomCursor";

function AppRouter() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/:rest*" component={NotFound} />
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <CustomCursor />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
