function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.124.227.90:10808",
        "SOCKS 20.78.213.56:80",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 152.53.171.242:37259",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 24.199.107.98:8080",
        "SOCKS 152.53.171.242:12931",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 199.217.98.100:2525",
        "SOCKS 47.236.181.191:33333",
        "SOCKS 128.140.76.145:29567",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 3.24.178.81:80",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 159.8.114.37:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}