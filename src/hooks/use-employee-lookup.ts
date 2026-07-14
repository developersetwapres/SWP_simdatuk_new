"use client";

import { useEffect, useState } from "react";

import {
  getCities,
  getDistricts,
  getEducationLevels,
  getEmploymentTypes,
  getGrades,
  getInstitutions,
  getMaritalStatuses,
  getPositions,
  getProvinces,
  getReligions,
  getVillages,
  getWorkUnits,
} from "@/services/employee.service";

interface LookupOption {
  label: string;
  value: string;
}

export function useEmployeeLookup() {
  const [loading, setLoading] = useState(true);

  const [religions, setReligions] = useState<LookupOption[]>([]);
  const [institutions, setInstitutions] = useState<LookupOption[]>([]);
  const [positions, setPositions] = useState<LookupOption[]>([]);
  const [workUnits, setWorkUnits] = useState<LookupOption[]>([]);
  const [grades, setGrades] = useState<LookupOption[]>([]);
  const [employmentTypes, setEmploymentTypes] = useState<LookupOption[]>([]);
  const [educationLevels, setEducationLevels] = useState<LookupOption[]>([]);
  const [maritalStatuses, setMaritalStatuses] = useState<LookupOption[]>([]);
  const [provinces, setProvinces] = useState<LookupOption[]>([]);
  const [cities, setCities] = useState<LookupOption[]>([]);
  const [districts, setDistricts] = useState<LookupOption[]>([]);
  const [villages, setVillages] = useState<LookupOption[]>([]);

  useEffect(() => {
    loadLookup();
  }, []);

  async function loadLookup() {
    try {
      setLoading(true);

      const [
        religionRes,
        institutionRes,
        positionRes,
        workUnitRes,
        gradeRes,
        employmentTypeRes,
        educationLevelRes,
        maritalStatusRes,
        provinceRes,
      ] = await Promise.all([
        getReligions(),
        getInstitutions(),
        getPositions(),
        getWorkUnits(),
        getGrades(),
        getEmploymentTypes(),
        getEducationLevels(),
        getMaritalStatuses(),
        getProvinces(),
      ]);

      setReligions(mapOptions(religionRes.data));
      setInstitutions(mapOptions(institutionRes.data));
      setPositions(mapOptions(positionRes.data));
      setWorkUnits(mapOptions(workUnitRes.data));
      setGrades(mapGradeOptions(gradeRes.data));
      setEmploymentTypes(mapOptions(employmentTypeRes.data));
      setEducationLevels(mapOptions(educationLevelRes.data));
      setMaritalStatuses(mapOptions(maritalStatusRes.data));
      setProvinces(mapOptions(provinceRes.data));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function loadCities(provinceId: number | string) {
    const res = await getCities({
      province_id: provinceId,
    });

    setCities(mapOptions(res.data));
  }

  async function loadDistricts(cityId: number | string) {
    const res = await getDistricts({
      city_id: cityId,
    });

    setDistricts(mapOptions(res.data));
  }

  async function loadVillages(districtId: number | string) {
    const res = await getVillages({
      district_id: districtId,
    });

    setVillages(mapOptions(res.data));
  }

  return {
    loading,

    religions,
    institutions,
    positions,
    workUnits,
    grades,
    employmentTypes,
    educationLevels,
    maritalStatuses,
    provinces,
    cities,
    districts,
    villages,

    loadCities,
    loadDistricts,
    loadVillages,
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
