const { exec } = require("child_process");
const { engines } = require("./../../package.json");
const semver = require("semver");
const currentNodeVersion = process.versions.node;
if (!semver.satisfies(currentNodeVersion, engines.node)) {
  console.log(
    `You are using Node ${currentNodeVersion}, but this version of
        "@Next.js Project"
      requires Node ${engines.node}.`
  );
  process.exit(1);
} else {
  console.log(
    `You are using Node ${currentNodeVersion}, which is compatible with ${"@Next.js Project"}`
  );
}
