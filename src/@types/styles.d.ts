// styled.d.ts - Arquivo de definição de tipos
// Só podemos ter código TypeScript

import "styled-components";
import { defaultTheme } from "../styles/themes/default";

// O typeof é um operador do TypeScript que retorna o tipo de uma expressão. Neste caso, estamos usando o typeof para obter o tipo do tema padrão que definimos em src/styles/themes/default.ts. O tipo do tema padrão é ThemeType. Ou seja, agora o ThemeType terá como tipo o tipo do tema padrão que definimos em src/styles/themes/default.ts.

type ThemeType = typeof defaultTheme;

// O declare module significa que estamos sobrescrevendo um módulo existente. Neste caso, estamos sobrescrevendo o módulo styled-components. O que estamos fazendo é adicionar uma nova propriedade ao módulo styled-components. A propriedade que estamos adicionando é DefaultTheme, que é do tipo ThemeType. O ThemeType é o tipo do tema padrão que definimos em src/styles/themes/default.ts. Se usassemos apenas o declare module "styled-components" {}, estaríamos sobrescrevendo o módulo styled-components sem adicionar nenhuma nova propriedade a ele. Mas, como estamos adicionando a propriedade DefaultTheme ao módulo styled-components, precisamos adicionar o tipo da propriedade que estamos adicionando. Por isso, estamos adicionando o tipo DefaultTheme ao módulo styled-components.

// A palavra declare isolada, sem o module, é usada para declarar um tipo que não existe no TypeScript. Por exemplo, se quisermos declarar um novo tipo, podemos usar declare. Mas, se quisermos sobrescrever um módulo existente, precisamos usar declare module.

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

// Neste arquivo, estamos sobrescrevendo o DefaultTheme do styled-components. O DefaultTheme é um tipo que é usado para definir o tema padrão do styled-components. Estamos sobrescrevendo o DefaultTheme para que ele seja do tipo ThemeType, que é o tipo do tema padrão que definimos em src/styles/themes/default.ts. Isso nos permite acessar as propriedades do tema padrão em qualquer componente do styled-components.
