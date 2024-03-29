import XRandomisation from "./xRandomization";

const algorithms = [
  {
    name:"xRandomisation Variant Y",
    command:"xray",
    function:XRandomisation,
    requiredParameters:['lever','slRate','tpRate','rpt'],
    example:"deploy xray lever 1 slRate 2 tpRate 1 rpt 100"
  }
]

export default algorithms