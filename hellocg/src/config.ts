export const MIN_NUMBER_OF_PLAYERS = 2;
export const MAX_NUMBER_OF_PLAYERS = 6;
export const DEFAULT_NUMBER_OF_PLAYERS = 4;

export const MIN_NUMBER_OF_THEMES = 2;
export const MAX_NUMBER_OF_THEMES = 10;
export const DEFAULT_NUMBER_OF_THEMES = 4;

export const MIN_NUMBER_OF_QUESTIONS = 2;
export const MAX_NUMBER_OF_QUESTIONS = 10;
export const DEFAULT_NUMBER_OF_QUESTIONS = 4;

export const MIN_DIFFICULTY = 1;
export const DEFAULT_MIN_DIFFICULTY = 1;
export const MAX_DIFFICULTY = 10;
export const DEFAULT_MAX_DIFFICULTY = 10;

type AppThemeList = {
  displayName: string;
  indexCSSName: string;
  pointLogoToUse: string;
  avatarColorTop: string;
  avatarColorBottom: string;
}[];

export const APP_THEME_LIST: AppThemeList = [
  {
    displayName: "HelloWorld! Light",
    indexCSSName: "helloworld_light",
    pointLogoToUse: "pointLogo.hellopoint.png",
    avatarColorTop: "rgb(95, 201, 221)",
    avatarColorBottom: "rgb(212, 224, 78)",
  },
  {
    displayName: "HelloWorld! Dark",
    indexCSSName: "helloworld_dark",
    pointLogoToUse: "pointLogo.hellopoint.png",
    avatarColorTop: "rgb(17, 69, 80)",
    avatarColorBottom: "rgb(73, 159, 70)",
  },
] as const;
