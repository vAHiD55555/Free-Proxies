function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.78.65.202:6688",
        "SOCKS 212.16.77.50:3128",
        "SOCKS 206.84.201.101:999",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 152.53.36.101:18777",
        "SOCKS 23.137.105.63:30766",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 40.192.38.216:5678",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 135.181.203.208:80",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 72.10.160.172:19021",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 157.175.42.134:3902",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 213.184.242.144:1337",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}