import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
      template: {
          main: {
              color: string,
              bg: string,
              textAlign: string
          }
      }
    }
}

export const Theme: DefaultTheme = {
    template: {
        main: {
            color: '#ffffff',
            bg: '#000000',
            textAlign:'center'
        }
    }
};
