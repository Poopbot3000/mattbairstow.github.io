// ─────────────────────────────────────────────────────────────────
// projects.js — single source of truth for all project data
//
// 'slug'      must exactly match the folder name inside /projects/
// 'title'     shown on homepage and project page
// 'description' short text shown on homepage
// 'leadImage' filename of the thumbnail shown on homepage.
//             This file must live inside the project folder.
//             e.g. for slug 'drumpong', the file is at:
//             projects/drumpong/img-01-01.jpg
// ─────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    number:      '01',
    slug:        'drumpong',
    title:       'drumPong',
    description: 'Pong, with drums.',
    leadImage:   'img-01-01.jpg',
  },
  {
    number:      '02',
    slug:        'Anglerfish-Mask',
    title:       'Anglerfish Mask',
    description: 'Live performance apparel',
    leadImage:   'img-02-01.jpg',
  },
  {
    number:      '03',
    slug:        'Trap-Base',
    title:       'Trap Base',
    description: 'Festival Abode... maybe it’s a trap?',
    leadImage:   'img-03-01.jpg',
  },
  {
    number:      '04',
    slug:        'Space-Car',
    title:       'Space Car',
    description: 'Rally car adornments',
    leadImage:   'img-04-01.jpg',
  },
  {
    number:      '05',
    slug:        'LED-Panel',
    title:       'LED Panel',
    description: 'Colourful and bright lightbox.',
    leadImage:   'img-05-01.jpg',
  },
  {
    number:      '06',
    slug:        'LED-Cloud-Sticks',
    title:       'LED Cloud Sticks',
    description: 'Colourful and bright light tubes.',
    leadImage:   'img-06-01.jpg',
  },
];
