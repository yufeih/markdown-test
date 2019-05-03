const { safeLoad, safeDump } = require('js-yaml');
const glob = require('glob');
const { readFileSync, writeFileSync } = require('fs');

for (const file of glob.sync('./docs/specs/**/*')) {
    let output = [];
    for (const text of readFileSync(file, 'utf8').split('\n---')) {
        if (text.trim().length > 0) {
            const header = text.split('\n').filter(l => l.startsWith('#')).join('\n');
            const spec = safeLoad(text);
            const specText = safeDump(spec, { flowLevel: 80, lineWidth: 9999999 }).replace(/: null/g, ':').replace(/(\s*)\'(https:.*?)\':/gi, '$1$2:')
            output.push(header + '\n' + specText);
        }
    }
    writeFileSync(file, output.join('---\n'));
}
