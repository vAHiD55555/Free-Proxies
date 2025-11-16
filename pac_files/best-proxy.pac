function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.68.147.8:3000",
        "SOCKS 120.77.203.0:443",
        "SOCKS 35.181.173.74:9443",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 212.113.100.43:10808",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 157.180.121.252:20889",
        "SOCKS 72.10.160.92:30375",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 89.58.45.94:30985",
        "SOCKS 218.64.122.99:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}