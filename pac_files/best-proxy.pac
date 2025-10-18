function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 64.181.240.152:3128",
        "SOCKS 103.247.23.251:1111",
        "SOCKS 185.93.89.163:10918",
        "SOCKS 65.109.52.109:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 40.172.232.213:8989",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 45.166.93.113:999",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 8.217.155.235:1011",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 185.93.89.180:4272",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 51.89.68.78:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}