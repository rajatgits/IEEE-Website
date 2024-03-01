import Link from "next/link";
import { Links } from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";

export const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        IEEE HIT SB
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};