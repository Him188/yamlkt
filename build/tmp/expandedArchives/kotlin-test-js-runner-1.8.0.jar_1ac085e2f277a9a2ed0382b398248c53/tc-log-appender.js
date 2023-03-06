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

const consoleLog = console.log.bind(console);

function consoleAppender(layout, timezoneOffset) {
    return (loggingEvent) => {
        consoleLog(
            formatMessage(
                TYPED_MESSAGE,
                layout(
                    loggingEvent,
                    timezoneOffset
                ),
                loggingEvent.level.toString()
            )
        );
    };
}

function configure(config, layouts) {
    let layout = layouts.colouredLayout;
    if (config.layout) {
        layout = layouts.layout(config.layout.type, config.layout);
    }
    return consoleAppender(layout, config.timezoneOffset);
}

module.exports.configure = configure;
