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
        name: faker.person.fullName({ sex: gender === 1 ? "male" : "female" }),
        title_prefix: isAsn ? randomPick(["Dr.", "Ir.", "Apt."]) : "",
        title_suffix: isAsn
          ? randomPick(["S.Sos", "S.T", "S.E", "M.Si", "M.M", "M.T"])
          : "",
        employee_id_number: nip(),
        employee_registration_number: isNonAsn ? faker.string.numeric(8) : "",
        place_of_birth: faker.location.city(),
        date_of_birth: formatDate(
          faker.date.birthdate({ min: 22, max: 55, mode: "age" }),
        ),
        religion: randomPick([1, 2, 3, 4, 5, 6]),
        gender,
        marital_status: randomPick([1, 2, 3]),
        marriage_date:
          randomBool() && isAsn
            ? formatDate(faker.date.past({ years: 10 }))
            : "",
        marriage_description:
          randomBool() && isAsn ? faker.lorem.sentence({ min: 3, max: 8 }) : "",
        employment_type_id: randomPick(lookupOptions.employmentTypeIds),
        cpns_effective_date: isAsn
          ? formatDate(faker.date.past({ years: 5 }))
          : formatDate(faker.date.past({ years: 2 })),
        pns_effective_date:
          isAsn && randomBool()
            ? formatDate(faker.date.past({ years: 3 }))
            : "",
        position_id: randomPick(lookupOptions.positionIds),
        position_effective_date: formatDate(faker.date.past({ years: 2 })),
        grade_id: !isOutsourcing
          ? randomPick(lookupOptions.gradeIds)
          : undefined,
        grade_effective_date: !isOutsourcing
          ? formatDate(faker.date.past({ years: 4 }))
          : "",
        echelon_id:
          !isOutsourcing && randomBool()
            ? randomPick([1, 2, 3, 4, 5, 6])
            : undefined,
        echelon_effective_date:
          !isOutsourcing && randomBool()
            ? formatDate(faker.date.past({ years: 2 }))
            : "",
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
        institution_id:
          !isOutsourcing && randomBool()
            ? randomPick(lookupOptions.institutionIds)
            : undefined,
        education_level: randomPick([1, 2, 3, 4, 5, 6, 7, 8]),
        education_name: faker.company.name() + " University",
        education_year: year(),
        employee_id_card_number: isAsn ? faker.string.numeric(8) : "",
        karisu_number: isAsn && randomBool() ? faker.string.numeric(8) : "",
        id_tax: randomBool() ? npwp() : "",
        employment_status: randomPick([1, 6, 10]),
        family_registration_number: kk(),
        id_number: nik(),
        residence_id: isAsn ? randomPick([1, 2, 3, 4]) : undefined,
        current_address: faker.location.streetAddress({ useFullAddress: true }),
        residence_description: faker.location.streetAddress({
          useFullAddress: true,
        }),
        home_phone_number: randomBool() ? phone() : "",
        mobile_phone: phone(),
        office_address: faker.location.streetAddress({ useFullAddress: true }),
        office_phone_number: phone(),
        email: isAsn ? faker.internet.email().toLowerCase() : "",
        office_email: !isOutsourcing
          ? faker.internet.email({ provider: "wapresri.go.id" }).toLowerCase()
          : "",
        description: !isAsn ? faker.lorem.sentence({ min: 3, max: 10 }) : "",
        emergency_contact: `${faker.person.fullName()}, ${phone()}, ${randomPick(["Suami/Istri", "Kakak", "Orang Tua", "Anak"])}`,
        quit_date: "",
      };

      // Reset form with dummy data
      form.reset(
        {
          ...form.getValues(),
          ...values,
        },
        { keepDefaultValues: false },
      );
    },
    [form],
  );

  return { fillDummy };
}
