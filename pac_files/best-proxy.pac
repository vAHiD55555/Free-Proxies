function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 114.130.153.122:58080",
        "SOCKS 46.16.229.254:8079",
        "SOCKS 175.158.63.166:1111",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 66.29.156.102:8080",
        "SOCKS 103.84.177.30:8083",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 103.226.232.205:8099",
        "SOCKS 34.141.27.50:3128",
        "SOCKS 200.39.120.78:999",
        "SOCKS 43.209.130.76:8713",
        "SOCKS 47.79.43.52:1122",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 160.25.48.33:9090",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 103.184.50.102:9090",
        "SOCKS 186.182.104.177:8080",
        "SOCKS 128.140.113.110:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}