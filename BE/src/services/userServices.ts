import { Users } from "@prisma/client";
import db from "../lib/db";
import { ERROR_MESSAGE } from "../utils/constant/error";

export const getAllUser = async (): Promise<Users[] | null> => {
  return await db.users.findMany()
};
export const getUser = async (id: string): Promise<Users | null> => {
  return await db.users.findFirst({
    where: {
      id,
    },
  });
};

export const insertUser = async (body: any) => {
  return await db.users.create({
    data: {
      ...body
    },
  });
};

export const deleteUsers = async (id: string): Promise<string> => {
  const existUser = await db.users.findFirst({
    where: {
      id,
    },
  });

  if (!existUser) {
    throw new Error(ERROR_MESSAGE.DATA_NOT_FOUND);
  }

  await db.users.delete({
    where: {
      id,
    },
  });

  return " Sukses delete user dengan id " + id;
};

export const updateUser = async (
  id: string,
  body: Users
): Promise<Users | Error> => {
  const existUser = await db.users.findFirst({
    where: {
      id,
    },
  });

  if (!existUser) {
    throw new Error("User not found!!");
  }

  return await db.users.update({
    where: {
      id,
    },
    data: body,
  });
};

// update untuk versi function

// export function updateUserFUNC(id: string, body: Users): Promise<Users> {
//     return db.users.update({
//         where: {
//             id
//         },
//         data: body
//     })
// }

export const getSingleUser = async (condition: {
  [key: string]: string;
}): Promise<Users | null> => {
  return await db.users.findFirst({
    where: condition,
  });
};
