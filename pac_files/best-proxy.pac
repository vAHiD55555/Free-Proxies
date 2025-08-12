function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.68.147.8:3000",
        "SOCKS 121.132.61.211:3128",
        "SOCKS 1.55.250.15:16000",
        "SOCKS 171.237.60.177:10003",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 54.37.72.89:80",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 5.190.36.2:3128",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 44.242.115.206:80",
        "SOCKS 27.79.148.215:16000",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 209.121.164.50:31147",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 13.212.216.15:52638",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}