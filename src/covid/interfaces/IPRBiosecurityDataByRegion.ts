interface Attributes{ 
  RegionSalud: string 
  Region: string 
  Total: number 
}

export interface TablePRBiosecurityDataByRegion{ 
  attributes: Attributes
}

export interface DataPRBiosecurityDataByRegion{
  table: [TablePRBiosecurityDataByRegion] 
}

export interface IRootPRBiosecurityDataByRegion{ 
  data: [DataPRBiosecurityDataByRegion] 
}