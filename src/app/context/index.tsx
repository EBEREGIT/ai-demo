"use client";

import BotProvider from "./Bot";
import ComponentsWrapper from "./ComponentsWrapper";
import GeneralProvider from "./General";
import ThemeContextProvider from "./Theme";
import VariableProvider from "./Variable";

type ContextProvidersProps = {
  children: React.ReactNode;
};

export default function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <ThemeContextProvider>
      <VariableProvider>
        <GeneralProvider>
          <BotProvider>
            <ComponentsWrapper>{children}</ComponentsWrapper>
          </BotProvider>
        </GeneralProvider>
      </VariableProvider>
    </ThemeContextProvider>
  );
}
