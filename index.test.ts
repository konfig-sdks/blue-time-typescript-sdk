import { BlueTime } from "./index";

describe("blue-time-typescript-sdk", () => {
    it("initialize client", async () => {
        const bluetime = new BlueTime({
            apiKey: "API_KEY",
        });
    });
});
