"use client";

import { useMemo, useState } from "react";

const TOTAL_SECTION = 9;

export function useEmployeeSection() {
  const [active, setActive] = useState(0);

  function goTo(index: number) {
    if (index < 0 || index >= TOTAL_SECTION) return;

    setActive(index);
  }

  function next() {
    setActive((prev) => {
      if (prev >= TOTAL_SECTION - 1) return prev;

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

  const canNext = useMemo(() => active < TOTAL_SECTION - 1, [active]);

  const isFirst = useMemo(() => active === 0, [active]);

  const isLast = useMemo(() => active === TOTAL_SECTION - 1, [active]);

  return {
    active,

    total: TOTAL_SECTION,

    isFirst,
    isLast,

    canPrevious,
    canNext,

    goTo,
    next,
    previous,
  };
}
