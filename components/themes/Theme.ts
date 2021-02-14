import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
      template: {
          main: {
              [key:string]: any
          },
          header: {
              [key:string]: any
          },
          footer: {
              [key:string]: any
          }
      }
    }
}

export const Theme: DefaultTheme = {
    template: {
        main: {
            minHeight: '800px',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexFlow: 'row',
            '& > article': {
                margin: '4px',
                padding: '5px',
                border: '1px solid #cccc33',
                borderRadius: '7pt',
                background: '#dddd88',
                flex: '3 1 60%',
                order: 2
            },
            '& > nav': {
                margin: '4px',
                padding: '5px',
                border: '1px solid #8888bb',
                borderRadius: '7pt',
                background: '#ccccff',
                flex: '1 6 20%',
                order: 1
            },
            '& > aside': {
                margin: '4px',
                padding: '5px',
                border: '1px solid #8888bb',
                borderRadius: '7pt',
                background: '#ccccff',
                flex: '1 6 20%',
                order: 3
            },
            '@media all and (max-width: 640px)': {
                flexDirection: 'column',
                '& > nav, & > aside': {
                    minHeight: '50px',
                    maxHeight: '50px'
                },
                '& > article, & > nav, & > aside': {
                    order: 0
                }
            }
        },
        header: {
            display: 'block',
            margin: '4px',
            padding:'5px',
            minHeight: '100px',
            border: '1px solid #eebb55',
            borderRadius: '7pt',
            background: '#ffeebb',
            '@media all and (max-width: 640px)': {
                minHeight: '50px',
                maxHeight: '50px'
            }
        },
        footer: {
            display: 'block',
            margin: '4px',
            padding:'5px',
            minHeight: '100px',
            border: '1px solid #eebb55',
            borderRadius: '7pt',
            background: '#ffeebb',
            '@media all and (max-width: 640px)': {
                minHeight: '50px',
                maxHeight: '50px'
            }
        }
    }
};
