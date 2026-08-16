function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 116.96.32.160:1100",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 8.211.194.78:8081",
        "SOCKS 46.173.26.104:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 158.220.101.43:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 194.163.174.78:1082",
        "SOCKS 116.96.32.160:1041",
        "SOCKS 95.31.16.116:1081",
        "SOCKS 51.159.97.242:10006",
        "SOCKS 103.3.59.208:8080",
        "SOCKS 165.154.162.73:8888",
        "SOCKS 128.199.37.92:1080",
        "SOCKS 171.253.95.28:2089",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 217.25.229.244:2080",
        "SOCKS 65.108.246.14:9050",
        "SOCKS 192.9.231.220:30001",
        "SOCKS 45.144.54.40:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}