import Link from "next/link";
import getData from "../../../services/getData";

const StaticSiteGeneration = async () => {
    const data = getData();
    const users = await data;
  return (
    <>
     <h2>Static Site Generation SSG in Next JS</h2>
     {
        users.map((user, i) => (
            <h3 key={i}>
                <Link href={`/ssg/${user.id}`}>{user.username}</Link>
            </h3>
        ))
     }
    </>
  );
}

export default StaticSiteGeneration;
