export interface Langue {
  id_langue: number;
  nom_langue: string;
}

export interface AutreLangue {
  id_langue: number;
  id_langue_autre: number;
  nom_autre_langue?: string;
  is_actif?: boolean;
}

export interface TextLangue {
  id_text_langue: number;
  text_selection: string;
  text_choix_langue: string;
  text_details: string;
  text_modal_opened: string;
  text_modal_closed: string;
  text_niveau_parle: string;
  text_niveau_ecrit: string;
  text_niveau_comprehension: string;
  text_ajouter_une_langue: string;
  text_liste_langues: string;
  text_enregistrer: string;
  id_langue: number;
}
export interface Competence {
  id_competence: number;
  text_competence: string;
  text_competence_langue?: string;
  id_langue?: number;
  nom_langue?: string;
  nom_autre_langue?: string;
  niveau_1?: any;
  niveau_2?: any;
  niveau_3?: any;
  niveau?: string;
  id_niveau?: number;
}
export interface DataResponse {
  body: any;
  code: number;
  status: string;
  message: string;
}
