export type IconKeys =
  | "arrow"
  | "logo"
  | "calendar"
  | "user"
  | "file"
  | "fileGray"
  | "message"
  | "mail"
  | "award"
  | "x"
  | "circleArrow"
  | "checkCircle"
  | "error"
  | "upload";

const iconMap: Record<IconKeys, string> = {
  logo: "/tave-logo.svg",
  calendar: "/calendar.svg",
  user: "/user.svg",
  file: "/file.svg",
  fileGray: "/file-gray.svg",
  award: "/award.svg",
  mail: "/mail.svg",
  message: "/message.svg",
  x: "/x.svg",
  arrow: "/arrow.svg",
  circleArrow: "/circle-arrow.svg",
  checkCircle: "/check-circle.svg",
  error: "/error.svg",
  upload: "/upload.svg",
};

interface IconProps {
  name: IconKeys;
  width: number;
  height: number;
  alt?: string;
  className?: string;
  loading?: "eager" | "lazy"; // HTML 기본 속성 대응
}

const Icons = ({
  name,
  width,
  height,
  alt = name,
  className,
  loading = "lazy",
}: IconProps) => {
  return (
    <img
      src={iconMap[name]}
      width={width}
      height={height}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
};

export default Icons;
