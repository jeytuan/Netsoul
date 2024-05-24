import { execSync } from "child_process";

async function main() {
  console.log("Generating TypeChain types...");
  execSync("npx typechain --config typechain.config.ts", { stdio: "inherit" });
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
