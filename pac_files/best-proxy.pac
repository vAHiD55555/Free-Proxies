function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.160.66.130:5555",
        "SOCKS 89.58.45.94:57167",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 195.234.68.34:3128",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 89.58.45.94:15105",
        "SOCKS 89.58.45.94:19325",
        "SOCKS 89.58.45.94:12000",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 89.58.45.94:27215",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}