interface Attributes { 
  T_Camas_Adult_Disp: number
  T_Camas_Adult_Int_Disp: number
  T_Camas_Adult_Int_Occ: number
  T_Camas_Ped_Int_Disp: number
  T_Camas_Ped_Int_Occ: number
  T_Cuartos_PSINeg_Disp: number
  T_Cuartos_PSINeg_Occ: number
  T_Vent_Adult_Disp: number
  T_Vent_Adult_Occ: number
  T_Vent_Ped_Disp: number
  T_Vent_Ped_Occ: number
  T_Morgue_Disp: number
  T_Morgue_Occ: number
  T_Paciente_Adult: number
  T_Paciente_Ped: number
  T_Casos_Nuev_Ult_Inf: number
  T_Casos_Nuev_DS: string
  T_Casos_Nuev_AV: string
  T_Casos_Nuev_LabPriv: string
  T_Fatalidades: number
  T_Casos_Pos: string
  T_Casos_Neg: string
  T_Casos_Pend: string
  T_Casos_Inconcluso: string
  T_Fem: number
  T_Masc: number
  T_Menor_10: number
  T_10_19: number
  T_20_29: number
  T_30_39: number
  T_40_49: number
  T_50_59: number
  T_60_69: number
  T_70_79: number
  T_Mayor_80: number
  T_Vent_Ord: number
  T_Vent_Rec: number
  T_Vent_Entr: number
  T_Casos: String
  T_Prueba_Realizada: string
  T_Camas_Ped_Disp: number
  Edad_No_Dis: number
  T_Defunciones_RD: number
  T_Suicidios_RD: number
  T_Muertes_COVID_RD: number
  T_Cuartos_PSiNeg: number
  T_Hospitalizados: number
  T_Recuperados: number
  T_Camas_Int_Adult: number
  T_Camas_Int_Ped: number
  T_Vent_Adult: number
  T_Vent_Ped: number
  T_Camas_Adult_Available: string
  T_Camas_Ped_Available: string
  T_DefuncionesRD_Ene: number
  T_DefuncionesRD_Feb: number
  T_DefuncionesRD_Mar: number
  T_DefuncionesRD_Abr: number
  T_Muertes_Combinadas: number
  T_Camas_Adulto: number
  T_Camas_Ped: number
  T_Pacientes_Int_Covid: number
  T_Paciente_Adult_Int_Covid: number
  T_Paciente_Ped_Int_Covid: number
  T_Paciente_Camas_PSINeg_Covid: string
  T_Camas_Licen_SARAFS: number
  T_Camas_Licen_Activas: number
  T_Pruebas_LabPriv_PCR: string
  T_Pruebas_LabPriv_RapidTest: string
  T_Vent_Covid: number
  T_Vent_Adult_Covid: number
  T_Vent_Ped_Covid: number
  CreationDate: number
  Creator: string
  EditDate: number
  Editor: string
  T_Hospitalizado_Ped: string
  T_Paciente_Adult_NoCovid: number
  T_Paciente_Ped_NoCovid: string
  T_Paciente_Adult_Int_NoCovid: number
  T_Paciente_Ped_Int_No_Covid: number
  T_Pacient_Cama_PSINeg_NoCovid: string
  T_Casos_Unicos: number
  T_Serologicos_Pos: number
  T_Molecular_Pos: number
}

export interface TablePRHospitalDataAndNeeds{
  attributes: Attributes 
}

export interface DataPRHospitalDataAndNeeds{ 
  table: [TablePRHospitalDataAndNeeds] 
}

export interface IRootPRHospitalDataAndNeeds {
  data: [DataPRHospitalDataAndNeeds] 
}