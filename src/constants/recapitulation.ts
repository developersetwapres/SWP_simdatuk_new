export default function urlApi(type: string) {
  switch (type) {
    case "komposisi-pegawai":
      return "recapitulation";

    case "pegawai-asn":
      return "recapitulation-asn";

    case "pegawai-non-asn":
      return "recapitulations-nonasn";

    case "pegawai-outsourcing":
      return "recapitulations-outsource";

    case "promosi-pegawai":
      return "recapitulation";
  }
}
