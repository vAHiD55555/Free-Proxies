function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.170:13701",
        "SOCKS 135.181.203.208:80",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 66.201.7.213:3128",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 218.1.211.2:1080",
        "SOCKS 157.230.220.25:4857",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 45.149.115.145:8888",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 197.254.29.214:32650",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 173.201.37.39:8080",
        "SOCKS 103.192.158.115:46",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 72.10.160.173:24063",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}