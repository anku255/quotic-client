export const isServerReq = (req: any) => !req.url.startsWith("/_next");
