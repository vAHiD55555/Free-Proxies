function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.151.88.220:6618",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 186.0.144.81:9797",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 204.199.140.28:999",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 141.0.8.95:80",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 38.54.57.26:20002",
        "SOCKS 35.212.180.156:58367",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 188.227.140.181:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}