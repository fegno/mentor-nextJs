import React from 'react'
import style from "./ApplyNow.module.scss";
import Link from 'next/link';
import { GrShare } from "react-icons/gr";
import { CiShare1 } from 'react-icons/ci';

const ApplyNow: React.FC = () => {
    return (
        <div className={style.apply_now}>
            <Link href="/#apply_now" >
                <div className={style.text}>
                    <span className={style.icon}>
                        <CiShare1 />
                    </span>
                    Apply Now
                </div>
            </Link>
        </div>
    )
}

export default ApplyNow