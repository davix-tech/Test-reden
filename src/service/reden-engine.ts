export type VariantOption = {
  id: string;
  label: string;
  weight: number;
  confidence: number;
  conversions: number;
  impressions: number;
};

export function chooseVariant(options: VariantOption[]) {
  const scored = options.map((option) => {
    const performance =
      option.impressions > 0
        ? option.conversions / option.impressions
        : 0;

    const score =
      performance * 0.7 +
      option.weight * 0.2 +
      option.confidence * 0.1;

    return {
      ...option,
      score,
    };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored[0];
      }
