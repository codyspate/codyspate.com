export type BreadCrumbsProps = {
    path: string;
};

export function BreadCrumbs(props: BreadCrumbsProps) {
    const segments = props.path.split("/").filter(Boolean).reduce<
        Array<{ segment: string; path: string }>
    >((acc, segment, index) => {
        const path = index > 0
            ? `${acc[index - 1].path}/${segment}`
            : `/${segment}`;
        acc.push({ segment, path });
        return acc;
    }, []);
    if (segments.length <= 0) return null;
    segments.unshift({ segment: "Home", path: "/" });
    return (
        <div className="flex gap-1 my-2 font-sans capitalize">
            {segments.map((segment, index) => {
                if (index + 1 >= segments.length) {
                    return (
                        <span>
                            {segment.segment.toLowerCase()}
                        </span>
                    );
                }
                return (
                    <>
                        <a href={segment.path} className="underline">
                            {segment.segment.toLowerCase()}
                        </a>
                        {index + 1 < segments.length && <span>{">"}</span>}
                    </>
                );
            })}
        </div>
    );
}
