function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.188:57114",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 104.206.98.154:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 158.160.1.124:80",
        "SOCKS 179.96.28.58:80",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 128.140.76.145:14954",
        "SOCKS 126.209.1.14:8082",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 195.158.1.5:8080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 202.58.77.194:8031",
        "SOCKS 159.65.69.186:9200",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}