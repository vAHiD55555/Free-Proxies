function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.210.79:16379",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 74.50.77.58:9090",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 67.43.228.252:2357",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 89.110.80.195:10149",
        "SOCKS 142.54.237.38:4145",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 135.181.203.208:80",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 222.129.32.173:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}