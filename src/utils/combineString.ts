type TemplateFuncArgs = [string[], string];

export default (...args: TemplateFuncArgs): string => {
  const [strs, ...exp] = args;
  // if (exp.every(val => !val)) return "";
  let str = "";
  let started = false;
  for (let i = 0; i < strs.length; i++) {
    if (exp[i]) {
      if (i === 0) {
        str += strs[i] + exp[i];
        started = true;
      } else if (!started) {
        str += exp[i];
        started = true;
      } else {
        str += strs[i] + exp[i];
      }
    } else if (i === strs.length - 1) {
      str += strs[i];
    }
  }
  return str;
};
