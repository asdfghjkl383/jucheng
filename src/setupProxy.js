const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/m",proxy({
        target:"https://m.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/m":""
        }
    })),
    app.use("/api",proxy({
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    })),
    app.use("/l",proxy({
        target:"https://127.0.0.1:8060",
        changeOrigin:true,
        pathRewrite:{
            "^/l":""
        }
    }))
} 