function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.160.12.147:8199",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 117.74.65.207:443",
        "SOCKS 141.11.1.77:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 152.53.36.101:57849",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 1.180.49.222:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}