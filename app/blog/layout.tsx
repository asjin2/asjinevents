import React from 'react';

// This layout will wrap both the blog list and individual blog posts.
// It must accept and render the `children` prop.
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}