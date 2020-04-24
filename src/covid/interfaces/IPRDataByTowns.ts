interface Attributes{ 
  town: string; 
  health_region: string; 
  total_cases: number;
}

export interface TablePRDataByTowns{ 
  attributes: Attributes; 
}

export interface DataPRDataByTowns{ 
  table: [TablePRDataByTowns] 
}

export interface IRootPRDataByTowns{ 
  data: [DataPRDataByTowns] 
}