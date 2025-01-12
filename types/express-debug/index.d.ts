// Type definitions for express-debug 1.1.1
// Project: https://github.com/devoidfury/express-debug
// Definitions by: Federico Bond <https://github.com/federicobond>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import debug = require('express-debug');
    debug(app, options);

 =============================================== */

import express = require("express");

interface CustomPanel {
    name: string;

    template: string;

    process(locals: any): any;

    standalone?: boolean | undefined;

    initialize?(req: express.Request): void;

    finalize?(req: express.Request): void;

    pre_render?(req: express.Request): void;

    post_render?(req: express.Request): void;

    options?: any;
}

/**
 * Node.js middleware for serving a favicon.
 */
declare function debug(app: express.Application, settings?: {
    /**
     * How deep to recurse through printed objects. This is the default unless the
     * print_obj function is passed an options object with a 'depth' property.
     */
    depth?: number | undefined;

    /**
     * Absolute path to a css file to include and override EDT's default css.
     */
    theme?: string | undefined;

    /**
     * Additional panels to show.
     */
    extra_panels?: CustomPanel[] | undefined;

    /**
     * Allows changing the default panel.
     */
    panels?: string[] | undefined;

    /**
     * Path to render standalone express-debug.
     */
    path?: string | undefined;

    /**
     * If you need to add arbitrary attributes to the containing element of EDT,
     * this allows you to.
     */
    extra_attrs?: string | undefined;

    /**
     * Global option to determine sort order of printed object values. false for
     * default order, true for basic default sort, or a function to use for sort.
     */
    sort?: boolean | ((a: number, b: number) => number) | undefined;
}): void;

export = debug;
