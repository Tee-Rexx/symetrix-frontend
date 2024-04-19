export const blogContentText = (resolvedTheme: any) => {
    return `text-${resolvedTheme === "dark" ? "white" : "gray-500"} text-xl`;
  };

  export const blogContentTextWithMarginTop = (resolvedTheme: any, marginTop: number) => {
    return `text-${resolvedTheme === "dark" ? "white" : "gray-500"} text-xl mt-${marginTop}`;
  };

  export const blogSectionHeading = (resolvedTheme: any) => {
    return `text-${resolvedTheme === "dark" ? "white" : "gray-500"} text-3xl font-extrabold`;
  };