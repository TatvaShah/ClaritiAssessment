// Theme types
export interface ThemeProps {
  colors: {
    background: string;
    text: string;
  };
}

// Card component props
export type CardProps = {
  id: string;  
  title: string;
  description: string;
  image: string;       
  pin?: boolean;
};

//Image Loading in Feed List
export interface ImageLoading {
  [key: string]: boolean;
}

//Battery Module
export interface BatteryModuleType {
    getBatteryLevel: () => Promise<number>;
}

//Navigation Stack
export type RootStackParamList = {
  Feed: undefined;
  Settings: { feedId : string };
};