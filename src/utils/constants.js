// We use constants to keep common values centralized, consistent, and easy to maintain across the backend.

// Here we are exporting the whole object
export const UserRolesEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "project_admin",
  MEMBER: "member",
};

export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

// Here we are exporting just the array of values
export const AvailableUserRole = Object.values(UserRolesEnum);

export const AvailableTaskStatuses = Object.values(TaskStatusEnum);
