import * as React from "react"
import Svg, { LinearGradient, Stop, Path } from "react-native-svg"

function SvgComponent2(props : any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      {...props}
    >
      <LinearGradient
        id="a"
        x1={9.858}
        x2={38.142}
        y1={9.858}
        y2={38.142}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#9dffce" />
        <Stop offset={1} stopColor="#50d18d" />
      </LinearGradient>
      <Path
        fill="url(#a)"
        d="M44 24c0 11.045-8.955 20-20 20S4 35.045 4 24 12.955 4 24 4s20 8.955 20 20z"
      />
      <LinearGradient
        id="b"
        x1={13}
        x2={36}
        y1={24.793}
        y2={24.793}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.824} stopColor="#135d36" />
        <Stop offset={0.931} stopColor="#125933" />
        <Stop offset={1} stopColor="#11522f" />
      </LinearGradient>
      <Path
        fill="url(#b)"
        d="M21.293 32.707l-8-8a.999.999 0 010-1.414l1.414-1.414a.999.999 0 011.414 0L22 27.758l10.879-10.879a.999.999 0 011.414 0l1.414 1.414a.999.999 0 010 1.414l-13 13a.999.999 0 01-1.414 0z"
      />
    </Svg>
  )
}

export default SvgComponent2
