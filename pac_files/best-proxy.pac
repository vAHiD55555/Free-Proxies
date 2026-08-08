function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.97.171.33:8080",
        "SOCKS 103.136.106.5:1081",
        "SOCKS 158.220.101.43:1080",
        "SOCKS 185.205.210.154:8102",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 132.243.16.47:7890",
        "SOCKS 175.27.250.85:44085",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 195.160.223.99:9050",
        "SOCKS 212.46.208.183:1080",
        "SOCKS 13.140.164.179:3501",
        "SOCKS 147.45.66.116:1082",
        "SOCKS 216.106.179.216:49331",
        "SOCKS 94.156.114.45:1080",
        "SOCKS 176.65.140.214:1081",
        "SOCKS 68.64.179.186:1080",
        "SOCKS 149.129.226.9:9999",
        "SOCKS 216.173.68.36:1080",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 13.140.164.179:3502",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}