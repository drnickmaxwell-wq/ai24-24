
import ViewerClient from './viewer-client';
export const metadata = { title: '3D Showcase' };
export default function Page(){
  return (<main className="container-luxury">
    <h1>3D Showcase</h1>
    <p>Client viewer below (SSR-safe).</p>
    <ViewerClient />
  </main>);
}
