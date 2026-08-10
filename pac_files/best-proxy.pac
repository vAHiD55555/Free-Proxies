function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 93.183.88.197:9051",
        "SOCKS 130.49.187.61:1082",
        "SOCKS 104.161.23.122:5003",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 172.234.12.236:8080",
        "SOCKS 217.177.33.53:1080",
        "SOCKS 8.213.134.213:8083",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 175.27.250.85:44163",
        "SOCKS 188.242.163.28:21",
        "SOCKS 116.104.53.235:1080",
        "SOCKS 89.19.214.171:1080",
        "SOCKS 64.111.92.171:10101",
        "SOCKS 138.0.143.120:8080",
        "SOCKS 43.162.90.69:1080",
        "SOCKS 47.250.115.134:1080",
        "SOCKS 109.238.95.167:31255",
        "SOCKS 103.97.140.64:8080",
        "SOCKS 178.250.156.112:443",
        "SOCKS 15.204.235.27:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}