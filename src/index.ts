import { app } from "./app";

async function main() {
    // const {db, host, port} = config();
    // await connect(db);
    app.listen(3333, '0.0.0.0', () => {
        console.log(`Server is running on http://localhost:3333`);
    });
}

main().catch(console.error);