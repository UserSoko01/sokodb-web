type SearchParamValue = string | string[] | undefined;

function getSingleSearchParam(value: SearchParamValue) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export type HuitzoHomeCtaVariant = "a" | "b";
export type HuitzoServicesVariant = "a" | "b";

export function getHuitzoHomeCtaVariant(
  value: SearchParamValue,
): HuitzoHomeCtaVariant | null {
  const variant = getSingleSearchParam(value);

  if (variant === "a" || variant === "b") {
    return variant;
  }

  return null;
}

export function getHuitzoServicesVariant(
  value: SearchParamValue,
): HuitzoServicesVariant | null {
  const variant = getSingleSearchParam(value);

  if (variant === "a" || variant === "b") {
    return variant;
  }

  return null;
}