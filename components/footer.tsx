import React from 'react';
import ThemeToggle from './theme-toggle';

export default function Footer() {
  const getYear = () => new Date().getFullYear();

  return (
    <footer className="z-50 mx-auto w-full max-w-screen-xl px-6 md:px-20">
      <div className="flex w-full items-center justify-between border-t py-6">
        <small className="text-foreground/50">
          &copy; {getYear()} Ryan Gan. All rights reserved.
        </small>
        <ThemeToggle />
      </div>
    </footer>
  );
}
