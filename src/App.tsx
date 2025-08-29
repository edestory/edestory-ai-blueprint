import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Product from "./pages/Product";
import AIArchitect from "./pages/product/AIArchitect";
import AIContent from "./pages/product/AIContent";
import AIMarketer from "./pages/product/AIMarketer";
import AISupport from "./pages/product/AISupport";
import AILogistics from "./pages/product/AILogistics";
import AIAnalyst from "./pages/product/AIAnalyst";
import Templates from "./pages/Templates";
import TemplatesHowItWorks from "./pages/templates/HowItWorks";
import TemplateDemo from "./pages/templates/TemplateDemo";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/ai-architect" element={<AIArchitect />} />
            <Route path="/product/ai-content" element={<AIContent />} />
            <Route path="/product/ai-marketer" element={<AIMarketer />} />
            <Route path="/product/ai-support" element={<AISupport />} />
            <Route path="/product/ai-logistics" element={<AILogistics />} />
            <Route path="/product/ai-analyst" element={<AIAnalyst />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/templates/how-it-works" element={<TemplatesHowItWorks />} />
            <Route path="/templates/:slug" element={<TemplateDemo />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
