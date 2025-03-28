'use client'

import { Button } from "@repo/ui/components/button";



export default function Home() {
  return (
    <div>
      <Button variant='default' onClick={() => console.log('Opps!')}>Hello world!</Button>
    </div>
  );
}
