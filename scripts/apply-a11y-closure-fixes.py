from pathlib import Path

css_path = Path('assets/css/site-v2.css')
css = css_path.read_text(encoding='utf-8')
marker = '/* Accessibility closure: commercial contrast and focusable scroll regions */'
if marker not in css:
    css += '''

/* Accessibility closure: commercial contrast and focusable scroll regions */
.section-light .cta-helper{color:var(--muted-dark)}
.article-content .button-primary{color:var(--ink)}
.section-accent .eyebrow.dark{color:#344255}
.article-table-wrap:focus-visible,.exposure-table-wrap:focus-visible{outline:3px solid var(--gold-deep);outline-offset:3px}
'''
else:
    if '.section-accent .eyebrow.dark{color:#344255}' not in css:
        css += '\n.section-accent .eyebrow.dark{color:#344255}\n'
css_path.write_text(css, encoding='utf-8')

for path in Path('intelligence').glob('*.html'):
    text = path.read_text(encoding='utf-8')
    text = text.replace('class="article-table-wrap">', 'class="article-table-wrap" tabindex="0" aria-label="Scrollable comparison table">')
    path.write_text(text, encoding='utf-8')

path = Path('decision-room.html')
text = path.read_text(encoding='utf-8')
text = text.replace('class="exposure-table-wrap">', 'class="exposure-table-wrap" tabindex="0" aria-label="Scrollable economic exposure comparison">')
path.write_text(text, encoding='utf-8')
