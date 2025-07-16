"use no memo";
function gitUrlParse(url) {
  const {
    href,
    origin,
    pathname
  } = new URL(url);
  const [, owner, name] = pathname.split("/", 3);
  return {
    href,
    origin,
    owner,
    name
  };
}
export {
  gitUrlParse
};
