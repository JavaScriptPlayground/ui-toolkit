/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

export default {
  name: 'colon-spacing',
  rules: {
    'after-function': {
      create(context): Deno.lint.LintVisitor {
        return {
          TSTypeAnnotation(node): void {
            if (node.parent.type === 'FunctionDeclaration') {
              const functionStart = node.parent.range[0];
              const sectionEnd = node.range[0];
              const index =
                context.sourceCode.getText(node.parent).substring(0, sectionEnd - functionStart).search(/\) *$/) + 1;
              const sectionStart = functionStart + index;

              if (index !== -1 && sectionEnd - sectionStart !== 1) {
                context.report({
                  message: `Wrong colon spacing.`,
                  range: [sectionStart - 1, sectionEnd + 1],
                  fix(fixer) {
                    return fixer.replaceTextRange([sectionStart, sectionEnd], ' ');
                  }
                });
              }
            }
          }
        };
      }
    }
  }
} satisfies Deno.lint.Plugin;
