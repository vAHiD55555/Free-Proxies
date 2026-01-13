function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 20.27.11.248:8561",
        "SOCKS 89.46.249.145:36918",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 43.224.10.13:6667",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 115.231.175.80:3000",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 200.201.134.184:8787",
        "SOCKS 202.58.73.246:1111",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 88.216.215.148:9107",
        "SOCKS 103.109.213.134:4949",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 103.153.246.142:8181",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}