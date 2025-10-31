import { NextResponse } from "next/server";

export async function GET() {
  const username = "PriteeArote";

  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        userCalendar {
          streak
          totalActiveDays
          submissionCalendar
        }
        badges {
          id
          name
          icon
        }
      }
    }
  `;

  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { username } }),
    next: { revalidate: 3600 },
  });

  const data = await res.json();
  return NextResponse.json(data.data.matchedUser);
}
