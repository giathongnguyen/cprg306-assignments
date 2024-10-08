import Link from 'next/link';

export default function Page() {
  return (
    <div className='m-5 text-center'>
      <h1 className='text-4xl'>CPRG 306: Web Development 2 - Assignments</h1>
      <ul className='m-4 text-3xl'>
        <li className='hover:text-green-400 hover:underline'><Link href="/week-2">Week 2 Assignment</Link></li>
        <li className='hover:text-green-400 hover:underline'><Link href="/week-3">Week 3 Assignment</Link></li>
        <li className='hover:text-green-400 hover:underline'><Link href="/week-4">Week 4 Assignment</Link></li>
        <li className='hover:text-green-400 hover:underline'><Link href="/week-5">Week 5 Assignment</Link></li>
      </ul>
    </div>
  );
}
