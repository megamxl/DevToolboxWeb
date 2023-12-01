"use server";

import prisma from "@/db/prisma";
import {SubscriptionStatus} from ".prisma/client";

export const getUserAndSubscriptionState = async () => {
  let isProUser = true;
  if (user) {
    const subscriptions = await prisma.subscriptions.findMany({
      where: {
        clerkUserId: user.id,
      },
    });
    if (
      subscriptions.length !== 0 &&
      subscriptions[0].subscriptionStatus === SubscriptionStatus.ACTIVE
    ) {
      isProUser = true;
    }
  }
  return {
    user,
    isProUser,
  };
};
