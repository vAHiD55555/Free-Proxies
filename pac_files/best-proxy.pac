function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.189.218.76:6969",
        "SOCKS 43.130.38.45:51029",
        "SOCKS 109.107.166.207:30385",
        "SOCKS 194.163.174.78:1086",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 188.131.155.235:1088",
        "SOCKS 193.124.254.120:1080",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 5.161.50.82:8118",
        "SOCKS 196.204.83.229:1976",
        "SOCKS 45.43.60.220:8080",
        "SOCKS 87.120.187.113:1080",
        "SOCKS 103.136.106.13:1081",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 72.195.34.58:4145",
        "SOCKS 31.56.32.59:10800",
        "SOCKS 88.218.206.170:22",
        "SOCKS 61.9.34.222:58765",
        "SOCKS 199.247.18.115:9050",
        "SOCKS 191.252.210.157:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}