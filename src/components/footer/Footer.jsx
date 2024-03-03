import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Link
          href="https://www.linkedin.com/company/ieee-hit-student-branch/"
          className={styles.social}
          target="_blank"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn icon"
            width={18}
            height={18}
          />
        </Link>

        <Link href="mailto:hitbranchieee@gmail.com" target="_blank">
          <Image src="/mail.png" alt="Mail icon" width={18} height={18} />
        </Link>

        <Link href="https://www.instagram.com/ieee_hit_sb/" target="_blank">
          <Image
            src="/instagram.png"
            alt="Instagram icon"
            width={18}
            height={18}
          />
        </Link>
        <Link href="https://www.facebook.com/ieeehit/" target="_blank">
          <Image
            src="/facebook.png"
            alt="Facebook icon"
            width={18}
            height={18}
          />
        </Link>
        <Link
          href="https://www.whatsapp.com/channel/0029VaMCE854SpkBsct9n12V"
          target="_blank"
        >
          <Image
            src="/whatsapp.png"
            alt="Whatsapp icon"
            width={18}
            height={18}
          />
        </Link>
      </div>
      <p className={styles.copyright}>
        IEEE HIT SB &copy; All rights reserved.
      </p>
    </div>
  );
};
