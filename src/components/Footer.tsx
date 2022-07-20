import instagram from "../assets/instagram.svg"

const Footer: React.FC = () => {
  return (
       <div>
         <div className="footer">
           <a  href="https://instagram.com/wow_viiii?igshid=YmMyMTA2M2Y=" className="menu__link"><img  src={instagram} alt="VICTORY" /></a>
         </div>
       </div>
  )
}

export default Footer;
