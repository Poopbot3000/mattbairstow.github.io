// ─────────────────────────────────────────────────────────────────
// projects.js — single source of truth for all project data
//
// Edit this file to update titles, descriptions, and lead images
// everywhere on the site at once.
//
// 'slug'      must match the folder name inside /projects/
// 'leadImage' is the filename of the lead image (or video) inside
//             that project folder — this is what shows on the homepage
// 'number'    is used for the 01 / 02 label — update if you reorder
// ─────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    number:     '01',
    slug:       'drumPong',
    title:      'drumPong',
    description: 'Like pong, but with drums. Teensy and programmable LED',
    leadImage:  'img-01-01.jpg',   // first image shown on homepage + top of project page
  },
  {
    number:     '02',
    slug:       'Anglerfish Mask',
    title:      'Anglerfish Mask',
    description: 'Live performance apparel',
    leadImage:  'img-02-01.jpg',
  },
  {
    number:     '03',
    slug:       'project-title-three',
    title:      'Project Title Three',
    description: 'A short line or two describing the work — materials, process, or concept. Keep it spare.',
    leadImage:  'img-03-01.jpg',
  },
  {
    number:     '04',
    slug:       'project-title-four',
    title:      'Project Title Four',
    description: 'A short line or two describing the work — materials, process, or concept. Keep it spare.',
    leadImage:  'img-04-01.jpg',
  },
  {
    number:     '05',
    slug:       'project-title-five',
    title:      'Project Title Five',
    description: 'A short line or two describing the work — materials, process, or concept. Keep it spare.',
    leadImage:  'img-05-01.jpg',
  },
  {
    number:     '06',
    slug:       'project-title-six',
    title:      'Project Title Six',
    description: 'A short line or two describing the work — materials, process, or concept. Keep it spare.',
    leadImage:  'img-06-01.jpg',
  },
];
