import React from "react";
import Container from "@/compnents/container";
import style from "./Contact.module.scss"
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
                <div className={`${style.con_sub_head}`}>Reach out to us by filling the form below</div>
                <div className={"row"} mt-5>
                    <div className={`col-lg-8 col-md-12 col-sm-12 ${style.form_section}`}>
                        <div className={`${style.icon_form}`}>
                            <ContactForm />
                        </div>
                    </div>
                    <div className={`col-lg-4 col-md-12 col-sm-12 ${style.addr_section}`}>
                        <div className={`${style.loc_sec}`}>
                            <div className={`${style.addr_icons}`}>
                                <CiLocationOn />
                            </div>
                            <div className={`${style.addr_detail}`}>Mentor College<br />Ettapilly Mannathoor(PO)<br />Pampakuda via Muvattupuzha<br />Ernakulam Kerala 686667</div>
                        </div>
                        <Link href="tel:+91 6282089866">
                            <div className={`${style.loc_sec}`}>
                                <div className={`${style.addr_icons}`}>
                                    <BsTelephone />
                                </div>
                                <div className={`${style.addr_detail}`}>

                                    +91 6282089866
                                </div>
                            </div>
                        </Link>
                        <Link href="mailto:contact@mentorcolleges.com">
                            <div className={`${style.loc_sec}`}>
                                <div className={`${style.addr_icons}`}>
                                    <CiGlobe />
                                </div>
                                <div className={`${style.addr_detail}`}>contact@mentorcolleges.com</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Contact;