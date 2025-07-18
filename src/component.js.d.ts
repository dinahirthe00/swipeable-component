import { ReactNode } from 'react';
import { Swipeable } from 'react-native-gesture-handler';

interface ComponentProps {
  children: ReactNode;
  renderRightActions?: () => ReactNode;
  renderLeftActions?: () => ReactNode;
  onSwipeableOpen: (directions: "left" | "right", swipeable: Swipeable) => void;
}

declare const Component: React.ForwardRefExoticComponent<ComponentProps & React.RefAttributes<Swipeable>>;
export default Component;
