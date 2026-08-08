function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 49.0.0.175:1080",
        "SOCKS 163.61.112.241:8080",
        "SOCKS 213.154.2.210:3128",
        "SOCKS 8.213.222.157:104",
        "SOCKS 103.161.104.96:1080",
        "SOCKS 81.70.62.145:15163",
        "SOCKS 223.254.141.102:6618",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 43.135.153.37:47783",
        "SOCKS 147.45.66.116:1082",
        "SOCKS 129.226.66.154:1080",
        "SOCKS 176.65.140.215:1082",
        "SOCKS 54.46.6.234:3129",
        "SOCKS 88.201.248.85:1080",
        "SOCKS 8.213.222.157:443",
        "SOCKS 188.113.182.218:1080",
        "SOCKS 103.236.190.197:1080",
        "SOCKS 192.144.57.124:9050",
        "SOCKS 175.27.250.85:44202",
        "SOCKS 152.70.107.226:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}