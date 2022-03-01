import StyledBadge from "./StyledBadge";

interface BadgeProps {
  type?: "info" | "error";
  label: string;
}

export const Badge = ({ label = "No Movie", type = "info" }: BadgeProps) => (
  <StyledBadge type={type} role={`${type}-badge`}>
    {label}
  </StyledBadge>
);
