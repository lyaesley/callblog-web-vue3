module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: process.env.VUE_APP_API,
                ws: true,
                changeOrigin: true,
            },
        }
    }
};