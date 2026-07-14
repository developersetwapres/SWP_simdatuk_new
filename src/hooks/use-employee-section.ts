"use client";

import { useMemo, useState } from "react";

export function useEmployeeSection(totalSection: number) {
  const [active, setActive] = useState(0);

  function goTo(index: number) {
    if (index < 0 || index >= totalSection) return;

    setActive(index);
  }

  function next() {
    setActive((prev) => {
      if (prev >= totalSection - 1) return prev;

      return prev + 1;
    });
  }

  function previous() {
    setActive((prev) => {
      if (prev <= 0) return prev;

      return prev - 1;
    });
  }

  const canPrevious = useMemo(() => active > 0, [active]);

  const canNext = useMemo(
    () => active < totalSection - 1,
    [active, totalSection],
  );

  const isFirst = useMemo(() => active === 0, [active]);

  const isLast = useMemo(
    () => active === totalSection - 1,
    [active, totalSection],
  );

  return {
    active,
    total: totalSection,
    isFirst,
    isLast,
    canPrevious,
    canNext,
    goTo,
    next,
    previous,
  };
}
