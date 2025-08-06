function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 40.71.46.210:8214",
        "SOCKS 79.127.54.89:3130",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 135.181.203.208:80",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 91.218.244.153:8989",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 115.72.160.205:10001",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 116.98.181.134:1007",
        "SOCKS 8.219.233.135:8080",
        "SOCKS 159.89.98.131:3128",
        "SOCKS 212.110.188.216:34405",
        "SOCKS 72.10.160.173:19329",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}