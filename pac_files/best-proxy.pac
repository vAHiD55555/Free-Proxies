function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.164.178:2493",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 217.52.247.76:1976",
        "SOCKS 72.10.160.173:24063",
        "SOCKS 50.29.238.9:8888",
        "SOCKS 187.111.144.102:8080",
        "SOCKS 52.47.164.226:9304",
        "SOCKS 119.148.39.241:2727",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 47.79.93.202:1122",
        "SOCKS 3.38.101.138:6115",
        "SOCKS 186.96.111.214:999",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 103.250.69.106:2626",
        "SOCKS 78.12.223.246:1720",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 176.119.16.40:8534",
        "SOCKS 163.223.78.97:8080",
        "SOCKS 182.23.59.202:2525",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}