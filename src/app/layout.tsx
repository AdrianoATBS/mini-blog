import { Inter, DM_Sans} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--fonte-inter-geral",
  display: "swap",
})
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--fonte-dm-sans-titulo",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className= {`${inter.variable} ${dmSans.variable} antialiased bg-fundo ` }
      >
        {children}
      </body>
    </html>
  );
}
