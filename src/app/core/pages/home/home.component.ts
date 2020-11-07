import { Component, OnInit } from '@angular/core';
import { TextLangue, Langue, Competence, AutreLangue, DataResponse } from '../../../shared/model/data_model';
import { RequestService } from '../../../shared/services/request.service';
import { ENDPOINTS } from '../../../shared/global/endpoints';
import { DEFAULT_LANGUAGE } from 'src/app/shared/global/codes';
import { CorePrototype } from '../../services/core.prototype';
import { Loader } from '../../../shared/helpers/loader';
import { CommunicationService } from '../../../shared/helpers/communication';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textLangue: TextLangue = {
    id_text_langue: 1,
    text_selection: 'Sélectionnez un élément',
    text_choix_langue: 'Choisir une langue',
    text_details: 'Details',
    text_modal_opened: 'Modal ouverte',
    text_modal_closed: 'Modal fermé',
    text_niveau_parle: 'Niveau parlé',
    text_niveau_ecrit: 'Niveau écrit',
    text_niveau_comprehension: 'Niveau comprehension',
    text_ajouter_une_langue: 'Ajouter une langue',
    text_liste_langues: 'Liste des langues',
    text_enregistrer: 'Enregistrer',
    id_langue: 1
  };
  modalState = false;
  languages: AutreLangue[] = [];
  activeLanguage: AutreLangue = {
    id_langue: 1,
    is_actif: true,
    id_langue_autre: 1
  };
  // com = new Communication();

  activeCompetence: Competence = {
    id_langue: 1,
    id_competence: 1,
    text_competence_langue: 'Inconnu',
    text_competence: 'Inconnu',
    nom_langue: 'Francais',
    nom_autre_langue: 'Francais',

  };
  deleteComponent: Competence = {
    id_langue: 1,
    id_competence: 1,
    text_competence_langue: 'Inconnu',
    text_competence: 'Inconnu',
    nom_langue: 'Francais',
    nom_autre_langue: 'Francais',

  };
  detailsCompetence: Competence = {
    id_langue: 1,
    id_competence: 1,
    text_competence_langue: 'Inconnu',
    text_competence: 'Inconnu',
    nom_langue: 'Francais',
    nom_autre_langue: 'Francais',
    niveau_1: {
      id_langue: 1,
      id_niveau: 1,
      id_competence: 1,
      text_competence_langue: 'Inconnu'
    },
    niveau_2: {
      id_langue: 1,
      id_niveau: 2,
      id_competence: 1,
      text_competence_langue: 'Inconnu'
    },
    niveau_3: {
      id_langue: 1,
      id_niveau: 3,
      id_competence: 1,
      text_competence_langue: 'Inconnu'
    }

  };
  langueCompetence: Competence[] = [];
  textCompetences: Competence[] = [];
  constructor(private request: CorePrototype, private com: CommunicationService) { }

  ngOnInit(): void {

    console.log(this.textLangue);
    this.getTextLangue(DEFAULT_LANGUAGE.id_langue);
  }

  /**
   * Recuperer toutes les langues mais ecrit dans une langue particuliere
   * @param idLangue Id de la langue concerne
   */
  getTextLangue(idLangue: number) {
    Loader.loadBack();
    this.request.get(ENDPOINTS.get_text_langue, { id_langue: idLangue }).then((data: DataResponse) => {
      console.log(data);
      this.textLangue = data.body;
      this.getGetNomAutreLangue(idLangue);
    }).catch((error) => {
      console.error(error);
    });
  }

  /**
   * Recuperer toutes les langues mais ecrit dans une langue particuliere
   * @param idLangue Id de la langue concerne
   */
  getGetNomAutreLangue(idLangue: number) {
    this.request.get(ENDPOINTS.get_noms_langue_autre, { id_langue: idLangue }).then((data: DataResponse) => {
      console.log(data);
      data.body.forEach(element => {
        element.is_actif = false;
      });
      this.languages = data.body;
      const lang = data.body.filter((item: AutreLangue) => item.id_langue === this.activeLanguage.id_langue);
      // console.log(index)
      this.activeLanguage = lang[0];
      this.activeLanguage.is_actif = true;
      this.getTextCompetences(idLangue);

    }).catch((error) => {
      console.error(error);
    });
  }

  /**
   * Recuperer toutes les competences mais ecrit dans une langue particuliere
   * @param idLangue Id de la langue concerne
   */
  getTextCompetences(idLangue: number) {
    this.request.get(ENDPOINTS.get_textes_competence, { id_langue: idLangue }).then((data: DataResponse) => {
      this.textCompetences = data.body;
      this.getCompetences(idLangue);
    });
  }

  /**
   * Recuperer toutes les competences avec les niveaux associe  ecrit dans une langue particuliere
   * @param idLangue Id de la langue concerne
   */
  getCompetences(idLangue: number) {
    this.request.get(ENDPOINTS.get_competences_langue, { id_langue: idLangue }).then((data: DataResponse) => {
      this.langueCompetence = data.body;
      Loader.stoploadingBack();

    });
  }

  /**
   * Switch de langue et recuperation des donnes
   * @param idLangue Id de la langue concerne
   */
  activeLangue(langue: AutreLangue) {
    if (this.activeLanguage.id_langue !== langue.id_langue) {
      this.activeLanguage = langue;
      this.getTextLangue(langue.id_langue);
      // this.getGetNomAutreLangue(langue.id_langue);
    }
  }

  /**
   * Methode pour prendre en main les details d'une competence
   * @param $event Object d'une competence emit par le composant qui gere les competences
   */
  detailsReceived($event: any) {
    console.log($event);
    this.detailsCompetence = $event;
    this.com.sendMessage('Open Modal Details');
    this.modalState = true;

  }

  /**
   * Methode pour prendre en main la mise a jour d'une competence
   * @param $event Object d'une competence emit par le composant qui gere les competences
   */
  updateReceived($event: any) {
    this.activeCompetence = $event;
  }

  /**
   * Methode pour prendre en main les details d'une competence
   * @param $event Object d'une competence emit par le composant qui gere les competences
   */
  deleteReceived($event: any) {
    console.log($event);
    this.deleteComponent = $event;
    this.com.sendMessage('Open Modal confirm');
  }

  /**
   * Methode pour prendre en main la modal qui permet de confirmer une action
   * @param $event Object d'une competence emit par le composant qui gere les competences
   */
  detailsModalClose($event: any) {
    this.modalState = false;
    // this.com.clearMessage();
  }

  /**
   * Methode pour prendre en main les details d'une competence
   * @param $event Object d'une competence emit par le composant qui gere les competences
   */
  decisonModal($event: any) {
    // this.com.clearMessage();
    if ($event) {
      //launch delete
    } else {

    }
  }
}
