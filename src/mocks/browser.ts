import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// This configures a Service Worker with the given request handlers.
const worker = setupWorker(...handlers);

export default worker;

// 클라이언트 사이드
