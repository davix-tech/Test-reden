import { prisma } from "@/lib/prisma";

export async function logEvent({
  sessionId,
  type,
  productId,
  variantId,
}: {
  sessionId: string;
  type: string;
  productId?: string;
  variantId?: string;
}) {
  return prisma.eventLog.create({
    data: {
      sessionId,
      type,
      productId,
      variantId,
    },
  });
}
