import { ProxyConfigurationOptions } from '@crawlee/core';
/**
 * Input schema in TypeScript format.
 */
export interface Input {
    startUrls: string[];
    instructions: string;
    proxyConfiguration?: ProxyConfigurationOptions;
    openaiApiKey?: string; // We can pass openaiApiKey as env variable locally
    model?: string;
    maxIterations?: number;
    storeHtml?: boolean;
}
