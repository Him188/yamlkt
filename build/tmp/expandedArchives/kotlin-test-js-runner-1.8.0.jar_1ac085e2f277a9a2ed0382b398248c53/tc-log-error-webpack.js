'use strict';

/**
 * From mocha-teamcity-reporter
 * The MIT License
 * Copyright (c) 2016 Jamie Sherriff
 */

const TYPED_MESSAGE = `##teamcity[message text='%s' type='%s']`;

/**
 * from teamcity-service-messages
 * Copyright (c) 2013 Aaron Forsander
 *
 * Escape string for TeamCity output.
 * @see https://confluence.jetbrains.com/display/TCD65/Build+Script+Interaction+with+TeamCity#BuildScriptInteractionwithTeamCity-servMsgsServiceMessages
 */

const format = require('format-util');

function tcEscape(str) {
    if (!str) {
        return '';
    }

    return str
        .toString()
        .replace(/\x1B.*?m/g, '') // eslint-disable-line no-control-regex
        .replace(/\|/g, '||')
        .replace(/\n/g, '|n')
        .replace(/\r/g, '|r')
        .replace(/\[/g, '|[')
        .replace(/\]/g, '|]')
        .replace(/\u0085/g, '|x') // next line
        .replace(/\u2028/g, '|l') // line separator
        .replace(/\u2029/g, '|p') // paragraph separator
        .replace(/'/g, '|\'');
}

function formatMessage() {
    let formattedArguments = [];
    const args = Array.prototype.slice.call(arguments, 0);
    // Format all arguments for TC display (it escapes using the pipe char).
    let tcMessage = args.shift();
    args.forEach((param) => {
        formattedArguments.push(tcEscape(param));
    });
    formattedArguments.unshift(tcMessage);
    return format(...formattedArguments);
}

/*
 * Copyright 2010-2020 JetBrains s.r.o. and Kotlin Programming Language contributors.
 * Use of this source code is governed by the Apache 2.0 license that can be found in the license/LICENSE.txt file.
 */

const ModuleNotFoundError = require("webpack/lib/ModuleNotFoundError");

class TeamCityErrorPlugin {
    warningsFilter(value) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }
        return value.map(filter => {
            if (typeof filter === "string") {
                return (warning, warningString) => warningString.includes(filter);
            }
            if (filter instanceof RegExp) {
                return (warning, warningString) => filter.test(warningString);
            }
            if (typeof filter === "function") {
                return filter;
            }
            throw new Error(
                `Can only filter warnings with Strings or RegExps. (Given: ${filter})`
            );
        });
    }

    apply(compiler) {
        compiler.hooks.done.tap('TeamCityErrorPlugin', (stats) => {

            const compilation = stats.compilation;
            const warningsFilters = this.warningsFilter(compilation.options.ignoreWarnings);

            compilation.errors.forEach(error => {
                const type = 'error';
                if (error instanceof ModuleNotFoundError) {
                    console[type](
                        formatMessage(TYPED_MESSAGE, error.message, type)
                    );
                } else {
                    console[type](formatMessage(TYPED_MESSAGE, error.message, type));
                }
            });

            compilation.warnings
                .filter(warning => warningsFilters.some(warningFilter => !warningFilter(warning, compilation)))
                .forEach(warning => {
                    const type = 'warn';

                    console[type](formatMessage(TYPED_MESSAGE, warning.message, type));
                });
        });
    }
}

module.exports = TeamCityErrorPlugin;
