"use client";

import { useEffect, useState } from "react";

import {
  getEchelons,
  getEmploymentTypes,
  getGrades,
  getInstitutions,
  getPositions,
  getResidences,
  getWorkUnits,
} from "@/services/employee.service";
interface LookupOption {
  label: string;
  value: string;
}

export function useEmployeeLookup(type: number) {
  const [loading, setLoading] = useState(true);

  const [institutions, setInstitutions] = useState<LookupOption[]>([]);
  const [positions, setPositions] = useState<LookupOption[]>([]);
  const [residencesRes, setResidencesRes] = useState<LookupOption[]>([]);
  const [grades, setGrades] = useState<LookupOption[]>([]);
  const [eselon, setEselon] = useState<LookupOption[]>([]);
  const [employmentTypes, setEmploymentTypes] = useState<LookupOption[]>([]);

  useEffect(() => {
    loadLookup();
  }, []);

  async function loadLookup() {
    try {
      setLoading(true);

      const [
        positionRes,
        eselonRes,
        gradeRes,
        institutionRes,
        residencesRes,
        employmentTypeRes,
      ] = await Promise.all([
        getPositions({ page: 1, filter_parent: true, type }), //Jabatan
        getEchelons({ page: 1 }), //Eselon
        getGrades({ page: 1 }), //Pangkat / Golongan
        getInstitutions({ page: 1 }), //Instansi Induk
        getResidences({ page: 1 }),
        getEmploymentTypes({ type }), //Tipe Pegawai
      ]);

      setPositions(mapOptions(positionRes.data));
      setEselon(mapOptions(eselonRes.data));
      setGrades(mapGradeOptions(gradeRes.data));
      setInstitutions(mapOptions(institutionRes.data));
      setResidencesRes(mapOptions(residencesRes.data));
      setEmploymentTypes(mapOptions(employmentTypeRes.data));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,

    positions, // Jabatan
    eselon, //Eselon
    grades, //Pangkat / Golongan
    institutions, //Instansi Induk
    residencesRes, //Komplek
    employmentTypes, //Tipe pegawai

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
