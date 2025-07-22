import img from './assets/logo_black.png'
import { FaInstagram } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

const App = () => {
  return <div className="container">
    <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
      <img src={img} style={{ width: "100px" }} />
      <p style={{ fontSize: "24px", textDecoration: "underline" }}>Alrize Nex Cell</p>
    </div>
    <div style={{ textAlign: "center", paddingBottom: "180px", display: "flex", alignItems: 'center', flexDirection: "column" }}>
      <p style={{ marginBottom: "12px", fontSize: "21px" }}>Introducing</p>
      <p style={{ maxWidth: "450px", fontSize: "12px" }}>We deliver scalable web platforms with seamless UI/UX, while crafting strategic content and creative assets—combining digital precision with compelling brand storytelling to elevate experiences across design, development, and marketing.</p>
      <p style={{ marginTop: "36px", fontSize: "21px", textDecoration: "underline" }}>Welcome for your digital presence</p>
      <a href='https://www.instagram.com/anc.alrize?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D' className='button'><FaInstagram /> Our Instagram</a>
      <a href='https://alrizenexcell.com/' className='button'><TbWorldWww /> Our Website</a>
    </div>
  </div>;
};

export default App;
