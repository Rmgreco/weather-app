// import "./globals.css";
import Preloader from "./components/preloader";
import { Providers } from "./redux/provider";
import { store } from "./redux/store";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = store.getState().weatherReducer
  return (
    <html lang="en">
      <body>
     
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
