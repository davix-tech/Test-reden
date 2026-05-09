export function updateWeights({
  success,
  currentWeight,
}: {
  success: boolean;
  currentWeight: number;
}) {
  if (success) {
    return currentWeight + 0.15;
  }

  return Math.max(0.1, currentWeight - 0.1);
}
