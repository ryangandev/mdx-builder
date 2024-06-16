import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main
      className="flex items-center justify-center p-8"
      style={{
        minHeight: 'calc(100vh - 85px)',
      }}
    >
      <Link href="/create/blog">
        <Button variant="outline">Create Blog MDX</Button>
      </Link>
    </main>
  );
}
