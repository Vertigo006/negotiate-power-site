from pathlib import Path

for target in [
    Path('.github/workflows/cleanup-qa-artifacts.yml'),
    Path('CLEANUP_MARKER.tmp'),
    Path('STOP_CREATING_TEMP_FILES'),
    Path('cleanup-note.txt'),
    Path('scripts/cleanup-qa-artifacts.py'),
]:
    if target.exists():
        target.unlink()

qa = Path('.github/workflows/qa-smoke.yml')
text = qa.read_text(encoding='utf-8')
text = text.replace('      - \'scripts/apply-a11y-closure-fixes.py\'\n', '')
text = text.replace('      - run: python scripts/apply-a11y-closure-fixes.py && bash scripts/commercial-closure-qa.sh', '      - name: Final commercial closure matrix\n        run: bash scripts/commercial-closure-qa.sh')
qa.write_text(text, encoding='utf-8')
