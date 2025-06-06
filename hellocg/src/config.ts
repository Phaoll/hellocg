export const MIN_NUMBER_OF_PLAYER = 2;
export const MAX_NUMBER_OF_PLAYER = 6;

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
