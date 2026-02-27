function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 213.35.110.67:10889",
        "SOCKS 159.65.230.91:20360",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 88.210.11.250:1080",
        "SOCKS 159.65.230.91:20924",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 168.119.232.8:8888",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 138.199.25.13:3902",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 43.160.195.20:20005",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}