import "server-only";

import { Account, Client, Databases, Query } from "node-appwrite";

import { DATABASE_ID, MEMBERS_ID, WORKSPACES_ID } from "@/config";

export async function resolvePostAuthRedirect(sessionSecret: string) {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setSession(sessionSecret);

  const account = new Account(client);
  const databases = new Databases(client);
  const user = await account.get();

  const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
    Query.equal("userId", user.$id),
  ]);

  if (members.total === 0) {
    return {
      redirectTo: "/workspaces/create" as const,
      user,
    };
  }

  const workspaceIds = members.documents.map((member) => member.workspaceId);
  const workspaces = await databases.listDocuments(DATABASE_ID, WORKSPACES_ID, [
    Query.orderDesc("$createdAt"),
    Query.contains("$id", workspaceIds),
  ]);

  const firstWorkspace = workspaces.documents[0];

  return {
    redirectTo: firstWorkspace
      ? (`/workspaces/${firstWorkspace.$id}` as const)
      : ("/workspaces/create" as const),
    user,
  };
}
