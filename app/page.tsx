import Footer from "@/components/Footer";
import MenuBar from "@/components/MenuBar";
export default function IndexPage() {
  return (
    <div>
      <MenuBar />
      {/*section 1*/}
      <div>
        <div className="alert alert-warning rounded" role="alert">
          <p className="h1 text-center kanit-bold">เว็บไซต์นี้เป็นเพียงตัวอย่างการทำโปรไฟล์ส่วนตัว</p>
        </div>
      </div>
      <div className="section1-box">
        <h1 className="section1-name kanit-semibold">Hey I'm Supaluk</h1>
        <p className="section1-meta-data kanit-light">I'm a student at Rajamangala University of Technology Krungthep <br />
          I am studying in the คณะบริหารธุรกิจ สาขานวัตกรรมระบบสารสนเทศ <br /></p>
        <img className="section1-profile-picture" src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-1/462000186_4006717626223670_6663328864566298847_n.jpg?stp=c32.0.720.720a_dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Xi9Ra5_CS58Q7kNvwGEkTvq&_nc_oc=AdntixYFtkfWqKFPH7Rgbc4Cich-iC8OECMiUJW1WdVZ6HbhYleZlmPFHZJH15r1K94&_nc_zt=24&_nc_ht=scontent.fbkk14-1.fna&_nc_gid=5Oztw8QqAh_yEAaNg7EAtg&oh=00_AfG-G6XNlyxYEWMjYxvcUxCzgabI3crIqZdq1MnfxjezHw&oe=6819E367" alt="My picture" />
        <p className="section1-description kanit-light">I am a student who is interested in programming and web development.
          <br /></p>
      </div>
      <div className="section2-box">
        <a className="section2-contact-link kanit-semibold" href="https://www.facebook.com/supaluk.yodchan">Facebook</a>
        <br />
        <a className="section2-contact-link kanit-semibold" href="https://github.com/ballMguy">Github</a>
        <br />
      </div>
      <div className="section3-box">
        <br />
        <div className="section3-box-a">
          <h1 className="section3-box-header1 kanit-semibold">ประวัติการศึกษา</h1>
          <p className="section3-box-content1 kanit-light">ประถมศึกษา: โรงเรียนอำนวยวิทย์</p>
          <p className="section3-box-content1 kanit-light">มัธยมศึกษา: โรงเรียนวัดทรงธรรม</p>
          <p className="section3-box-content1 kanit-light">ปวช.-ปวส.: วิทยาลัยพณิชยการเชตุพน</p>
        </div>
        <div className="section3-box-b">
          <h1 className="section3-box-header2 kanit-semibold">ประสบการณ์ฝึกงาน</h1>
          <p className="section3-box-content2 kanit-light">การไฟฟ้านครหลวง</p>
        </div>
      </div>
      <Footer />
    </div>

  )
}