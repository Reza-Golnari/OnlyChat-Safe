function checkLanguage(input: string): boolean {
  const firstChar = input.trim().charAt(0);
  const rtlChars =
    /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u0590-\u05FF\u07C0-\u07FF\uFB1D-\uFB4F]/;

  if (rtlChars.test(firstChar)) return true;
  return false;
}

export { checkLanguage };
