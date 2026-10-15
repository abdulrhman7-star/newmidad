import type { Metadata, Viewport } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';
import { AppProviders } from '@/components/AppProviders';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

export const metadata: Metadata = {
  title: 'Remix MassiveMark Playground | مداد — AI Markdown to DOCX, PDF & Google Docs',
  description:
    'Convert AI-generated Markdown into professionally formatted DOCX, PDF, and Google Docs with preserved editable LaTeX math equations, tables, and syntax-highlighted code blocks.',
  openGraph: {
    title: 'Remix MassiveMark Playground | مداد — AI Markdown to DOCX, PDF & Google Docs',
    description:
      'Convert AI-generated Markdown into professionally formatted DOCX, PDF, and Google Docs with preserved editable LaTeX math equations, tables, and syntax-highlighted code blocks.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remix MassiveMark Playground | مداد — AI Markdown to DOCX, PDF & Google Docs',
    description:
      'Convert AI-generated Markdown into professionally formatted DOCX, PDF, and Google Docs with preserved editable LaTeX math equations, tables, and syntax-highlighted code blocks.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100 transition-colors selection:bg-indigo-500/20 selection:text-indigo-600"
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
