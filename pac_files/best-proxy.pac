function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.246.62:1080",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 159.65.230.91:20237",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 13.229.107.106:80",
        "SOCKS 185.244.49.248:1080",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 159.65.230.91:20722",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 159.65.230.91:20573",
        "SOCKS 159.65.230.91:20376",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 213.35.110.67:10863",
        "SOCKS 151.0.25.167:1080",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 211.171.114.154:3128",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 159.65.230.91:20399",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}