declare global {
  type SiteLogoProps = {
    href?: string;
    classes?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgWidth?: number;
    imgHeight?: number;
    text?: string;
    onClick?: () => void;
  };

  type NavLinkProps = {
    href: string;
    text: string;
    classes?: string;
    isMobile?: boolean;
    onClick?: () => void;
  };
}

export {};
