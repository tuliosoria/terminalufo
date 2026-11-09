# Security gates

The pull-request/manual workflow is read-only and does not deploy or upload findings.
It installs Gitleaks 8.30.1 and Syft 1.57.1 from official releases with reviewed SHA-256 hashes, and Semgrep CE 1.184.0 from a complete Python 3.12 dependency lock with hashes (wheels only). Their licenses are MIT, Apache 2.0 and LGPL 2.1 respectively. No commercial scanner service or token is used. Updating tools requires reviewing the lock, release hashes and fixture results.

Before dependency installation, Gitleaks scans the complete reachable Git history and checked-out source tree. Inline allow comments and .gitleaksignore do not bypass this gate. Semgrep uses three original local rules: dynamic eval, disabled TLS verification, and nonliteral shell commands through explicit child_process imports/requires. These rules have limited coverage; they are not a complete auth, injection or inter-file security audit. Dynamic aliases/reexports may need manual review.

Semgrep scan uses --oss-only, metrics off and version checks disabled, no remote rules or token. Do not use --validate: this version fetches remote metachecks even with metrics disabled. Local fixture tests validated the rules, including RegExp.exec and ordinary object.exec negative cases. These flags are not an operating-system network sandbox.

After npm run build (including postbuild), the exact static export out/ is scanned for secrets before any future publication step. The directory must exist and be nonempty. Project JS/maps and eligible text files are examined. The broad official default retains exclusions for node_modules, lockfiles, images/fonts/binaries and known vendor filenames. Symlinks and compressed/binary internals are not claimed covered; archive traversal is not enabled. This repository's deployment workflow is not changed by this PR, so passing PR checks does not prove a deployed version uses these bytes.

A CycloneDX SBOM of the build workspace and SHA-256 manifest of every regular file in out/ are generated in RUNNER_TEMP for each successful build. They are not uploaded or retained after the runner ends. The source/dependency SBOM is not proof that all minified bundle components are identifiable. If retention is later approved, sanitize private paths/registry URLs before sharing and bind the SBOM/digests to the commit and actual artifact being published.

Raw findings and tool diagnostics are captured in private temporary files and deleted. Logs expose gate name/exit code and whitelisted rule IDs/paths, never Match/Secret/snippets/messages; credential-like metadata is withheld. Reproduce locally with pinned tools for triage and report path/rule only. Do not create broad baselines or disable tests to make CI green. Exceptions require explicit narrow review.

CODEOWNERS routes review to the repository owner but does not enforce approval. Dependabot proposes weekly root npm and GitHub Actions updates; no automerge. Branch rules, push protection, account settings, credentials and deploy permissions remain unchanged. A clean scan is not a guarantee that secrets or vulnerabilities do not exist.

A complementary bundle gate has no path allowlists and checks OpenAI sk-/sk-proj-/sk-svcacct- tokens and private-key PEM headers, including vendor/min.js and standalone/node_modules paths. It does not decode archives or follow symlinks; PEM constants can require review. Synthetic positive/negative cases passed.
