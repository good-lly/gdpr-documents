var markdownpdf = require('markdown-pdf');

var mdDocs = [
    './docs/cz_česky/gdpr_access_cz.md',
    './docs/cz_česky/gdpr_erase_cz.md',
    './docs/de_deutsche/gdpr_access_de.md',
    './docs/de_deutsche/gdpr_erase_de.md',
    './docs/en_english/gdpr_access_en.md',
    './docs/en_english/gdpr_erase_en.md',
    './docs/es_español/gdpr_access_es.md',
    './docs/es_español/gdpr_erase_es.md',
    './docs/fr_français/gdpr_access_fr.md',
    './docs/fr_français/gdpr_erase_fr.md',
    './docs/it_italiano/gdpr_access_it.md',
    './docs/it_italiano/gdpr_erase_it.md',
    './docs/nl_nederlands/gdpr_access_nl.md',
    './docs/nl_nederlands/gdpr_erase_nl.md',
    './docs/pl_polsky/gdpr_access_pl.md',
    './docs/pl_polsky/gdpr_erase_pl.md',
  ],
  pdfDocs = mdDocs.map(function(d) {
    return d.replace('.md', '.pdf');
  });

markdownpdf()
  .from(mdDocs)
  .to(pdfDocs, function() {
    pdfDocs.forEach(function(d) {
      console.log('Created', d);
    });
  });
