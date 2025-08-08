function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 106.52.187.222:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 27.147.215.56:13457",
        "SOCKS 103.102.12.129:1452",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 34.124.190.108:8090",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 181.205.39.238:8080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 47.236.163.74:8080",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 113.120.61.189:43644",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}