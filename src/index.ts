const timeUnits: Record<string, number> = {
  ms: 1,
  s: 1000,
  m: 60 * 1000,
  h: 60 * 60 * 1000,
  d: 24 * 60 * 60 * 1000,
};

export function ms(str: string): number {
  if (typeof str !== 'string') return NaN;
  if (!str.trim()) return NaN;

  const regex = /(\d+(?:\.\d+)?)(ms|s|m|h|d)/g;
  let total = 0;
  let match: RegExpExecArray | null;
  let hasValidMatch = false;

  while ((match = regex.exec(str)) !== null) {
    const [, num, unit] = match;
    const value = parseFloat(num);
    const multiplier = timeUnits[unit];

    if (!multiplier) return NaN;
    total += value * multiplier;
    hasValidMatch = true;
  }

  return hasValidMatch ? total : NaN;
}
