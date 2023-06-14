import React from "react";
import Container from "@/compnents/container";
import style from "./Contact.module.scss";
import ContactForm from "../../compnents/contactpage-contact-form";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <div className={`mt-5 ${style.contact_section}`}>
      <Container>
        <div className={`${style.con_head}`}>Got questions?</div>
        <div className={`${style.con_sub_head}`}>
          Reach out to us by filling the form below
        </div>
        <div className={"row"} mt-5>
          <div className={`col-xl-8 col-lg-7 col-md-12 col-sm-12 ${style.form_section}`}>
            <div className={`${style.icon_form}`}>
              <ContactForm />
            </div>
          </div>
          <div className={`col-xl-4 col-lg-5 col-md-12 col-sm-12 ${style.addr_section}`}>
            <div className={`${style.loc_sec}`}>
              <div className={`${style.addr_icons}`}>
                <CiLocationOn />
              </div>
              <div className={`${style.addr_detail}`}>
                Ettapilly, Mannathoor P.O. <br/> Pampakuda via Muvattupuzha, <br />
                Ernakulam,Kerala, INDIA.<br /> PIN: 686667.
              </div>
            </div>

            <div className={`${style.loc_sec}`}>
              <div className={`${style.addr_icons}`}>
                <BsTelephone />
              </div>
              <div className={`${style.addr_detail}`}>
                <Link href="tel:+91 7034866111">+91 7034866111 , </Link>
                <Link href="tel:+91 7034 733 111">+91 7034733111</Link>
              </div>
            </div>

            <Link href="mailto:contact@mentorcolleges.com">
              <div className={`${style.loc_sec}`}>
                <div className={`${style.addr_icons}`}>
                  <CiGlobe />
                </div>
                <div className={`${style.addr_detail}`}>
                  contact@mentorcolleges.com
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Contact;
