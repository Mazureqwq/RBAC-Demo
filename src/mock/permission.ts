export const rolePermissions: Record<string, string[]> = {
  admin: ["*"], // 超级权限
  user: ["dashboard:view", "user:list", "user:add"],
  guest: ["dashboard:view"],
};
