import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from './ui/styles/test.module.css';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      Hola mundo!
      <div style={styles} className="flex flex-col items-center mt-6  bg-black w-200 h-200">

      </div>
    </main>
  );
}
