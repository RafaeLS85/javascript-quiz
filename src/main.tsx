import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider >
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
);


