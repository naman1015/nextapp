import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: env.appName,
    environment: env.appEnv,
    commit: env.vercelGitCommitSha,
    timestamp: new Date().toISOString(),
  });
}
