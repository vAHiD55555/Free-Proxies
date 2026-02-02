function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 62.60.131.181:4005",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 83.219.250.8:62920",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 13.229.47.109:80",
        "SOCKS 62.60.131.183:4020",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 23.175.201.46:1234",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 47.250.56.98:19190",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}