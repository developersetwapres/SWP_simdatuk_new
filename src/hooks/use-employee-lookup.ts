"use client";

import { useEffect, useState } from "react";

import {
  getEmploymentTypes,
  getGrades,
  getInstitutions,
  getPositions,
  getWorkUnits,
} from "@/services/employee.service";

interface LookupOption {
  label: string;
  value: string;
}

export function useEmployeeLookup() {
  const [loading, setLoading] = useState(true);

  const [institutions, setInstitutions] = useState<LookupOption[]>([]);
  const [positions, setPositions] = useState<LookupOption[]>([]);
  const [workUnits, setWorkUnits] = useState<LookupOption[]>([]);
  const [grades, setGrades] = useState<LookupOption[]>([]);
  const [employmentTypes, setEmploymentTypes] = useState<LookupOption[]>([]);
  useEffect(() => {
    loadLookup();
  }, []);

  async function loadLookup() {
    try {
      setLoading(true);

      const [
        institutionRes,
        positionRes,
        workUnitRes,
        gradeRes,
        employmentTypeRes,
      ] = await Promise.all([
        getInstitutions(),
        getPositions(),
        getWorkUnits(),
        getGrades(),
        getEmploymentTypes(),
      ]);

      setInstitutions(mapOptions(institutionRes.data));
      setPositions(mapOptions(positionRes.data));
      setWorkUnits(mapOptions(workUnitRes.data));
      setGrades(mapGradeOptions(gradeRes.data));
      setEmploymentTypes(mapOptions(employmentTypeRes.data));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,

    institutions,
    positions,
    workUnits,
    grades,
    employmentTypes,

    reload: loadLookup,
  };
}

function mapOptions(items: any[]): LookupOption[] {
  return items.map((item) => ({
    label: item.name,
    value: String(item.id),
  }));
}

function mapGradeOptions(items: any[]): LookupOption[] {
  return items.map((item) => ({
    label: `${item.name} ${item.code ?? ""}`.trim(),
    value: String(item.id),
  }));
}
