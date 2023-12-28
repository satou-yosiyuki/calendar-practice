/** @type {import('next').NextConfig} */
const nextConfig = {};
const withTM = require("next-transpile-modules")(["@fullcalendar"]);
module.exports = withTM({});

module.exports = nextConfig;
