declare function gitUrlParse(url: string): {
    href: string;
    origin: string;
    owner: string | undefined;
    name: string | undefined;
};

export { gitUrlParse };
