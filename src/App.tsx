import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./app/login/page";
import Layout from "./components/layout";
import { ThemeProvider } from "./components/theme-provider";
import HomePage from "./app/home/page";
import ChatPage from "./app/chat/page";
import SettingsPage from "./app/settings/page";
import TemplatesPage from "./app/templates/page";
import TrashPage from "./app/trash/page";
import HelpPage from "./app/help/page";

const App: React.FC = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="chat" element={<ChatPage />} />

          <Route path="settings" element={<SettingsPage />} />
          <Route path="templates" element={<TemplatesPage />} />
          <Route path="trash" element={<TrashPage />} />
          <Route path="help" element={<HelpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;

