export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type ButtonParamList = {
  text : string;
  onPress : () => void;
  style? : StyleSheet;
}

export type BottomTabParamList = {
  RegisterTab: undefined;
  MainTab: undefined;
  ProfileTab : undefined;
};

export type ProfileTabParamList = {
  ProfileScreen: undefined;
};

export type MainTabParamList = {
  MainScreen : undefined;
}
