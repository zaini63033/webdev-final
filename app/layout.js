export const metadata = {
  title: 'Web-Dev-Final',
  description: 'Final Exam for the Web Development Course offered to BSCS21',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}