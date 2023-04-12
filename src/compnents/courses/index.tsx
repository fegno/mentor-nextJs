import React, {
  useId,
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import brain from "../../assets/brain.png";
import ReactDOM from "react-dom"
import { gsap } from "gsap";
import style from "./Courses.module.scss" ;
import NoSSR from "react-no-ssr";
const IconImage  = ( { left , top } : any )=>{
  if( typeof document === 'undefined'){
      return null ;
  }
  return ReactDOM.createPortal(<div style={{left,top}} className={style.image}>
    <img src={brain.src}  />
  </div>,document.getElementById("courses") as any );
}
const Box: React.FC<any> = ({
  box,
  gradient,
  d1,
  d2,
  d3,
  light,
  lightPath,
  offset,
}) => {
  const linearGradient = useId();
  const radialGradient = useId();
  const lightId = useId();
  const lightEle = useRef<any>(null);
  const [titleConfig, setConfig] = useState({});
  const timer = useRef<any>(null);
  useEffect(() => {
    if (lightEle.current) {
      timer.current && clearTimeout( timer.current );
      timer.current  = setTimeout(() => {
        const { left, top } = lightEle.current.getBoundingClientRect();
        console.log( left , top );
        setConfig({
           left,
           top : top - offset.top ,
        });
      });
    }
  }, [ offset ]);
  return (
    <g>
      <NoSSR>
      <IconImage {...titleConfig} />
      </NoSSR>
      <linearGradient id={lightId} gradientUnits="userSpaceOnUse" {...light}>
        <stop offset="0" style={{ stopColor: "#474DD4" }}></stop>
        <stop
          offset="1"
          style={{ stopColor: "#474DD4", stopOpacity: "0" }}
        ></stop>
      </linearGradient>

      <polygon
        opacity="0.4"
        fill={`url(#${lightId})`}
        points={lightPath}
        ref={lightEle}
      ></polygon>
      <linearGradient
        id={linearGradient}
        gradientUnits="userSpaceOnUse"
        {...box}
      >
        <stop offset="0" style={{ stopColor: "#181818" }}></stop>
        <stop offset="0.2081" style={{ stopColor: "#262957" }}></stop>
        <stop offset="0.5216" style={{ stopColor: "#272A5B" }}></stop>
        <stop offset="0.8568" style={{ stopColor: "#0E1111" }}></stop>
        <stop offset="1" style={{ stopColor: "#0E1111" }}></stop>
      </linearGradient>
      <path fill={`url(#${linearGradient})`} d={d1}></path>
      <radialGradient
        id={radialGradient}
        gradientUnits="userSpaceOnUse"
        {...gradient}
      >
        <stop offset="0" style={{ stopColor: "#303375" }}></stop>
        <stop offset="1" style={{ stopColor: "#0E1111" }}></stop>
      </radialGradient>
      <path
        fill={`url(#${radialGradient})`}
        stroke="#71B0CA"
        stroke-miterlimit="10"
        d={d2}
      ></path>
      <path fill="#474DD4" d={d3}></path>
    </g>
  );
};
const Courses: React.FC = () => {
  const wrapper = useRef<any>(null);
  const [offset, setOffset] = useState({});
  useEffect(() => {
    if (wrapper.current) {
      setOffset(wrapper.current.getBoundingClientRect());
    }
  }, []);
  return (
    <div ref={wrapper} className={style.wrapper} id="courses" >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 1080"
        enable-background="new 0 0 1920 1080"
      >
        <g>
          <g>
            <line
              fill="none"
              stroke="#71B0CA"
              stroke-miterlimit="10"
              x1="579.9"
              y1="405.3"
              x2="1334.4"
              y2="841"
            ></line>
            <line
              fill="none"
              stroke="#71B0CA"
              stroke-miterlimit="10"
              x1="371.3"
              y1="675"
              x2="1536.3"
              y2="569.3"
            ></line>
            <line
              fill="none"
              stroke="#71B0CA"
              stroke-miterlimit="10"
              x1="763.8"
              y1="888.2"
              x2="1154.5"
              y2="358.2"
            ></line>
          </g>

          {/* <Box
            d1={`M1416,831v20.1c0,21.2-36.7,38.5-81.9,38.5      c-45.2,0-81.9-17.2-81.9-38.5V831c0,3.5,1,6.9,2.8,10.1c9.4,16.4,41.3,28.4,79.1,28.4c37.8,0,69.7-12,79.1-28.4      C1415,837.8,1416,834.5,1416,831z`}
            d2={`M1415.8,831c0,3.5-1,6.9-2.8,10.1c-9.4,16.4-41.3,28.4-79.1,28.4s-69.7-12-79.1-28.4c-1.8-3.2-2.8-6.6-2.8-10.1      c0-21.2,36.7-38.5,81.9-38.5S1415.8,809.7,1415.8,831z`}
            d3={`M1402.1,831c0,2.7-0.8,5.2-2.3,7.7c-7.8,12.5-34.3,21.7-65.7,21.7c-31.4,0-57.9-9.2-65.7-21.7      c-1.5-2.5-2.3-5-2.3-7.7c0-16.3,30.5-29.4,68.1-29.4C1371.7,801.6,1402.1,814.7,1402.1,831z`}
            box={{
              x1: "1252.1449",
              y1: "860.2836",
              x2: "1415.9873",
              y2: "860.2836",
            }}
            gradient={{
              cx: "1333.9086",
              cy: "830.9926",
              r: "63.9974",
            }}
          /> */}

          <Box
            d1={`M1416,831v20.1c0,21.2-36.7,38.5-81.9,38.5      c-45.2,0-81.9-17.2-81.9-38.5V831c0,3.5,1,6.9,2.8,10.1c9.4,16.4,41.3,28.4,79.1,28.4c37.8,0,69.7-12,79.1-28.4      C1415,837.8,1416,834.5,1416,831z`}
            d2={`M1415.8,831c0,3.5-1,6.9-2.8,10.1c-9.4,16.4-41.3,28.4-79.1,28.4s-69.7-12-79.1-28.4c-1.8-3.2-2.8-6.6-2.8-10.1      c0-21.2,36.7-38.5,81.9-38.5S1415.8,809.7,1415.8,831z`}
            d3={`M1402.1,831c0,2.7-0.8,5.2-2.3,7.7c-7.8,12.5-34.3,21.7-65.7,21.7c-31.4,0-57.9-9.2-65.7-21.7      c-1.5-2.5-2.3-5-2.3-7.7c0-16.3,30.5-29.4,68.1-29.4C1371.7,801.6,1402.1,814.7,1402.1,831z`}
            box={{
              x1: "1252.1449",
              y1: "860.2836",
              x2: "1415.9873",
              y2: "860.2836",
            }}
            gradient={{
              cx: "1333.9086",
              cy: "830.9926",
              r: "63.9974",
            }}
            light={{
              x1: "1334.1094",
              y1: "830.3868",
              x2: "1333.5106",
              y2: "628.0353",
            }}
            lightPath={`1402.1,831 1266,831      1239,624.4 1428,624.4`}
            offset={offset}
            image={`brain.gif`}
          />

          <Box
            d1={`M1625,555v20.1c0,21.2-36.7,38.5-81.9,38.5      c-45.2,0-81.9-17.2-81.9-38.5V555c0,3.5,1,6.9,2.8,10.1c9.4,16.4,41.3,28.4,79.1,28.4c37.8,0,69.7-12,79.1-28.4      C1624,561.8,1625,558.5,1625,555z`}
            d2={`M1624.8,555c0,3.5-1,6.9-2.8,10.1c-9.4,16.4-41.3,28.4-79.1,28.4s-69.7-12-79.1-28.4c-1.8-3.2-2.8-6.6-2.8-10.1      c0-21.2,36.7-38.5,81.9-38.5S1624.8,533.7,1624.8,555z`}
            d3={`M1611.1,555c0,2.7-0.8,5.2-2.3,7.7c-7.8,12.5-34.3,21.7-65.7,21.7c-31.4,0-57.9-9.2-65.7-21.7      c-1.5-2.5-2.3-5-2.3-7.7c0-16.3,30.5-29.4,68.1-29.4C1580.7,525.6,1611.1,538.7,1611.1,555z`}
            box={{
              x1: "1461.1449",
              y1: "584.2836",
              x2: "1624.9873",
              y2: "584.2836",
            }}
            gradient={{
              cx: "1542.9086",
              cy: "554.9926",
              r: "63.9974",
            }}
            light={{
              x1: "1543.1094",
              y1: "555.3868",
              x2: "1542.5106",
              y2: "353.0353",
            }}
            lightPath={`1611.1,556 1475,556      1448,349.4 1637,349.4`}
            offset={offset}
          />

          <Box
            d1={`M1237,350v20.1c0,21.2-36.7,38.5-81.9,38.5      c-45.2,0-81.9-17.2-81.9-38.5V350c0,3.5,1,6.9,2.8,10.1c9.4,16.4,41.3,28.4,79.1,28.4c37.8,0,69.7-12,79.1-28.4      C1236,356.8,1237,353.5,1237,350z`}
            d2={`M1236.8,350c0,3.5-1,6.9-2.8,10.1c-9.4,16.4-41.3,28.4-79.1,28.4s-69.7-12-79.1-28.4c-1.8-3.2-2.8-6.6-2.8-10.1      c0-21.2,36.7-38.5,81.9-38.5S1236.8,328.7,1236.8,350z`}
            d3={`M1223.1,350c0,2.7-0.8,5.2-2.3,7.7c-7.8,12.5-34.3,21.7-65.7,21.7c-31.4,0-57.9-9.2-65.7-21.7      c-1.5-2.5-2.3-5-2.3-7.7c0-16.3,30.5-29.4,68.1-29.4C1192.7,320.6,1223.1,333.7,1223.1,350z`}
            box={{
              x1: "1073.1449",
              y1: "379.2836",
              x2: "1236.9873",
              y2: "379.2836",
            }}
            gradient={{
              cx: "1154.9086",
              cy: "349.9925",
              r: "63.9974",
            }}
            light={{
              x1: "1155.1094",
              y1: "349.3867",
              x2: "1154.5106",
              y2: "147.0353",
            }}
            lightPath={`1223.1,350 1087,350      1060,143.4 1249,143.4`}
            offset={offset}
          />

          <Box
            d1={`M662,399v20.1c0,21.2-36.7,38.5-81.9,38.5      c-45.2,0-81.9-17.2-81.9-38.5V399c0,3.5,1,6.9,2.8,10.1c9.4,16.4,41.3,28.4,79.1,28.4s69.7-12,79.1-28.4      C661,405.8,662,402.5,662,399z`}
            d2={`M661.8,399c0,3.5-1,6.9-2.8,10.1c-9.4,16.4-41.3,28.4-79.1,28.4s-69.7-12-79.1-28.4c-1.8-3.2-2.8-6.6-2.8-10.1      c0-21.2,36.7-38.5,81.9-38.5S661.8,377.7,661.8,399z`}
            d3={`M648.1,399c0,2.7-0.8,5.2-2.3,7.7c-7.8,12.5-34.3,21.7-65.7,21.7s-57.9-9.2-65.7-21.7      c-1.5-2.5-2.3-5-2.3-7.7c0-16.3,30.5-29.4,68.1-29.4S648.1,382.7,648.1,399z`}
            box={{
              y1: "428.2836",
              x1: "498.1449",
              x2: "661.9874",
              y2: "428.2836",
            }}
            gradient={{
              cx: "579.9086",
              cy: "398.9925",
              r: "63.9974",
            }}
            light={{
              x1: "580.1094",
              y1: "400.3867",
              x2: "579.5107",
              y2: "198.0353",
            }}
            lightPath={`648.1,401 512,401      485,194.4 674,194.4`}
            offset={offset}
          />
          <Box
            d1={`M460,665v20.1c0,21.2-36.7,38.5-81.9,38.5      s-81.9-17.2-81.9-38.5V665c0,3.5,1,6.9,2.8,10.1c9.4,16.4,41.3,28.4,79.1,28.4s69.7-12,79.1-28.4C459,671.8,460,668.5,460,665z`}
            d2={`M459.8,665c0,3.5-1,6.9-2.8,10.1c-9.4,16.4-41.3,28.4-79.1,28.4s-69.7-12-79.1-28.4c-1.8-3.2-2.8-6.6-2.8-10.1      c0-21.2,36.7-38.5,81.9-38.5S459.8,643.7,459.8,665z`}
            d3={`M446.1,665c0,2.7-0.8,5.2-2.3,7.7c-7.8,12.5-34.3,21.7-65.7,21.7s-57.9-9.2-65.7-21.7      c-1.5-2.5-2.3-5-2.3-7.7c0-16.3,30.5-29.4,68.1-29.4S446.1,648.7,446.1,665z`}
            box={{
              x1: "296.1449",
              y1: "694.2836",
              x2: "459.9874",
              y2: "694.2836",
            }}
            gradient={{
              cx: "377.9086",
              cy: "664.9926",
              r: "63.9974",
            }}
            light={{
              x1: "378.1093",
              y1: "667.3868",
              x2: "377.5107",
              y2: "465.0353",
            }}
            lightPath={`446.1,668 310,668 283,461.4 472,461.4`}
            offset={offset}
          />

          <Box
            d1={`M846,878v20.1c0,21.2-36.7,38.5-81.9,38.5      c-45.2,0-81.9-17.2-81.9-38.5V878c0,3.5,1,6.9,2.8,10.1c9.4,16.4,41.3,28.4,79.1,28.4s69.7-12,79.1-28.4      C845,884.8,846,881.5,846,878z`}
            d2={`M845.8,878c0,3.5-1,6.9-2.8,10.1c-9.4,16.4-41.3,28.4-79.1,28.4s-69.7-12-79.1-28.4c-1.8-3.2-2.8-6.6-2.8-10.1      c0-21.2,36.7-38.5,81.9-38.5S845.8,856.7,845.8,878z`}
            d3={`M832.1,878c0,2.7-0.8,5.2-2.3,7.7c-7.8,12.5-34.3,21.7-65.7,21.7s-57.9-9.2-65.7-21.7      c-1.5-2.5-2.3-5-2.3-7.7c0-16.3,30.5-29.4,68.1-29.4S832.1,861.7,832.1,878z`}
            box={{
              x1: "682.1449",
              y1: "907.2836",
              x2: "845.9874",
              y2: "907.2836",
            }}
            gradient={{
              cx: "763.9086",
              cy: "877.9926",
              r: "63.9974",
            }}
            light={{
              x1: "764.1094",
              y1: "880.3868",
              x2: "763.5107",
              y2: "678.0353",
            }}
            lightPath={`832.1,881 696,881      669,674.4 858,674.4`}
            offset={offset}
          />

          <g>
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="831.8849"
              y1="652.7466"
              x2="1076.3248"
              y2="652.7466"
            >
              <stop offset="0" style={{ stopColor: "#181818" }}></stop>
              <stop offset="0.2081" style={{ stopColor: "#262957" }}></stop>
              <stop offset="0.5216" style={{ stopColor: "#272A5B" }}></stop>
              <stop offset="0.8568" style={{ stopColor: "#0E1111" }}></stop>
              <stop offset="1" style={{ stopColor: "#0E1111" }}></stop>
            </linearGradient>
            <path
              fill="url(#SVGID_1_)"
              d="M1076.3,609v30c0,31.7-54.7,57.4-122.2,57.4S831.9,670.7,831.9,639v-30c0,5.2,1.5,10.2,4.2,15      c14.1,24.4,61.6,42.4,118,42.4s104-18,118-42.4C1074.9,619.3,1076.3,614.2,1076.3,609z"
            ></path>
            <radialGradient
              id="SVGID_00000075874466280803105240000010510974538768836003_"
              cx="953.8699"
              cy="609.0467"
              r="95.479"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" style={{ stopColor: "#303375" }}></stop>
              <stop offset="1" style={{ stopColor: "#0E1111" }}></stop>
            </radialGradient>
            <path
              fill="url(#SVGID_00000075874466280803105240000010510974538768836003_)"
              stroke="#71B0CA"
              stroke-miterlimit="10"
              d="      M1076.1,609c0,5.2-1.5,10.2-4.2,15c-14.1,24.4-61.6,42.4-118,42.4s-104-18-118-42.4c-2.7-4.8-4.2-9.8-4.2-15      c0-31.7,54.7-57.4,122.2-57.4S1076.1,577.3,1076.1,609z"
            ></path>
            <linearGradient
              id="SVGID_00000168817929006372892350000013742323576655588997_"
              gradientUnits="userSpaceOnUse"
              x1="831.6498"
              y1="654.9966"
              x2="1076.0898"
              y2="654.9966"
            >
              <stop offset="0" style={{ stopColor: "#06F7F0" }}></stop>
              <stop offset="0.1432" style={{ stopColor: "#0668C9" }}></stop>
              <stop offset="0.2405" style={{ stopColor: "#EF54E0" }}></stop>
              <stop offset="0.3919" style={{ stopColor: "#602D7D" }}></stop>
              <stop offset="0.527" style={{ stopColor: "#34046A" }}></stop>
              <stop offset="0.6784" style={{ stopColor: "#643181" }}></stop>
              <stop offset="0.7595" style={{ stopColor: "#EF54E0" }}></stop>
              <stop offset="0.9" style={{ stopColor: "#0654BD" }}></stop>
              <stop offset="1" style={{ stopColor: "#06F7F0" }}></stop>
            </linearGradient>
            <path
              fill="url(#SVGID_00000168817929006372892350000013742323576655588997_)"
              d="M1076.1,628c0,1.9-0.2,3.7-0.5,5.5      c-5.9,29.1-58.1,51.9-121.7,51.9s-115.8-22.8-121.7-51.9c-0.4-1.8-0.5-3.6-0.5-5.5c0-1.2,0.1-2.3,0.2-3.5c0.2,1.9,0.7,3.7,1.3,5.5      c9.2,27.4,59.7,48.4,120.7,48.4c61,0,111.5-21,120.7-48.4c0.6-1.8,1-3.6,1.3-5.5C1076,625.7,1076.1,626.9,1076.1,628z"
            ></path>
            <path
              fill="#71B0CA"
              d="M1055.6,609c0,4-1.2,7.8-3.5,11.5c-11.7,18.7-51.1,32.4-98,32.4c-46.9,0-86.4-13.7-98-32.4      c-2.3-3.7-3.5-7.5-3.5-11.5c0-24.2,45.5-43.9,101.5-43.9C1010.2,565.1,1055.6,584.8,1055.6,609z"
            ></path>
          </g>

          <path
            fill="none"
            stroke="#71B0CA"
            stroke-miterlimit="10"
            d="M371,675.2"
          ></path>
          <g opacity="0.8">
            <linearGradient
              id="SVGID_00000024682737307253297930000006421574744880769204_"
              gradientUnits="userSpaceOnUse"
              x1="951.9871"
              y1="475.5747"
              x2="951.9871"
              y2="732.4497"
              gradientTransform="matrix(1 0 0 -1 0 1082)"
            >
              <stop offset="0" style={{ stopColor: "#71B0CA" }}></stop>
              <stop
                offset="1"
                style={{ stopColor: "#71B0CA", stopOpacity: "0" }}
              ></stop>
            </linearGradient>
            <path
              fill="url(#SVGID_00000024682737307253297930000006421574744880769204_)"
              d="M817,332.4l36,274l202-1.9l32-272.1H817z"
            ></path>
          </g>
          {/* lights */}
        </g>
      </svg>
    </div>
  );
};
export default Courses;
