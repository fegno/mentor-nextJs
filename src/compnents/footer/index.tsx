import React from "react";
import Link from "next/link";
import logo from "../../assets/logo.png";
import NewsletterForm from "../newsletter-form";
const Footer: React.FC = () => {
  return (
    <footer className="py-5">
      <div className="container py-2">
        <div className="row">
          <div className="col-3">
            <div className="row">
              <div className="col-12">
                <a href="#">
                  <img src={logo.src} alt="Mentor" />
                </a>
              </div>
              <div className="col-12">
                <NewsletterForm />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="d-block">Ettapilly</div>
            <div className="d-block">Mannathoor(PO)</div>
            <div className="d-block">Pampakuda via</div>
            <div className="d-block">Muvattupuzha</div>
            <div className="d-block">Ernakulam</div>
            <div className="d-block">Kerala 686667</div>
            <div className="d-block">INDIA</div>
            <div className="d-block">Contact : 6282089866</div>
          </div>
          <div className="col-3">
            <div className="d-block">
              <Link href="/">Home</Link>
            </div>
            <div className="d-block">
              <Link href="/">About</Link>
            </div>
            <div className="d-block">
              <Link href="/">Admin</Link>
            </div>
            <div className="d-block">
              <Link href="/">Blog</Link>
            </div>
          </div>
          <div className="col-3">
            <div className="d-block">
              <Link href="/">B.Tech CSE</Link>
            </div>
            <div className="d-block">
              <Link href="/">B.Tech CSE AI and ML</Link>
            </div>
            <div className="d-block">
              <Link href="/">B.Tech CSE AI and DSC</Link>
            </div>
            <div className="d-block">
              <Link href="/">B.Tech CSE IOT</Link>
            </div>
            <div className="d-block">
              <Link href="/">B.Tech CSE CYBER SECURITY</Link>
            </div>
            <div className="d-block">
              <Link href="/">B.Tech CSE BLOCKCHAIN</Link>
            </div>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12">
            &copy; MENTOR COLLEGE OF ENGINEERING. ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
