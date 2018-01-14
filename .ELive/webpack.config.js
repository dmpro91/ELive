'use strict'const path = require('path');const merge = require('webpack-merge');const babel = require('./webpack/babel');const devServ = require('./webpack/devserver');const  uglifyJS = require('./webpack/uglifyJS');const PATHS = {  source: path.join(__dirname, '../src'),  build: path.join(__dirname, '../build')};const COMMON = merge([    {        devtool: 'source-map',        entry: PATHS.source + '/scripts/index.js',        output: {            filename: 'bundle.js',            path: PATHS.build,            publicPath: '/build/'        }    },    babel()]);module.exports = function (env) {    if (env === 'production') {        return merge([            {},            COMMON,            uglifyJS()        ])    }    if (env === 'development') {        return merge([            {},            COMMON,            devServ(),        ])    }};