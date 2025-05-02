import Link from "next/link";

export default function MenuBar() {
  return (
  <div className="menu-selection">
    <Link href='/' className="menu-item kanit-semibold">หน้าหลัก</Link>
    {/* <Link href="about-me.html" className="menu-item kanit-semibold" >เกี่ยวกับฉัน</Link>
    <Link href="portfolio.html"className="menu-item kanit-semibold" >ผลงาน</Link> */}
    <Link href="/state" className="menu-item kanit-semibold">เรียนรู้ State</Link>
  </div>);
    
}