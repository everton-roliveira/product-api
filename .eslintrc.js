module.exports = {
	"root": true,
	"env": {
		"node": true,
		"commonjs": true,
		"es6": true,
		"jquery": false,
		"jest": true,
		"jasmine": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": "2018"
	},
	"rules": {
		// ESTILOS
		"indent": [ "warn", "tab", { "SwitchCase": 1 } ],
		"quotes": [ "warn", "double" ],
		"semi": [ "error", "always" ],
		"no-var": [ "error" ],
		"no-console": [ "off" ],
		"no-unused-vars": [ "warn" ],
		"no-mixed-spaces-and-tabs": [ "warn" ],
		"array-bracket-spacing": [ "error", "always", { "singleValue": true } ],
		"capitalized-comments": [ "error" ],
		"block-spacing": "error",
		"new-cap": "error",
		"no-lonely-if": "error",

		// POSSIVEIS ERROS
		"no-unreachable-loop": "error",

		// MELHORES PRÁTICAS
		"accessor-pairs": "error",
		"array-callback-return": "error",
		"class-methods-use-this": "error",
		"grouped-accessor-pairs": "error",
		"max-classes-per-file": "error",
		"no-alert": "error",
		"no-constructor-return": "error",
		"no-empty-function": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-lone-blocks": "error",
		"no-new-func": "error",
		"no-return-await": "error",
		"no-self-compare": "error",
		"no-unmodified-loop-condition": "error",
		"require-await": "error"
	}
};
