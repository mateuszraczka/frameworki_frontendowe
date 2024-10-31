
import wseiLogo from "../assets/wsei_logo.png";

function Footer() {
  return (
    <footer className="mt-auto d-flex justify-content-center gap-5 align-items-center pb-3">
      <div>
        <img height="50" src={wseiLogo}></img>
      </div>
      <div>mateusz.raczka@microsoft.wsei.edu.pl</div>
    </footer>
  );
}

export default Footer;
