function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.109.12:39452",
        "SOCKS 38.207.189.159:16993",
        "SOCKS 203.189.158.218:1080",
        "SOCKS 152.53.171.242:30255",
        "SOCKS 85.133.227.150:80",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 152.53.171.242:30059",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 160.20.55.235:8080",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 203.189.152.142:1080",
        "SOCKS 146.235.19.84:10805",
        "SOCKS 8.212.178.171:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}