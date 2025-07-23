let accessToken: string | null = null;
let refreshToken = "dummy-refresh-token";

export function getAccessToken() {
    return accessToken;
}

export function setAccessToken(token: string) {
    accessToken = token;
}

export async function loginWithCredentials(username: string, password: string) {
    if (username === "admin" && password === "admin123") {
        accessToken = "fake-access-token";
        return {
            accessToken,
            refreshToken,
        };
    } else {
        throw new Error("Invalid credentials");
    }
}

export async function refreshAccessToken(): Promise<string | null> {
    // Simulate refresh call
    console.log("Refreshing access token...");
    return new Promise((resolve) => {
        setTimeout(() => {
            accessToken = "fake-access-token-refreshed";
            resolve(accessToken);
        }, 1000);
    });
}

export function logout() {
    accessToken = null;
}
