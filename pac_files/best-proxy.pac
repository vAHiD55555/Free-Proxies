function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.218.206.170:5432",
        "SOCKS 5.128.225.252:1081",
        "SOCKS 103.138.145.228:1999",
        "SOCKS 93.90.231.101:1080",
        "SOCKS 212.113.99.167:10800",
        "SOCKS 144.124.232.204:443",
        "SOCKS 167.71.245.33:3128",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 43.203.195.46:80",
        "SOCKS 45.137.43.0:1081",
        "SOCKS 202.74.203.17:1080",
        "SOCKS 194.58.33.7:9564",
        "SOCKS 185.221.153.22:8443",
        "SOCKS 144.22.165.206:1088",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 178.237.185.114:1080",
        "SOCKS 147.93.52.252:1081",
        "SOCKS 84.52.227.36:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}