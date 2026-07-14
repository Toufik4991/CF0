# CF0 — Game Design Document (source unique de vérité)

Ce document est la référence unique du projet. Toute demande de changement doit être répercutée ici en même temps que dans le code (voir `CF0.md`, règle n°3). Il consolide et remplace les documents de travail suivants, conservés dans `Downloads/` comme historique :
- `prompt-claude-code-chasse-au-tresor.md` (cahier des charges initial)
- `CF0-feuille-de-route.md` (ordre de développement)
- `CF0-contenu-parcours.md` (données réelles du Chemin 1)

---

## 1. Identité

- **Nom du jeu** : CF0 — uniquement, pas de sous-titre.
- **Format** : PWA de chasse au trésor / jeu de piste géolocalisé, multi-équipes, temps réel.
- **Volumétrie** : usage ponctuel, max 3 équipes / 12 joueurs, un seul événement à la fois.

## 2. Stack technique

- Frontend : Next.js (App Router) + TypeScript + Tailwind CSS
- Backend / DB / Realtime : Supabase (Postgres + Realtime + Storage + Auth admin)
- Hébergement : Vercel (frontend) + Supabase (backend), tiers gratuits
- PWA : manifest + service worker (offline partiel)

## 3. Thème visuel actif

**Jungle / Enfance** (onirisme) — thème actif de CF0, remplace le "Bois / Minimaliste" du cahier des charges initial (changement demandé explicitement). Révisé en cours de route pour être plus rond, plus coloré et plus "travaillé" (retour utilisateur : l'interface manquait de vie).

- Palette vive : vert feuillage `#219150`, fond citron vert clair `#F3FBD8`, jaune soleil (secondaire) `#FFC93C`, rose/baie (tertiaire) `#FF6F91`, accent mangue `#FF7A45`, glow doré `#FFD23F`, texte anthracite-vert `#1A3A22`
- Coins très arrondis (radius carte 2rem, boutons en pilule via `buttonRadius: 9999px`)
- Police display : **Fredoka** (ronde, ludique) ; police texte : Work Sans (sobre, lisible en extérieur)
- Décor jungle animé en fond (`JungleDecoration.tsx`) : feuilles/lianes colorées en coins d'écran + points scintillants (effet onirique), remplace la texture grain générique pour ce thème
- Icônes/emoji jungle sur chaque écran (mini-jeux, indice, zone, équipes, victoire) pour la variété visuelle, sans texte narratif inventé
- Implémenté dans `src/lib/themes.ts` (id `jungle`), `src/components/ThemeProvider.tsx`, `src/components/JungleDecoration.tsx`

Le système de thèmes reste multi-presets (no-code, choisi par chasse) : `bois-minimaliste`, `mystere`, `festif`, `jungle` existent tous dans `src/lib/themes.ts`, chacun avec ses propres `colors` (incluant `secondary`/`tertiary`), `radius`, `buttonRadius` et `decoration`. CF0 utilise `jungle`.

## 4. Boucle de jeu

1. QR code unique par équipe → lien `/play/[teamToken]`
2. **Onboarding joueur** (ajouté après le cahier des charges initial, voir §5)
3. Le joueur arrive sur l'étape en cours de son équipe. Mini-jeu 1 s'affiche directement.
4. Mini-jeu réussi → un code de déverrouillage s'affiche (défini manuellement par l'admin, pas généré aléatoirement)
5. Le joueur saisit ce code sur l'écran "Entrer le code"
6. Code correct → débloque la page indice (média photo/vidéo + texte optionnel)
7. L'indice désigne une zone GPS (point + rayon en mètres)
8. Hors zone : bouton "Lancer le mini-jeu" grisé, non cliquable
9. En zone (suivi GPS continu, hystérésis anti-oscillation) : bouton actif avec glow
10. Clic manuel → mini-jeu suivant, jusqu'à la dernière étape → écran de victoire

Classement temps réel entre équipes selon étape atteinte / temps.

## 5. Onboarding joueur (ajout post-cahier des charges)

Inspiré du flux de l'ancien prototype `Toufik4991/GPS0`, adapté à CF0 :

1. **Prénom** — saisie libre, stockée en local (par appareil, pas par équipe)
2. **Personnage** — selfie caméra, pixelisé en 32×32 (comme GPS0), affiché ensuite en avatar rond dans le menu et l'écran d'accueil. Si caméra refusée/indisponible : bouton "Continuer sans photo"
3. **Choix de l'équipe** — le joueur choisit son équipe (mock : Équipe 1/2/3, chacune avec sa propre icône/couleur), stockée dans le profil local (`teamId`)
4. **Choix du chemin** — 3 chemins proposés : Chemin 1, Chemin 2, Chemin 3. **Seul Chemin 1 est actif** ; Chemin 2 et 3 affichés désactivés ("bientôt")
5. **Confirmation du parcours** — "Bienvenue [prénom]", nom du jeu (CF0), équipe rejointe, nombre d'étapes, bouton "C'est parti"
6. Entrée dans la boucle de jeu (§4)

Le profil joueur (prénom + selfie) est sauvegardé en `localStorage` (`cf0_player_profile`). Un menu HUD (☰) est accessible en permanence pendant la partie : avatar + prénom, accès Classement, "Modifier mon profil" (efface le profil local et relance l'onboarding).

Implémenté dans `src/components/onboarding/` et `src/components/game/GameShell.tsx`.

## 6. Parcours / Chemins

- 3 chemins prévus au total dans l'interface joueur.
- **Chemin 1** : seul chemin avec du contenu, correspond aux 9 étapes réelles listées en §7.
- Chemin 2 et 3 : verrouillés dans l'UI, aucun contenu pour l'instant.
- Le mock de développement (`src/lib/mock-data.ts`) utilise directement les 9 vraies coordonnées GPS et codes de déverrouillage du Chemin 1 (§7) — plus de données factices à 4 étapes. Le mini-jeu assigné à chaque étape reste un placeholder générique (rotation des 6 types) en attendant l'Étape 3 (premier mini-jeu réel) ; le rayon de zone (50 m) est une valeur par défaut le temps que l'admin l'ajuste par étape.

## 7. Contenu réel — Chemin 1 (9 étapes)

Codes et coordonnées définitifs, mini-jeux/indices/bonus/vidéos encore à créer.

| Étape | Latitude | Longitude | Code | Mini-jeu | Indice | Bonus | Vidéo |
|---|---|---|---|---|---|---|---|
| 1 | 47.47018868679993 | -0.5457921250672614 | `6767` | à créer | photo ou phrase — à créer | non défini | non définie |
| 2 | 47.47011701179594 | -0.5493858993639028 | `8888` | à créer | photo ou phrase — à créer | non défini | non définie |
| 3 | 47.470199398880105 | -0.5542471707663097 | `ZEM1` | à créer | photo ou phrase — à créer | non défini | non définie |
| 4 | 47.46934044936432 | -0.5564217756452269 | `HUPS` | à créer | photo ou phrase — à créer | non défini | non définie |
| 5 | 47.46927957277513 | -0.5584298315460416 | `1234` | à créer | photo ou phrase — à créer | non défini | non définie |
| 6 | 47.47207325041011 | -0.5639875005431632 | `CUL1` | à créer | photo ou phrase — à créer | non défini | non définie |
| 7 | 47.47413684761758 | -0.5622581209765974 | `VO76` | à créer | photo ou phrase — à créer | non défini | non définie |
| 8 | 47.47447353121981 | -0.5582077679017797 | `1994` | à créer | photo ou phrase — à créer | non défini | non définie |
| 9 | 47.472289958782774 | -0.55754703640992 | `69LY` | à créer | photo ou phrase — à créer | non défini | non définie |

Point ouvert : la mécanique "Bonus" n'est pas encore définie (liée au barème points/badges du §11, ou mécanique séparée ?) — à clarifier avant l'Étape 7.

## 8. Back-office admin (à construire — Étape 6)

Interface protégée par Supabase Auth (email/mot de passe) permettant de :
- Créer / dupliquer / supprimer une chasse, choisir un thème parmi les presets
- Créer un nombre illimité d'étapes, réordonnables (drag & drop), avec mini-jeu + config, code, média d'indice, zone GPS (carte interactive Leaflet/MapLibre + recherche d'adresse)
- Gérer les équipes (QR code + lien unique, renommage, suppression, reset de progression)
- Définir le code maître (accès d'urgence) + log d'utilisation
- Configurer le barème de points (base + bonus rapidité) et les badges cachés
- Dashboard de suivi temps réel (étape/statut/classement par équipe)
- Mode prévisualisation sans affecter la progression réelle

## 9. Bibliothèque de mini-jeux (au moins 5-6, réutilisables)

Quiz, Memory, Puzzle glissant, Décryptage/cipher, Réflexe, Association mot-image/texte à trous. Chaque mini-jeu = composant isolé recevant une config JSON. Actuellement : placeholder générique uniquement (`MiniGamePlaceholder`), aucun mini-jeu réel implémenté (Étape 3 à venir).

## 10. GPS & zones (à construire — Étape 7)

- `watchPosition` avec throttle (3-5s)
- Distance via Haversine
- Hystérésis : 2-3 lectures cohérentes avant de changer d'état (anti-oscillation)
- Gestion refus de permission, perte de précision (`accuracy` > 50m), reprise au premier plan (`visibilitychange`)
- Progression partagée par équipe via Supabase Realtime (multi-appareils)

## 11. Mode offline (à construire — Étape 9)

- Cache offline (service worker) des assets, thème, médias déjà chargés, config des étapes
- Code + zone GPS utilisables hors-ligne (cache client), sync différée dès reconnexion (queue + retry)
- Indicateur discret "hors-ligne / sync en attente", jamais de blocage joueur

## 12. Fonctionnalités complémentaires (Étape 9)

- Menu réglages musique/SFX (3 pistes ambiance + 1 mini-jeu, SFX courts), préférences locales par appareil
- Bouton/code maître (appui long 3s sur logo), modale protégée, log d'utilisation (équipe/étape/date)
- Timer global + timer par étape (stocké en base)
- Points (base + bonus dégressif rapidité) + badges cachés (Éclair, Sans faute, Perfectionniste, custom)

## 13. Modèle de données (Supabase — Étape 5)

- `hunts` : id, nom, thème, statut, code_maitre, points_base_par_etape, formule_bonus_temps (jsonb)
- `stages` : id, hunt_id, ordre, mini_jeu_type, mini_jeu_config (jsonb), code, média_url, média_type, texte_indice, zone_lat, zone_lng, zone_radius_m
- `teams` : id, hunt_id, nom, token_qr, current_stage_id, started_at, finished_at, points_total
- `team_progress` / `events` : log des événements (étape, code, zone, mini-jeu, code maître) avec timestamp
- `badges` : id, hunt_id, nom, description, icône, type_condition, valeur_condition
- `team_badges` : team_id, badge_id, obtenu_at
- `admins` : liés à Supabase Auth

## 14. Feuille de route (ordre strict, validation utilisateur requise entre chaque étape)

| Étape | Contenu | Statut |
|---|---|---|
| 1 | Squelette visuel, données factices, thème | ✅ Fait (thème Jungle au lieu de Bois/Minimaliste) |
| 2 | Parcours joueur complet sur 1 étape factice (mini-jeu → code → indice → zone) | ✅ Fait, + onboarding prénom/personnage/chemin ajouté |
| 3 | Premier mini-jeu réel (ex: quiz) | ⏳ À faire |
| 4 | Ajustements visuels libres | ⏳ En attente |
| 5 | Connexion Supabase (schéma + RLS) | ⏳ En attente |
| 6 | Back-office admin complet | ⏳ En attente |
| 7 | GPS réel (Haversine, hystérésis, permissions) avec les 9 vraies coordonnées | ⏳ En attente |
| 8 | Temps réel multi-équipes (Supabase Realtime) | ⏳ En attente |
| 9 | Offline, réglages son, timer, points/badges, code maître | ⏳ En attente |
| 10 | Déploiement final (GitHub, Vercel, Supabase prod) | ⏳ Déploiement Vercel déjà en place (`cf0.vercel.app`), reste GitHub + Supabase prod |

**Règle** : ne jamais passer à l'étape suivante sans validation explicite de l'utilisateur, sauf sous-tâches internes à une même étape.

## 15. Anti-triche & sécurité

- Vérification côté serveur de la progression réelle avant de servir le contenu d'une étape (empêcher un accès direct par modification d'URL)
- RLS Supabase : un joueur ne voit que les données de sa propre équipe/chasse ; admin authentifié uniquement

## 16. Points ouverts / à clarifier

- Mécanique "Bonus" du Chemin 1 (§7) : liée aux points/badges existants ou système séparé ?
- Contenu des mini-jeux, indices (photo/phrase), vidéos des 9 étapes : à fournir avant l'Étape 7
- Chemin 2 et Chemin 3 : contenu totalement à définir, actuellement juste verrouillés dans l'UI
