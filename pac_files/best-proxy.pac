function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.205.215.44:4216",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 41.141.18.200:8080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 94.136.188.78:4003",
        "SOCKS 147.28.240.213:9400",
        "SOCKS 212.110.188.189:34405",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 72.10.160.174:26083",
        "SOCKS 188.125.167.201:8080",
        "SOCKS 212.110.188.195:34411",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 41.143.86.145:8080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 98.190.102.40:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}