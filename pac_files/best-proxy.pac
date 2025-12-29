function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.133:1020",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 190.119.160.26:56160",
        "SOCKS 104.248.197.67:1080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 124.197.21.223:3128",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 202.62.34.102:1080",
        "SOCKS 103.174.178.145:2005",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}