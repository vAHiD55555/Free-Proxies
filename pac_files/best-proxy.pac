function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.216.224.108:8192",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 103.242.105.65:7200",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 72.10.160.93:26517",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 212.67.31.235:8080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 120.77.203.0:443",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 115.72.0.142:10003",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 152.53.36.101:33823",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 115.127.80.1:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}