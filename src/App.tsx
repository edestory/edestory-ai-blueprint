import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Templates from "./pages/Templates";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cases from "./pages/Cases";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product" element={<Product />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
