export default function transformer(file, api) {
    const j = api.jscodeshift;

    return j(file.source)
        .find(j.ImportDeclaration)
        .forEach(path => {
            if ( path.value.source.value === "aircto-ui" ) {
                path.value.source.value = "@aircto/ui";
            }
        })
        .toSource();
}