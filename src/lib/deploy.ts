/**
 * Which deployment this build is for.
 *
 * Cloudflare Pages sets CF_PAGES_BRANCH on every build and
 * CF_PAGES_PRODUCTION_BRANCH to the branch configured as production. Anything
 * built from another branch is a preview deployment on a *.pages.dev URL, and
 * must not be indexed: an indexed preview competes with the live site for its
 * own keywords.
 *
 * A local build has neither variable set and is treated as production, so the
 * Lighthouse and SEO checks run against what visitors will actually get.
 *
 * This only adds `noindex`. Preview deployments should also be put behind a
 * Cloudflare Access policy, which is the part that actually keeps people out.
 */
const branch = process.env.CF_PAGES_BRANCH;
const productionBranch = process.env.CF_PAGES_PRODUCTION_BRANCH ?? 'main';

export const IS_PREVIEW_DEPLOY =
  branch !== undefined && branch !== productionBranch;

export const DEPLOY_LABEL = branch ?? 'local';
