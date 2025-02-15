export const pathsPublic: { [k: string]: string } = {
  home: '/',
  productDetails: '/product/:id0rSlug',
};
export const pathsPrivate: { [k: string]: string } = {
  accountSettings: '/account-settings',
};
export const paths: { [k: string]: string } = Object.assign(
  {},
  pathsPublic,
  pathsPrivate
);
export const checkPathMatch = (
  pathname: string,
  paths: { [k: string]: string }
) => {
  let isMatch = false;
  const allPaths = Object.keys(paths).map((k) => paths[k]);
  const pathFinderSection = pathname.split('/')[1];
  allPaths.forEach((p) => {
    if (p.slice(1) === pathFinderSection) {
      isMatch = true;
    }
  });
  return isMatch;
};
