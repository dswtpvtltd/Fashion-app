import React, { ReactNode } from "react";
import { State, TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  call,
  clockRunning,
  cond,
  eq,
  greaterThan,
  set,
  startClock,
  and,
  stopClock,
  useCode,
  not,
} from "react-native-reanimated";
import { useClock, useTapGestureHandler, useValue } from "react-native-redash";

interface BorderlessTapProps {
  children: ReactNode;
  onPress: () => void;
}

const BorderlessTap = ({ children, onPress }: BorderlessTapProps) => {
  const clock = useClock();
  const start = useValue(0);
  //const opacity = cond(greaterThan(clock, add(start, 300)), 0.5, 1);

  const opacity = useValue(0);

  const { gestureHandler, state } = useTapGestureHandler();
  useCode(
    () => [
      cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [
        startClock(clock),
        set(start, clock),
      ]),
      cond(eq(state, State.END), [call([], onPress), stopClock(clock)]),
      set(
        opacity,
        cond(
          and(greaterThan(clock, add(start, 300)), clockRunning(clock)),
          0.5,
          1
        )
      ),
    ],
    []
  );
  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ opacity }}>{children}</Animated.View>
    </TapGestureHandler>
  );
};

export default BorderlessTap;
