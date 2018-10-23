/**
 * @fileoverview Hint to validate if the doctype is correct
 */

import { Category } from 'hint/dist/src/lib/enums/category';
import { HintScope } from 'hint/dist/src/lib/enums/hintscope';
import { HintContext } from 'hint/dist/src/lib/hint-context';
import { IHint, HintMetadata, IAsyncHTMLElement } from 'hint/dist/src/lib/types';
import { debug as d } from 'hint/dist/src/lib/utils/debug';
import { StyleParse } from '@hint/parser-css/dist/src/types';
import {getUserBrowsers} from './helpers/user-browsers-config';

const debug: debug.IDebugger = d(__filename);

/*
 * ------------------------------------------------------------------------------
 * Public
 * ------------------------------------------------------------------------------
 */

export default class implements IHint {

    public static readonly meta: HintMetadata = {
        docs: {
            category: Category.interoperability,
            description: `Hint to validate if the doctype is correct`
        },
        id: 'compat-api-css',
        schema: [],
        scope: HintScope.any
    }

    public constructor(context: HintContext) {

        const checkNoDuplicateDoctype = async (resource: string, element: IAsyncHTMLElement | null, content: string): Promise<void> => {
            debug(`Checking that there is only one doctype tag in the document`);
            await context.report(resource, element, `There is more than one doctype tag in the document`);
        };

        const onParseCSS = async (styleParse: StyleParse): Promise<void> => {
            debugger
        };

        context.on('parse::css::end', onParseCSS);
    }
}
