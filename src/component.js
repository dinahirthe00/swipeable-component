import React, { forwardRef } from "react";
import { View } from "react-native";

const Component = forwardRef(({children, renderRightActions, renderLeftActions, onSwipeableOpen}, ref) => {
  return (
    <View ref={ref} onLayout={onSwipeableOpen}>
      {renderRightActions && String(renderRightActions)}
      {children}
      {renderLeftActions && String(renderLeftActions)}
    </View>
  )
});

export default Component;
