import { Databases, Query, Users } from "node-appwrite";

import { DATABASE_ID, MEMBERS_ID } from "@/config";

interface GetMemberProps {
  databases: Databases;
  workspaceId: string;
  userId: string;
}

export const getMember = async ({
  databases,
  workspaceId,
  userId,
}: GetMemberProps) => {
  const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
    Query.equal("workspaceId", workspaceId),
    Query.equal("userId", userId),
  ]);

  return members.documents[0];
};

export const getUserDisplay = async (users: Users, userId: string) => {
  try {
    const user = await users.get(userId);
    return {
      name: user.name || user.email,
      email: user.email,
    };
  } catch {
    return {
      name: "Unknown user",
      email: "",
    };
  }
};
