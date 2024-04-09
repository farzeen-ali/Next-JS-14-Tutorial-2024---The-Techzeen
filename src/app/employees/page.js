import Link from 'next/link';
const Employees = () => {
  return (
    <>
     <h2>Employees</h2>
     <ul>
        <li>
            <Link href="/employees/farzeen">Farzeen</Link>
        </li>
        <li>
            <Link href="/employees/ali">Ali</Link>
        </li>
        <li>
            <Link href="/employees/huzaifa">Huzaifa</Link>
        </li>
     </ul>
    </>
  );
}

export default Employees;
