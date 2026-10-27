import "./globals.css";

export const metadata = {
  title: "RJK Limited | A better place to belong",
  description: "Explore land, homes and property opportunities with RJK Limited in Mirsharai, Chattogram, Bangladesh.",
  metadataBase: new URL("https://rjk-limited.vercel.app")
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
