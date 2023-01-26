export const isThemeDark = ({ themeMode }: { themeMode: string }): boolean => {
  if (themeMode === "dark") {
    return true;
  }
  return false;
};
