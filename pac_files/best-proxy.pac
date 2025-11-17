function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 155.94.163.199:1080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 103.191.218.29:8199",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 8.217.111.249:1011",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 202.5.37.104:17382",
        "SOCKS 194.87.243.78:1080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 47.239.104.34:1011",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 89.58.45.94:35609",
        "SOCKS 103.183.8.118:8090",
        "SOCKS 46.205.246.63:8080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 209.141.58.213:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}