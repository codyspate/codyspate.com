import {
    FaCaretRight,
    FaHome,
} from "https://deno.land/x/react_icons@0.1.0/fa/mod.ts";
import { JSX } from "preact/jsx-runtime";
export type BreadCrumbsProps = {
    path: string;
};

export function BreadCrumbs(props: BreadCrumbsProps) {
    const segments = props.path.split("/").filter(Boolean).reduce<
        Array<{ segment: string | JSX.Element; path: string }>
    >((acc, segment, index) => {
        const path = index > 0
            ? `${acc[index - 1].path}/${segment}`
            : `/${segment}`;
        acc.push({ segment, path });
        return acc;
    }, []);
    if (segments.length <= 0) return null;
    segments.unshift({ segment: <FaHome size={24} />, path: "/" });
    return (
        <div className="flex gap-1 my-2 font-sans capitalize items-center">
            {segments.map((segment, index) => {
                if (index + 1 >= segments.length) {
                    return (
                        segment.segment
                    );
                }
                return (
                    <>
                        <a
                            href={segment.path}
                            className="underline flex"
                        >
                            {segment.segment}
                        </a>
                        {index + 1 < segments.length && <FaCaretRight />}
                    </>
                );
            })}
        </div>
    );
}
