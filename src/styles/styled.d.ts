import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        tittle: string,
        color:{
            primary: string,
            secondary: string,
            tertiary: string,
    
            white:string,
            black: string,
            gray: string,
    
            success:string,
            info: string,
            warning:string,
            correct:string,
            
        }
    }
}