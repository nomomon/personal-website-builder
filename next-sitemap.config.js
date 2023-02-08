import config from '@/configuration';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: config.siteUrl,
    generateRobotsTxt: false,
};
