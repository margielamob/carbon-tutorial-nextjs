import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: "Six Day's Work | Canadian AI Infrastructure",
  description:
    "Deploy production-ready open-source models on Quebec's greenest, fastest GPU infrastructure. Law 25 compliant by default. Canadian data residency.",
  keywords:
    'AI, GPU, Canada, Quebec, Law 25, PIPEDA, inference, LLM, Llama, Mistral, Montreal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
