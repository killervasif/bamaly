"use server"

import prisma from "../prisma"

export async function getUserById(id) {
  return await prisma.user.findUnique({
    where: {
      id
    }
  })
}

export async function updateUserAvatar(avatarUrl, userId) {
  return await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      avatarUrl: avatarUrl
    }
  })
}
