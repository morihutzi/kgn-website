import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";

type ImgProps = {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
};

function MdxImage({ src, alt, width, height }: ImgProps) {
  if (!src) return null;
  const isLocal = src.startsWith("/");
  if (isLocal) {
    return (
      <span className="my-6 block">
        <Image
          src={src}
          alt={alt ?? ""}
          width={typeof width === "number" ? width : 1200}
          height={typeof height === "number" ? height : 800}
          sizes="(min-width: 768px) 760px, 100vw"
          className="h-auto w-full rounded-card object-cover"
        />
        {alt && (
          <span className="mt-2 block text-center text-xs text-text-dark/60">
            {alt}
          </span>
        )}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={alt ?? ""}
      className="my-6 h-auto w-full rounded-card"
      loading="lazy"
    />
  );
}

type AnchorProps = {
  href?: string;
  children?: React.ReactNode;
};

function MdxAnchor({ href, children }: AnchorProps) {
  if (!href) return <span>{children}</span>;
  const isInternal =
    href.startsWith("/") ||
    href.startsWith("#") ||
    href.startsWith("https://www.kidgonet.de") ||
    href.startsWith("https://kidgonet.de");
  if (isInternal) {
    const normalized = href
      .replace(/^https?:\/\/(www\.)?kidgonet\.de/, "")
      .trim();
    const internalHref = normalized.length === 0 ? "/" : normalized;
    return (
      <Link
        href={internalHref}
        className="text-brand-yellow underline decoration-brand-yellow/40 underline-offset-2 hover:decoration-brand-yellow"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand-yellow underline decoration-brand-yellow/40 underline-offset-2 hover:decoration-brand-yellow"
    >
      {children}
    </a>
  );
}

const components: MDXRemoteProps["components"] = {
  img: (props: ImgProps) => <MdxImage {...props} />,
  a: MdxAnchor as unknown as React.FC<AnchorProps>,
  Image: ((props: ImageProps) => <Image {...props} />) as unknown as React.FC,
};

export function ArticleBody({ body }: { body: string }) {
  return (
    <div className="mx-auto w-full max-w-[760px] px-5 pb-12 sm:px-8 prose-elternratgeber">
      <MDXRemote source={body} components={components} />
    </div>
  );
}
