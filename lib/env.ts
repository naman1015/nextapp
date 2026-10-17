/**
 * Centralized environment variable structure with safe fallbacks
 * so preview deployments build reliably even before custom vars are set.
 */
export const env = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || "PulseOps",
  appEnv:
    process.env.NEXT_PUBLIC_APP_ENV ||
    process.env.VERCEL_ENV ||
    process.env.NODE_ENV ||
    "development",
  healthCheckApiUrl:
    process.env.HEALTH_CHECK_API_URL ||
    "https://jsonplaceholder.typicode.com/todos/1",
  vercelGitCommitSha: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || "local",
} as const;
