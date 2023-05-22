import * as React from "react"
import Svg, {
  RadialGradient,
  Stop,
  Path,
  LinearGradient,
  G
} from "react-native-svg"

function SvgComponent(props : any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64px"
      height="64px"
      {...props}
    >
      <RadialGradient
        id="a"
        cx={31.417}
        cy={-1098.083}
        r={28.77}
        gradientTransform="translate(0 1128)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f4e09d" />
        <Stop offset={0.226} stopColor="#f8e8b5" />
        <Stop offset={0.513} stopColor="#fcf0cd" />
        <Stop offset={0.778} stopColor="#fef4dc" />
        <Stop offset={1} stopColor="#fff6e1" />
      </RadialGradient>
      <Path fill="url(#a)" d="M7.5 64a3.5 3.5 0 100-7 3.5 3.5 0 100 7z" />
      <RadialGradient
        id="b"
        cx={31.5}
        cy={-1096}
        r={31.751}
        gradientTransform="translate(0 1128)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f4e09d" />
        <Stop offset={0.226} stopColor="#f8e8b5" />
        <Stop offset={0.513} stopColor="#fcf0cd" />
        <Stop offset={0.778} stopColor="#fef4dc" />
        <Stop offset={1} stopColor="#fff6e1" />
      </RadialGradient>
      <Path
        fill="url(#b)"
        d="M62 20.5a4.5 4.5 0 00-4.5-4.5H49a4 4 0 010-8h2a4 4 0 000-8H20a4 4 0 000 8h2a3 3 0 110 6H7.5a3.5 3.5 0 100 7H9a3 3 0 110 6H5a5 5 0 000 10h2.5a3.5 3.5 0 110 7H6a4 4 0 000 8h11.5a2.5 2.5 0 110 5 3.5 3.5 0 100 7h35a3.5 3.5 0 100-7H52c-1.105 0-7-.895-7-2a2 2 0 012-2h12a4 4 0 000-8h-2.5a2.5 2.5 0 110-5h.5a4 4 0 000-8h-4.5a3.5 3.5 0 110-7h5a4.5 4.5 0 004.5-4.5z"
      />
      <LinearGradient
        id="c"
        x1={32}
        x2={32}
        y1={53}
        y2={8}
        gradientTransform="matrix(1 0 0 -1 0 64)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#def9ff" />
        <Stop offset={0.282} stopColor="#cff6ff" />
        <Stop offset={0.823} stopColor="#a7efff" />
        <Stop offset={1} stopColor="#99ecff" />
      </LinearGradient>
      <Path
        fill="url(#c)"
        d="M15.211 11h33.578a5 5 0 014.956 5.661l-4.667 35A5 5 0 0144.122 56H19.878a5 5 0 01-4.956-4.339l-4.667-35A5 5 0 0115.211 11z"
      />
      <LinearGradient
        id="d"
        x1={32}
        x2={32}
        y1={46}
        y2={56}
        gradientTransform="matrix(1 0 0 -1 0 64)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#41bfec" />
        <Stop offset={0.232} stopColor="#4cc5ef" />
        <Stop offset={0.644} stopColor="#6bd4f6" />
        <Stop offset={1} stopColor="#8ae4fd" />
      </LinearGradient>
      <Path
        fill="url(#d)"
        d="M53 18H11a2 2 0 01-2-2v-6a2 2 0 012-2h42a2 2 0 012 2v6a2 2 0 01-2 2z"
      />
      <G>
        <LinearGradient
          id="e"
          x1={52}
          x2={52}
          y1={-1064}
          y2={-1088}
          gradientTransform="translate(0 1128)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#ff5840" />
          <Stop offset={0.007} stopColor="#ff5840" />
          <Stop offset={0.989} stopColor="#fa528c" />
          <Stop offset={1} stopColor="#fa528c" />
        </LinearGradient>
        <Path
          fill="url(#e)"
          d="M52 40c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
        />
        <Path
          fill="#fff"
          d="M57.417 49.412l-8.005 8.005a2.005 2.005 0 01-2.828 0 2.005 2.005 0 010-2.828l8.005-8.005a2.005 2.005 0 012.828 0c.777.777.777 2.05 0 2.828z"
        />
        <Path
          fill="#fff"
          d="M46.583 49.412l8.005 8.005a2.005 2.005 0 002.828 0 2.005 2.005 0 000-2.828l-8.005-8.005a2.005 2.005 0 00-2.828 0 2.007 2.007 0 000 2.828z"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
