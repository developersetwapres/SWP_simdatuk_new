"use client";

import { useCallback } from "react";
import { faker } from "@faker-js/faker/locale/id_ID";
import { UseFormReturn } from "react-hook-form";
import { EmployeeFormValues } from "@/schemas/employee-form.schema";
import { EmployeeType } from "@/types/employee-form";
import { EMPLOYEE_TYPE } from "@/constants/employee-form";

/* -------------------------------------------------------------------------- */
/*  Dummy data generators for each employee type                             */
/* -------------------------------------------------------------------------- */

function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomBool(): 0 | 1 {
  return Math.random() > 0.5 ? 1 : 0;
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function nip(): string {
  const y = faker.date
    .birthdate({ min: 18, max: 55, mode: "age" })
    .getFullYear()
    .toString()
    .slice(2);
  const m = String(faker.number.int({ min: 1, max: 12 })).padStart(2, "0");
  const rest = faker.string.numeric(12);
  return `${y}${m}${rest}`;
}

function nik(): string {
  return faker.string.numeric(16);
}

function kk(): string {
  return faker.string.numeric(16);
}

function npwp(): string {
  return faker.string.numeric(15);
}

function phone(): string {
  return `08${faker.string.numeric(9)}`;
}

function year(): string {
  return String(
    faker.date.birthdate({ min: 22, max: 50, mode: "age" }).getFullYear(),
  );
}

/* -------------------------------------------------------------------------- */
/*  Main generator                                                           */
/* -------------------------------------------------------------------------- */

export function useEmployeeDummy(form: UseFormReturn<EmployeeFormValues>) {
  const fillDummy = useCallback(
    (
      type: EmployeeType,
      lookupOptions: {
        employmentTypeIds: number[];
        positionIds: number[];
        gradeIds: number[];
        institutionIds: number[];
      },
    ) => {
      const isAsn = type === EMPLOYEE_TYPE.ASN;
      const isNonAsn = type === EMPLOYEE_TYPE.NON_ASN;
      const isOutsourcing = type === EMPLOYEE_TYPE.OUTSOURCING;

      const gender = randomBool();

      const values: Partial<EmployeeFormValues> = {
        /* ----- Identitas ----- */
        name: faker.person.fullName({ sex: gender === 1 ? "male" : "female" }),
        title_prefix: !isOutsourcing
          ? randomPick(["Dr.", "Ir.", "Apt.", "", "", ""])
          : "",
        title_suffix: !isOutsourcing
          ? randomPick([
              "S.Sos",
              "S.T",
              "S.E",
              "M.Si",
              "M.M",
              "M.T",
              "",
              "",
              "",
            ])
          : "",
        employee_id_number: nip(),
        employee_registration_number: !isOutsourcing
          ? faker.string.numeric(8)
          : "",
        place_of_birth: faker.location.city(),
        date_of_birth: formatDate(
          faker.date.birthdate({ min: 22, max: 55, mode: "age" }),
        ),
        religion: randomPick([1, 2, 3, 4, 5, 6]),
        gender,
        marital_status: randomPick([1, 2, 3]),

        /* ----- Perkawinan (hanya ASN) ----- */
        marriage_date: isAsn ? formatDate(faker.date.past({ years: 15 })) : "",
        marriage_description: isAsn
          ? faker.lorem.sentence({ min: 3, max: 8 })
          : "",

        /* ----- Kepegawaian ----- */
        employment_type_id: randomPick(lookupOptions.employmentTypeIds),
        cpns_effective_date: isAsn
          ? formatDate(faker.date.past({ years: 10 }))
          : formatDate(faker.date.past({ years: 5 })),
        pns_effective_date: isAsn
          ? formatDate(faker.date.past({ years: 8 }))
          : "",

        /* ----- Jabatan ----- */
        position_id: randomPick(lookupOptions.positionIds),
        position_effective_date: formatDate(faker.date.past({ years: 3 })),

        /* ----- Pangkat / Golongan ----- */
        grade_id: !isOutsourcing
          ? randomPick(lookupOptions.gradeIds)
          : undefined,
        grade_effective_date: !isOutsourcing
          ? formatDate(faker.date.past({ years: 5 }))
          : "",

        /* ----- Eselon ----- */
        echelon_id: !isOutsourcing ? randomPick([1, 2, 3, 4, 5, 6]) : undefined,
        echelon_effective_date: !isOutsourcing
          ? formatDate(faker.date.past({ years: 2 }))
          : "",

        /* ----- Masa Kerja (ASN only) ----- */
        overall_work_years: isAsn
          ? faker.number.int({ min: 5, max: 30 })
          : undefined,
        overall_work_months: isAsn
          ? faker.number.int({ min: 0, max: 11 })
          : undefined,
        grade_work_years: isAsn
          ? faker.number.int({ min: 2, max: 10 })
          : undefined,
        grade_work_months: isAsn
          ? faker.number.int({ min: 0, max: 11 })
          : undefined,

        /* ----- Instansi ----- */
        institution_id: !isOutsourcing
          ? randomPick(lookupOptions.institutionIds)
          : undefined,

        /* ----- Pendidikan ----- */
        education_level: randomPick([1, 2, 3, 4, 5, 6, 7, 8]),
        education_name: faker.company.name() + " University",
        education_year: year(),

        /* ----- Dokumen ----- */
        employee_id_card_number: isAsn ? faker.string.numeric(8) : "",
        karisu_number: isAsn ? faker.string.numeric(8) : "",

        /* ----- Pajak & NIK ----- */
        id_tax: npwp(),
        employment_status: randomPick([1, 6, 10]),
        family_registration_number: kk(),
        id_number: nik(),
        residence_id: isAsn ? randomPick([1, 2, 3, 4]) : undefined,

        /* ----- Alamat ----- */
        current_address: faker.location.streetAddress({ useFullAddress: true }),
        residence_description: faker.location.streetAddress({
          useFullAddress: true,
        }),

        /* ----- Kontak ----- */
        home_phone_number: phone(),
        mobile_phone: phone(),
        office_address: faker.location.streetAddress({ useFullAddress: true }),
        office_phone_number: phone(),
        email: isAsn ? faker.internet.email().toLowerCase() : "",
        office_email: !isOutsourcing
          ? faker.internet.email({ provider: "wapresri.go.id" }).toLowerCase()
          : "",

        /* ----- Lainnya ----- */
        description: !isAsn ? faker.lorem.sentence({ min: 4, max: 12 }) : "",
        emergency_contact: `${faker.person.fullName()}, ${phone()}, ${randomPick(["Suami/Istri", "Kakak", "Orang Tua", "Anak"])}`,
        quit_date: "",
      };

      /* ----- Repeatable Sections ----- */

      // 1 Pendidikan
      const educations = Array.from(
        { length: faker.number.int({ min: 1, max: 3 }) },
        () => ({
          level: randomPick([1, 2, 3, 4, 5, 6, 7, 8]),
          name: faker.company.name() + " University",
          study_area: randomPick([1, 2]),
          accreditation: randomPick(["A", "B", "C", "Unggul", "Baik Sekali"]),
          faculty: randomPick([
            "Fakultas Ilmu Komputer",
            "Fakultas Ekonomi",
            "Fakultas Hukum",
            "Fakultas Teknik",
            "Fakultas Kedokteran",
          ]),
          major: randomPick([
            "Teknik Informatika",
            "Manajemen",
            "Ilmu Hukum",
            "Akuntansi",
            "Ilmu Pemerintahan",
          ]),
          year_of_graduation: year(),
          description: faker.lorem.sentence({ min: 3, max: 8 }),
          degree_document: undefined,
          study_assignment_letter: undefined,
          academic_title_letter: undefined,
        }),
      );

      // 2 Keluarga
      const families = Array.from(
        { length: faker.number.int({ min: 1, max: 4 }) },
        (_, i) => ({
          card_number: kk(),
          name: faker.person.fullName(),
          id_number: nik(),
          gender: randomBool(),
          religion: randomPick([1, 2, 3, 4, 5, 6]),
          place_of_birth: faker.location.city(),
          date_of_birth: formatDate(
            faker.date.birthdate({ min: 1, max: 60, mode: "age" }),
          ),
          name_of_father: faker.person.fullName({ sex: "male" }),
          name_of_mother: faker.person.fullName({ sex: "female" }),
          relationship_status: randomPick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
          education: randomPick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
          occupation: randomPick([
            "PNS",
            "Wirausaha",
            "Karyawan Swasta",
            "Guru",
            "Dokter",
            "Ibu Rumah Tangga",
          ]),
          occupation_description: faker.lorem.sentence({ min: 2, max: 6 }),
          marital_status: randomPick([1, 2, 3, 4, 5]),
          marriage_other_notes: faker.lorem.sentence({ min: 2, max: 6 }),
          mobile_phone: phone(),
          sequence_number: i + 1,
        }),
      );

      // 3 Cuti (ASN only)
      const leaves = isAsn
        ? Array.from({ length: faker.number.int({ min: 1, max: 2 }) }, () => ({
            start_date: formatDate(faker.date.past({ years: 3 })),
            end_date: formatDate(faker.date.recent({ days: 30 })),
            type: randomPick([1, 2, 3, 4, 5, 6]),
            number: `CT/${faker.string.numeric(4)}/${faker.string.numeric(2)}`,
            description: faker.lorem.sentence({ min: 3, max: 8 }),
            letter: undefined,
          }))
        : [];

      // 4 Catatan (ASN only)
      const notes = isAsn
        ? Array.from({ length: faker.number.int({ min: 1, max: 2 }) }, () => ({
            description: faker.lorem.sentence({ min: 4, max: 12 }),
          }))
        : [];

      // 5 Assessment (ASN only)
      const assessments = isAsn
        ? Array.from({ length: faker.number.int({ min: 1, max: 2 }) }, () => ({
            event_date: formatDate(faker.date.past({ years: 3 })),
            point: randomPick([1, 2, 3]),
            organizer: randomPick(["PPKASN", "BKN", "LAN RI", "KemenPAN RB"]),
            assessment_document: undefined,
          }))
        : [];

      // 6 Kompetensi (ASN only)
      const competencies = isAsn
        ? Array.from({ length: faker.number.int({ min: 1, max: 2 }) }, () => ({
            event_date: formatDate(faker.date.past({ years: 3 })),
            point: randomPick([1, 2]),
            organizer: randomPick(["PPKASN", "BKN", "LAN RI", "KemenPAN RB"]),
            competency_document: undefined,
          }))
        : [];

      // 7 Talent Pool (ASN only)
      const talents = isAsn
        ? Array.from({ length: faker.number.int({ min: 1, max: 2 }) }, () => ({
            event_date: formatDate(faker.date.past({ years: 3 })),
            point: randomPick([1, 2, 3, 4, 5, 6, 7, 8, 9]),
            organizer: randomPick(["PPKASN", "BKN", "LAN RI", "KemenPAN RB"]),
            talent_document: undefined,
          }))
        : [];

      // Reset form with dummy data
      form.reset(
        {
          ...form.getValues(),
          ...values,
          educations,
          families,
          leaves,
          notes,
          assessments,
          competencies,
          talents,
        },
        { keepDefaultValues: false },
      );
    },
    [form],
  );

  return { fillDummy };
}
