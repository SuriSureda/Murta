import * as React from 'react';

import { Text, TextProps } from './Themed';

export function MyText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "poppins"}]} />;
}

export function MyTextBold(props : TextProps){
  return <Text {...props} style={[props.style, { fontFamily: "poppins_bold"}]} />;
}

export function MyTextLight(props : TextProps){
  return <Text {...props} style={[props.style, { fontFamily: "poppins_light"}]} />;
}
